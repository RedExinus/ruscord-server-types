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

  /** Gets refresh token. */
  refreshToken: string;
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

/** Defines properties of a Module error. */
export interface ModuleError {
  /** Gets error name. */
  name: string;

  /** Gets error message. */
  message: string;

  /** Gets error cause if provided. */
  cause?: unknown;
}

/**
 * Contains a collection of validation check names.
 * @remarks Check names should be read negated.
 */
export enum ValidationCheck {
  /** Indicates that unknown check failed. */
  UNKNOWN,

  /** Indicates that field was not alphabetic (a-zA-Z). */
  ALPHA,

  /** Indicates that field was not alphanumeric. */
  ALPHANUMERIC,

  /** Indicates that fiels was not a boolean. */
  BOOLEAN,

  /** Indicates that field does not contain substring/char. */
  CONTAINS,

  /** Indicates that field was not a credit card number. */
  CREDIT_CARD,

  /** Indicates that field was not a date. */
  DATE,

  /** Indicates that field was not a decimal. */
  DECIMAL,

  /** Indicates that field cannot be divided by some number. */
  DIVISIBLE_BY,

  /** Indicates that field was not an email. */
  EMAIL,

  /** Indicates that field was not empty. */
  EMPTY,

  /** Indicates that field was not equal to some valud. */
  EQUALS,

  /** Indicates that field does not exist. */
  EXISTS,

  /** Indicates that field was not a float. */
  FLOAT,

  /** Indicates that field was not a fully qualified domain name. */
  FQDN,

  /** Indicates that field was not an hexadecimal. */
  HEXADECIMAL,

  /** Indicates that field was not an HEX color. */
  HEX_COLOR,

  /** Indicates that field was not in an array. */
  IN,

  /** Indicates that field was not a JSON. */
  JSON,

  /** Indicates that field length was less than or greater than given range. */
  LENGTH,

  /** Indicates that field was not a locale name. */
  LOCALE,

  /** Indicates that field was not in a lowercase. */
  LOWERCASE,

  /** Indicates that field does not matches to a valid MIME type format. */
  MIME_TYPE,

  /** Indicates that field was not a mobile phone number. */
  MOBILE_PHONE,

  /** Indicates that field was empty. */
  NOT_EMPTY,

  /** Indicates that field was not a number. */
  NUMBER,

  /** Indicates that field was not a numeric. */
  NUMERIC,

  /** Indicates that field was not a port. */
  PORT,

  /** Indicates that field was not a string. */
  STRING,

  /** Indicates that field was not a strong password. */
  STRONG_PASSWORD,

  /** Indicates that field was not a time. */
  TIME,

  /** Indicates that field was not in an uppercase. */
  UPPERCASE,

  /** Indicates that field was not an URL. */
  URL,

  /** Indicates that field was not an UUID. */
  UUID,

  /** Indicates that field was not an IP address. */
  IP,
}

/** Points where error occurred. */
declare type Location = "body" | "cookies" | "headers" | "params" | "query";

/** Defines fields of an error message. */
export interface ValidationMessage {
  /** Gets the name of a failed check. */
  check: ValidationCheck;

  /** Gets an error message. */
  message?: string | undefined;
}

/** Defines properties of a field validation error. */
export type FieldError = {
  /** Gets error type. */
  type: "field";

  /** Gets field name. */
  field: string;

  /** Gets field value */
  value?: string | undefined;

  /** Gets field location. */
  location?: Location | undefined;

  /** Gets the name of a check and error message. */
  message: ValidationMessage;
};

/**
 * Defines properties of an alternative validation error.
 * @remarks Thrown when compaining A | B. Contain errors from the first check group.
 */
export type AlternativeError = {
  /** Gets error type. */
  type: "alternative" | "unknown";

  /** Gets error message for this alternative validation check. */
  message: ValidationMessage;

  /** Gets a collection of field errors. */
  errors: FieldError[];
};

/**
 * Defines properties of a grouped alternative validation error.
 * @remarks Thrown when comparing [ A | B | C | ... ]. Contains all errors from every check group.
 */
export type GroupedAlternativeError = {
  /** Gets error type. */
  type: "grouped";

  /** Gets error message for this alternative validation group. */
  message: ValidationMessage;

  /** Gets grouped collection of field errors. */
  errors: FieldError[][];
};

/** Defines type of a validation result. */
export type ValidationResult = (FieldError | AlternativeError | GroupedAlternativeError)[];
