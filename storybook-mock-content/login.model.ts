export enum LoginMethod {
  VerifiableEmail = 'VERIFIABLE_EMAIL',
  PublicKeyCredential = 'PUBLIC_KEY_CREDENTIAL',
  UsernamePassword = 'USERNAME_PASSWORD',
  Undefined = 'UNDEFINED'
}

export enum LoginStep {
  ProvideEmail = 'PROVIDE_EMAIL',
  ProvideUsername = 'PROVIDE_USERNAME',
  ProvidePassword = 'PROVIDE_PASSWORD',
  VerifyOtp = 'VERIFY_OTP',
  RegisterPublicKeyCredential = 'REGISTER_PUBLIC_KEY_CREDENTIAL',
  VerifyPublicKeyCredential = 'VERIFY_PUBLIC_KEY_CREDENTIAL',
  Complete = 'COMPLETE'
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
}
