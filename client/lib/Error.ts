/**
 * VitalError is the base error from which all other more specific Vital errors derive.
 * Specifically for errors returned from Vital's REST API.
 */

interface RawType {
  type?: string;
  rawType?: string;
  code?: string;
  param?: string;
  detail?: Record<string, unknown>;
  headers?: Record<string, unknown>;
  requestId?: string;
  statusCode?: number;
  message: string;
}

export class VitalError extends Error {
  type?: string;
  rawType?: string;
  code?: string;
  param?: string;
  detail?: Record<string, unknown>;
  headers?: Record<string, unknown>;
  requestId?: string;
  statusCode?: number;
  message: string;

  constructor(raw: RawType) {
    super(raw.message);
    this.type = this.constructor.name;
    this.rawType = raw.type;
    this.code = raw.code;
    this.param = raw.param;
    this.detail = raw.detail;
    this.headers = raw.headers;
    this.requestId = raw.requestId;
    this.statusCode = raw.statusCode;
    this.message = raw.message;
  }
}

/**
 * SignatureVerificationError is raised when the signature verification for a
 * webhook fails
 */
export class VitalSignatureVerificationError extends VitalError {}
