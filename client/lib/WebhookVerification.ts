// Based on https://github.com/stripe/stripe-node#webhook-signing
import * as crypto from 'crypto';
import { utils } from './utils';
import { VitalSignatureVerificationError, VitalError } from './Error';

function parseHeader(header: string | string[], scheme: string) {
  if (typeof header !== 'string') {
    return null;
  }

  return header.split(',').reduce(
    (accum, item) => {
      const kv = item.split('=');

      if (kv[0] === 't') {
        accum.timestamp = +kv[1];
      }

      if (kv[0] === scheme) {
        accum.signatures.push(kv[1]);
      }

      return accum;
    },
    {
      timestamp: -1,
      signatures: [],
    }
  );
}

export const signature = {
  EXPECTED_SCHEME: 'v1',

  _computeSignature: (payload: string, secret: string): string => {
    return crypto
      .createHmac('sha256', secret)
      .update(payload, 'utf8')
      .digest('hex');
  },

  verifyHeader(
    payload: string,
    header: string,
    secret: string,
    tolerance: number = null
  ): boolean {
    payload = Buffer.isBuffer(payload) ? payload.toString('utf8') : payload;

    // Express's type for `Request#headers` is `string | []string`
    // which is because the `set-cookie` header is an array,
    // but no other headers are an array (docs: https://nodejs.org/api/http.html#http_message_headers)
    // (Express's Request class is an extension of http.IncomingMessage, and doesn't appear to be relevantly modified: https://github.com/expressjs/express/blob/master/lib/request.js#L31)
    if (Array.isArray(header)) {
      throw new Error(
        'Unexpected: An array was passed as a header, which should not be possible for the vital-signature header.'
      );
    }

    header = Buffer.isBuffer(header) ? header.toString('utf8') : header;

    const details = parseHeader(header, 'v1');

    if (!details || details.timestamp === -1) {
      throw new VitalSignatureVerificationError({
        message: 'Unable to extract timestamp and signatures from header',
        detail: {
          header,
          payload,
        },
      });
    }

    if (!details.signatures.length) {
      throw new VitalSignatureVerificationError({
        message: 'No signatures found with expected scheme',
        detail: {
          header,
          payload,
        },
      });
    }

    const expectedSignature = this._computeSignature(
      `${details.timestamp}.${payload}`,
      secret
    );

    const signatureFound = !!details.signatures.filter(
      utils.secureCompare.bind(utils, expectedSignature)
    ).length;

    if (!signatureFound) {
      throw new VitalSignatureVerificationError({
        message:
          'No signatures found matching the expected signature for payload.' +
          ' Are you passing the raw request body you received from Vital?',
        detail: {
          header,
          payload,
        },
      });
    }

    const timestampAge = Math.floor(Date.now() / 1000) - details.timestamp;

    if (tolerance > 0 && timestampAge > tolerance) {
      throw new VitalSignatureVerificationError({
        message: 'Timestamp outside the tolerance zone',
        detail: {
          header,
          payload,
        },
      });
    }

    return true;
  },
};

/**
 * Generates a header to be used for webhook mocking
 */

interface Options {
  timestamp?: number;
  payload: string;
  secret: string;
  scheme?: string;
  signature?: string;
}

export function generateTestHeaderString(opts: Options): string {
  if (!opts) {
    throw new VitalError({
      message: 'Options are required',
    });
  }

  opts.timestamp = Math.floor(opts.timestamp) || Math.floor(Date.now() / 1000);
  opts.scheme = opts.scheme || 'v1';

  opts.signature =
    opts.signature ||
    signature._computeSignature(
      `${opts.timestamp}.${opts.payload}`,
      opts.secret
    );

  const generatedHeader = [
    `t=${opts.timestamp}`,
    `${opts.scheme}=${opts.signature}`,
  ].join(',');

  return generatedHeader;
}
