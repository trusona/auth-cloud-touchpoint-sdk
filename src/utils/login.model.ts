export enum LoginMethod {
  VerifiableEmail = 'VERIFIABLE_EMAIL',
  VerifiablePhoneNumber = 'VERIFIABLE_PHONE_NUMBER',
  PublicKeyCredential = 'PUBLIC_KEY_CREDENTIAL',
  UsernamePassword = 'USERNAME_PASSWORD',
  UsernamePasswordSecondFactor = 'USERNAME_PASSWORD_2FA',
  Undefined = 'UNDEFINED'
}

export enum LoginStep {
  ProvideEmail = 'PROVIDE_EMAIL',
  ProvideUsername = 'PROVIDE_USERNAME',
  ProvidePassword = 'PROVIDE_PASSWORD',
  ProvidePhoneNumber = 'PROVIDE_PHONE_NUMBER',
  VerifyOtp = 'VERIFY_OTP',
  RegisterPublicKeyCredential = 'REGISTER_PUBLIC_KEY_CREDENTIAL',
  VerifyPublicKeyCredential = 'VERIFY_PUBLIC_KEY_CREDENTIAL',
  Complete = 'COMPLETE'
}

export enum LoginError {
  DEFAULT_ERROR = 'DEFAULT_ERROR',
  FAILED_OTP_ERROR = 'FAILED_OTP_ERROR',
  RATE_LIMIT_ERROR = 'RATE_LIMIT_ERROR'
}

export interface Login {
  method: LoginMethod
  challenge?: string
  userIdentifier?: string
  displayName?: string
  response?: any
  nextStep?: LoginStep
  redirectTo?: string
  errors?: Map<string, string>
  password?: string
  credential?: any
}
