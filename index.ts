//#region API Response

/** Contains a collection of API status codes. */
export enum ApiStatusCodes {
  /** Success. */
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

  /** Authorization succeded. */
  AUTHORIZED = 4003,

  /** Unauthorized access to API nodes of denied access to FS or logical modules. */
  UNAUTHORIZED = 4004,

  /** Action requires confirmation via OTP. */
  CONFIRMATION_REQUIRED = 4011,

  /** Action confirmation code was resent to an email. */
  CONFIRMATION_RESENT = 4012,

  /** Action confirmation code has expired. */
  CONFIRMATION_EXPIRED = 4013,

  /** Device is blocked. */
  DEVICE_BLOCKED = 4014,

  /** Something went wrong on a server side. */
  SERVER_FAULT = 8001,

  /** Something went wrong on a client side. */
  CLIENT_FAULT = 8002,
}

/** Defines properties of an API response. */
export interface ApiResponse<T = any> {
  /** Gets status code. */
  status: ApiStatusCodes;

  /** Gets response message. */
  message?: string;

  /** Gets response data. */
  data?: T;
}

//#endregion

//#region Common

/** Defines properties of soft deletable entity. */
interface SoftDelete {
  /** Gets creation date of an entity. */
  createdAt: Date;

  /** Gets modification date of an entity. */
  updatedAt: Date;

  /** Gets removal date of an entity if it was removed. */
  removedAt?: Date;
}

//#endregion

//#region Devices

/** Contains a collection of platforms. */
export enum Platforms {
  /** Web platform. */
  WEB = 14071047,

  /** Mobile platform. */
  MOBILE = 25082058,

  /** Desktop platform. */
  DESKTOP = 36093069,
}

/** Defined properties of device data. */
export interface DeviceData {
  /** Gets device identity. */
  identity: string;

  /** Gets device fingerprint. */
  fingerprint: string;

  /** Gets device platform. */
  platform: Platforms;
}

/** Defined properties of device info. */
export interface DeviceInfo extends DeviceData, SoftDelete {
  /** Gets device id. */
  id: number;

  /** Gets whether or not device is confirmed. */
  confirmed: boolean;

  /** Gets whether or not device is blocked. */
  blocked: boolean;
}

//#endregion

//#region Account

export interface UserShortInfo extends SoftDelete {
  /** Gets username. */
  username: string;

  /** Gets user`s avatar source. */
  avatarSrc?: string;

  /** Gets user`s primary color. */
  prmColor?: string;

  /** Gets user`s last activity date. */
  lastActiveAt: Date;
}

export interface UserFullInfo extends UserShortInfo {
  /** Gets user`s status source. */
  status?: string;

  /** Gets user`s description source. */
  description?: string;

  /** Gets user`s banner source. */
  bannedSrc?: string;

  /** Gets user`s secondary color. */
  sndColor?: string;
}

/** Defines properties of TOTP set-up response. */
export interface TotpSetUpResponse {
  /** Gets TOTP url-encoded QR code. */
  qrCode: string;
}

export interface TotpRestoreRequest {
  /** Gets email address. */
  email: string;

  /** Gets restore code. */
  code: string;
}

/** Defines properties of TOTP restore codes response */
export interface TotpRestoreResponse {
  /** Gets a collection of restore codes. */
  restore: string[];
}

//#endregion

//#region Authentication

/** Defines properties of a sign-in request. */
export interface SignInRequest {
  /** Gets login. */
  login: string;

  /** Gets password. */
  password: string;

  /** Gets device data. */
  deviceData: DeviceData;
}

/** Defines properties of a sign-in response. */
export interface SignInResponse {
  /** Gets an access token. */
  accessToken: string;

  /** Gets an update token. */
  updateToken: string;
}

/** Defines properties of a sign-up request. */
export interface SignUpRequest extends SignInRequest {
  /** Gets email. */
  email: string;
}

/** Defines properties of refresh token response. */
export interface RefreshResponse extends SignInResponse {}

//#endregion

//#region Validation

/** Contains a collection of validation check names. */
export enum ValidationCheck {
  /** Indicates that field was not alphabetic (a-zA-Z). */
  NOT_ALPHA,

  /** Indicates that field was not alphanumeric. */
  NOT_ALPHANUMERIC,

  /** Indicates that fiels was not a boolean. */
  NOT_BOOLEAN,

  /** Indicates that field does not contain substring/char. */
  NOT_CONTAINS,

  /** Indicates that field was not a credit card number. */
  NOT_CREDIT_CARD,

  /** Indicates that field was not a date. */
  NOT_DATE,

  /** Indicates that field was not a decimal number. */
  NOT_DECIMAL,

  /** Indicates that field cannot be divided by some number. */
  NOT_DIVISIBLE_BY,

  /** Indicates that field was not an email. */
  NOT_EMAIL,

  /** Indicates that field was not empty. */
  NOT_EMPTY,

  /** Indicates that field was not equal to some valud. */
  NOT_EQUALS,

  /** Indicates that field does not exist. */
  NOT_EXISTS,

  /** Indicates that field was not a float. */
  NOT_FLOAT,

  /** Indicates that field was not a fully qualified domain name. */
  NOT_FQDN,

  /** Indicates that field was not an hexadecimal. */
  NOT_HEXADECIMAL,

  /** Indicates that field was not an HEX color. */
  NOT_HEX_COLOR,

  /** Indicates that field was not in an array. */
  NOT_IN,

  /** Indicates that field was not a JSON. */
  NOT_JSON,

  /** Indicates that field length was less than or greater than given range. */
  NOT_LENGTH,

  /** Indicates that field was not a locale name. */
  NOT_LOCALE,

  /** Indicates that field was not in a lowercase. */
  NOT_LOWERCASE,

  /** Indicates that field does not matches to a valid MIME type format. */
  NOT_MIME_TYPE,

  /** Indicates that field was not a mobile phone number. */
  NOT_MOBILE_PHONE,

  /** Indicates that field was empty. */
  EMPTY,

  /** Indicates that field was not a number. */
  NOT_NUMBER,

  /** Indicates that field was not a numeric. */
  NOT_NUMERIC,

  /** Indicates that field was not a port. */
  NOT_PORT,

  /** Indicates that field was not a string. */
  NOT_STRING,

  /** Indicates that field was not a strong password. */
  NOT_STRONG_PASSWORD,

  /** Indicates that field was not a time. */
  NOT_TIME,

  /** Indicates that field was not in an uppercase. */
  NOT_UPPERCASE,

  /** Indicates that field was not an URL. */
  NOT_URL,

  /** Indicates that field was not an UUID. */
  NOT_UUID,

  /** Indicates that field was not an IP address. */
  NOT_IP,
}

/** Points where error occurred. */
declare type Location = "body" | "cookies" | "headers" | "params" | "query";

/** Defines properties of validation error. */
export interface ValidationError {
  /** Gets field`s name. */
  field: string;

  /** Gets the name of failed check. */
  check: ValidationCheck;

  /** Gets field`s location. */
  location: Location;

  /** Gets error message. */
  message?: string;

  /** Gets field`s value. */
  value?: any;
}

/** Defines validation result type. */
export type ValidationResult = ValidationError[];

//#endregion
