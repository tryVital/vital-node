import * as webhooks from '../client/lib/WebhookVerification';
import * as api from '../client/Webhooks';
import { describe, it } from 'mocha';
import { mockWebhookData } from './data/mock_webhook';
import axios from 'axios';


const axiosInstance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});


const expect = require('chai').expect; // eslint-disable-line

const EVENT_PAYLOAD = mockWebhookData;
const EVENT_PAYLOAD_STRING = JSON.stringify(EVENT_PAYLOAD, null, 2);
const SECRET = 'whsec_test_secret';

describe('Webhooks', () => {
  describe('.generateTestHeaderString', () => {
    it('should throw when no opts are passed', () => {
      expect(() => {
        // @ts-ignore
        webhooks.generateTestHeaderString();
      }).to.throw();
    });

    it('should correctly construct a webhook header', () => {
      const header = webhooks.generateTestHeaderString({
        payload: EVENT_PAYLOAD_STRING,
        secret: SECRET,
      });

      expect(header).to.not.be.undefined; //eslint-disable
      expect(header.split(',')).to.have.lengthOf(2);
    });
  });

  describe('.constructWebhookEvent', () => {
    it('should return an Event instance from a valid JSON payload and valid signature header', () => {
      const header = webhooks.generateTestHeaderString({
        payload: EVENT_PAYLOAD_STRING,
        secret: SECRET,
      });

      const event = new api.WebhooksApi("base_url", axiosInstance).constructWebhookEvent(
        EVENT_PAYLOAD_STRING,
        header,
        SECRET
      );
      // @ts-ignore
      expect(event.data?.id).to.equal(EVENT_PAYLOAD.data.id); 
    });

    it('should raise a JSON error from invalid JSON payload', () => {
      const header = webhooks.generateTestHeaderString({
        payload: '} I am not valid JSON; 123][',
        secret: SECRET,
      });
      expect(() => {
        new api.WebhooksApi("base_url", axiosInstance).constructWebhookEvent(
          '} I am not valid JSON; 123][',
          header,
          SECRET
        );
      }).to.throw(/Unexpected token/);
      expect(() => {
        new api.WebhooksApi("base_url", axiosInstance).constructWebhookEvent(
          '} I am not valid JSON; 123][',
          header,
          SECRET
        );
      }).to.throw(/Unexpected token/);
    });

    it('should raise a SignatureVerificationError from a valid JSON payload and an invalid signature header', () => {
      const header = 'bad_header';

      expect(() => {
        new api.WebhooksApi("base_url", axiosInstance).constructWebhookEvent(
          EVENT_PAYLOAD_STRING,
          header,
          SECRET
        );
      }).to.throw(/Unable to extract timestamp and signatures from header/);
    });

    it('should error if you pass a signature which is an array, even though our types say you can', () => {
      const header = webhooks.generateTestHeaderString({
        payload: EVENT_PAYLOAD_STRING,
        secret: SECRET,
      });

      expect(() => {
        new api.WebhooksApi("base_url", axiosInstance).constructWebhookEvent(
          EVENT_PAYLOAD_STRING,
          // @ts-ignore
          [header],
          SECRET
        );
      }).to.throw(
        'Unexpected: An array was passed as a header, which should not be possible for the vital-signature header.'
      );
    });
  });

  describe('.verifySignatureHeader', () => {
    it('should raise a SignatureVerificationError when the header does not have the expected format', () => {
      const header = "I'm not even a real signature header";

      const expectedMessage =
        /Unable to extract timestamp and signatures from header/;

      expect(() => {
        webhooks.signature.verifyHeader(EVENT_PAYLOAD_STRING, header, SECRET);
      }).to.throw(expectedMessage);

      expect(() => {
        webhooks.signature.verifyHeader(EVENT_PAYLOAD_STRING, null, SECRET);
      }).to.throw(expectedMessage);

      expect(() => {
        webhooks.signature.verifyHeader(
          EVENT_PAYLOAD_STRING,
          undefined,
          SECRET
        );
      }).to.throw(expectedMessage);

      expect(() => {
        webhooks.signature.verifyHeader(EVENT_PAYLOAD_STRING, '', SECRET);
      }).to.throw(expectedMessage);
    });

    it('should raise a SignatureVerificationError when there are no signatures with the expected scheme', () => {
      const header = webhooks.generateTestHeaderString({
        payload: EVENT_PAYLOAD_STRING,
        secret: SECRET,
        scheme: 'v0',
      });

      expect(() => {
        webhooks.signature.verifyHeader(EVENT_PAYLOAD_STRING, header, SECRET);
      }).to.throw(/No signatures found with expected scheme/);
    });

    it('should raise a SignatureVerificationError when there are no valid signatures for the payload', () => {
      const header = webhooks.generateTestHeaderString({
        payload: EVENT_PAYLOAD_STRING,
        secret: SECRET,
        signature: 'bad_signature',
      });

      expect(() => {
        webhooks.signature.verifyHeader(EVENT_PAYLOAD_STRING, header, SECRET);
      }).to.throw(
        /No signatures found matching the expected signature for payload/
      );
    });

    it('should raise a SignatureVerificationError when the timestamp is not within the tolerance', () => {
      const header = webhooks.generateTestHeaderString({
        timestamp: Date.now() / 1000 - 15,
        payload: EVENT_PAYLOAD_STRING,
        secret: SECRET,
      });

      expect(() => {
        webhooks.signature.verifyHeader(
          EVENT_PAYLOAD_STRING,
          header,
          SECRET,
          10
        );
      }).to.throw(/Timestamp outside the tolerance zone/);
    });

    it(
      'should return true when the header contains a valid signature and ' +
        'the timestamp is within the tolerance',
      () => {
        const header = webhooks.generateTestHeaderString({
          timestamp: Date.now() / 1000,
          payload: EVENT_PAYLOAD_STRING,
          secret: SECRET,
        });

        expect(
          webhooks.signature.verifyHeader(
            EVENT_PAYLOAD_STRING,
            header,
            SECRET,
            10
          )
        ).to.equal(true);
      }
    );

    it('should return true when the header contains at least one valid signature', () => {
      let header = webhooks.generateTestHeaderString({
        timestamp: Date.now() / 1000,
        payload: EVENT_PAYLOAD_STRING,
        secret: SECRET,
      });

      header += ',v1=potato';

      expect(
        webhooks.signature.verifyHeader(
          EVENT_PAYLOAD_STRING,
          header,
          SECRET,
          10
        )
      ).to.equal(true);
    });

    it(
      'should return true when the header contains a valid signature ' +
        'and the timestamp is off but no tolerance is provided',
      () => {
        const header = webhooks.generateTestHeaderString({
          timestamp: 12345,
          payload: EVENT_PAYLOAD_STRING,
          secret: SECRET,
        });

        expect(
          webhooks.signature.verifyHeader(EVENT_PAYLOAD_STRING, header, SECRET)
        ).to.equal(true);
      }
    );

    it('should accept Buffer instances for the payload and header', () => {
      const header = webhooks.generateTestHeaderString({
        timestamp: Date.now() / 1000,
        payload: EVENT_PAYLOAD_STRING,
        secret: SECRET,
      });

      expect(
        webhooks.signature.verifyHeader(
          // @ts-ignore
          Buffer.from(EVENT_PAYLOAD_STRING),
          Buffer.from(header),
          SECRET,
          10
        )
      ).to.equal(true);
    });
  });
});
