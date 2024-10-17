/** Contains a collection of Ruscord API status codes. */
export enum ApiStatusCodes {
  /** General success. */
  SUCCESS = 501,

  /** Data provided by user has some missing fields. */
  MALFORMED_DATA = 2001,

  /** Data validation failed. */
  VALIDATION_FAILED = 2011,

  /** Data validation succeeded. */
  VALIDATION_SUCCEEDED = 2012,

  /** Data found/exists. */
  FOUND = 3001,

  /** Data not found/exists. */
  NOT_FOUND = 3002,

  /** Data deleted. */
  DELETED = 3003,

  /** Data corrupted. */
  CORRUPTED = 3004,

  /** Authentication succeeded. */
  AUTHENTICATED = 4001,

  /** Authentication failed. */
  UNAUTHENTICATED = 4002,

  /** Unauthorized access to API nodes of denied access to FS or logical modules. */
  UNAUTHORIZED = 4003,

  /** Action requires confirmation via OTP. */
  CONFIRMATION_REQUIRED = 4004,

  /** Action confirmation code was resent to an email. */
  CONFIRMATION_RESENT = 4005,

  /** Action confirmation code has expired. */
  CONFIRMATION_EXPIRED = 4006,

  /** Something went wrong on a server side. */
  SERVER_FAULT = 8001,

  /** Something went wrong on a client side. */
  CLIENT_FAULT = 8002,

  /** Someone should be fired... */
  MODULE_FAULT = 8011,

  /** Something went wrong on a database side. */
  DATABASE_FAULT = 8012,
}

/** Defines properties of a Ruscord API response. */
export interface ApiResponse<T = any> {
  /** Gets response status code. */
  status: ApiStatusCodes;

  /** Gets response message. */
  message?: string | undefined;

  /** Gets response data. */
  data?: T | undefined;
}

/** Defines properties of a confirm action request. */
export interface ConfirmRequest {
  /** Gets confrimation code. */
  code: number;
}

/** Defines properties of a 2FA setup response. */
export interface Setup2faResponse {
  /** Gets QR-code data string. */
  qrCode: string;

  /** Gets antiforgery token. */
  antiforgery: string;
}

/** Defines properties of a 2FA confirmation request. */
export interface Confirm2faRequest {
  /** Gets antiforgery token. */
  antiforgery: string;
}

/** Defines properties of a device data. */
export interface DeviceData {
  /** Gets device name. */
  name: string;

  /** Gets device fingerprint. */
  print: string;
}

/** Defines properties of a sign-in request. */
export interface SignInRequest {
  /** Gets login or email. */
  identity: string;

  /** Gets password. */
  password: string;

  /** Gets device data. */
  deviceData: DeviceData;
}

/** Defines properties of a sign in response. */
export interface SignInResponse {
  /** Gets access token. */
  accessToken: string;
}

/** Defines properties of a sign-up request. */
export interface SignUpRequest {
  /** Gets login. */
  login: string;

  /** Gets email. */
  email: string;

  /** Gets password. */
  password: string;

  /** Gets device data. */
  deviceData: DeviceData;
}
