export = ServerTypes;

declare namespace ServerTypes {
  /** Contains a collection of Ruscord API status codes. */
  export enum ApiStatusCodes {
    /** General success. */
    SUCCESS = 501,

    /** Structure provided by user has some missing fields. */
    MALFORMED_DATA = 2001,

    /** Structure validation failed. */
    VALIDATION_FAILED = 2011,

    /** Structure validation succeeded. */
    VALIDATION_SUCCEEDED = 2012,

    /** Data or file found. */
    FOUND = 3001,

    /** Data or file not found. */
    NOT_FOUND = 3002,

    /** Data or file deleted. */
    DELETED = 3003,

    /** Data or file corrupted. */
    CORRUPTED = 3004,

    /** Authentication succeeded. */
    AUTHENTICATED = 4001,

    /** Authorization failed. */
    UNAUTHENTICATED = 4002,

    /** Unauthorized access to API nodes of denied access to FS or logical modules. */
    UNAUTHORIZED = 4003,

    /** New device needs confirmation via 2FA. */
    CONFIRMATION_REQUIRED = 4004,

    /** Something went wrong on a server side. */
    SERVER_FAULT = 8001,

    /** Something went wrong on a client side. */
    CLIENT_FAULT = 8002,

    /** Someone should be fired... */
    MODULE_FAULT = 8011,

    /** Something went wrong on a database side. */
    DATABASE_FAULT = 8012,
  }

  /** Represents a Ruscord API response. */
  export interface ApiResponse<T = any> {
    /** Gets response status code. */
    status: ApiStatusCodes;

    /** Gets response message. */
    message?: string;

    /** Gets response data. */
    data?: T;
  }

  /** Represents device confirmation data. */
  export interface ConfirmDeviceData {
    /** Gets request ID. */
    requestId: string;

    /** Gets confrimation code. */
    value: number;
  }

  /** Represents a device data. */
  export interface DeviceData {
    /** Gets device name. */
    name: string;

    /** Gets device fingerprint. */
    print: string;
  }

  /** Represents a sign in data. */
  export interface SignInData {
    /** Gets login or email. */
    identity: string;

    /** Gets password. */
    password: string;

    /** Gets device data. */
    device: DeviceData;
  }

  /** Represents a sign up. */
  export interface SignUpData {
    /** Gets login. */
    login: string;

    /** Gets email. */
    email: string;

    /** Gets password. */
    password: string;

    /** Gets device data. */
    device: DeviceData;
  }
}
