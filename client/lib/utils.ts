import * as crypto from 'crypto';

export const utils = {
  /**
   * Secure compare, from https://github.com/freewil/scmp
   */
  secureCompare: (
    in_a: WithImplicitCoercion<ArrayBuffer | SharedArrayBuffer>,
    in_b: WithImplicitCoercion<ArrayBuffer | SharedArrayBuffer>
  ): boolean => {
    const a = Buffer.from(in_a);
    const b = Buffer.from(in_b);

    // return early here if buffer lengths are not equal since timingSafeEqual
    // will throw if buffer lengths are not equal
    if (a.length !== b.length) {
      return false;
    }

    // use crypto.timingSafeEqual if available (since Node.js v6.6.0),
    // otherwise use our own scmp-internal function.
    if (crypto.timingSafeEqual) {
      return crypto.timingSafeEqual(a, b);
    }

    const len = a.length;
    let result = 0;

    for (let i = 0; i < len; ++i) {
      result |= a[i] ^ b[i]; // eslint-disable-line no-bitwise
    }
    return result === 0;
  },
};
