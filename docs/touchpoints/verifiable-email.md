# Verifiable Email Touchpoint Component Documentation

The `VerifiableEmailTouchpoint` component is a custom Lit element designed for handling user interactions related to verifiable email login. It provides a flexible and configurable interface for verifying email addresses and entering verification codes.

## Properties

- `globalStyles`: An `Object` that allows you to specify global styling directives for the component, ensuring visual consistency.
- `otpSignIn`: An `Object` containing configurations and text for the OTP (One-Time Password) sign-in flow, including headline, message, and button text.
- `setFocus`: A `Boolean` attribute indicating whether to set focus on the email input field when rendered.
- `started`: A `Boolean` attribute indicating whether the authentication process has started.
- `waitingForInput`: A `Boolean` attribute that denotes whether the component is awaiting user input.
- `login`: An `Object` representing login-related information, including the user identifier (email).
- `inputDisabled`: A `Boolean` attribute that disables input fields when set to true.
- `loginError`: An `Object` representing login error information, including error types like RATE_LIMIT_ERROR.
- `isInErrorState`: A `Boolean` attribute indicating whether the component is in an error state.
- `signInWithBiometricPrompt`: A `Function` callback for handling biometric authentication prompts.
- `performLogin`: A `Function` callback for performing the login operation.
- `signInAnotherWay`: A `Function` callback for offering alternative sign-in methods.
- `resendCode`: A `Function` callback for resending verification codes.
- `startOver`: A `Function` callback for restarting the authentication process.
- `codeCompleted`: A `Function` callback for handling completion of code entry.
- `currentStep`: A `Function` for determining the current step in the login flow based on the `LoginStep` enum.
- `isError`: A `Function` for checking if a specific error type exists in the `loginError` object.

## Methods

- `updated(changedProperties: Map<string | number | symbol, unknown>)`: An overridden method that allows you to perform actions when component properties change.
- `preparePerformLogin(username: string)`: A method for preparing and initiating the login operation.
- `performResendCode(event: Event)`: An asynchronous method for resending verification codes.
- `onWebAuthCodeChanged(code: string)`: A method for updating the web authentication code input field.
- `preLogin()`: A method for initiating the login operation.
- `onWebAuthCodeCompleted(code: string)`: A method for handling the completion of web authentication code entry.

## Example Usage

```html
<verifiable-email-touchpoint
  .globalStyles=${{
    heading1Style: "font-size: 24px;",
    buttonStyle: "background-color: blue; color: white;",
    spinnerIcon: "base64 SVG string;"
  }}
  .otpSignIn=${{
    headline: 'Verify Email',
    buttonText: 'Continue',
    message: 'Enter the code sent to your email to verify your account.'
  }}
  .started=${false}
  .waitingForInput=${true}
  .login=${{ userIdentifier: 'user@example.com' }}
  .inputDisabled=${false}
  .loginError=${null}
  .isInErrorState=${false}
  .signInWithBiometricPrompt=${() => console.log('Biometric authentication initiated.')}
  .performLogin=${(username) => console.log(`Perform login for ${username}`)}
  .signInAnotherWay=${() => console.log('Alternative sign-in method selected.')}
  .resendCode=${() => console.log('Resending verification code.')}
  .startOver=${() => console.log('Starting over the authentication process.')}
  .codeCompleted=${() => console.log('Verification code entry completed.')}
  .currentStep=${(step) => step === LoginStep.ProvideEmail}
  .isError=${(errorType) => errorType === LoginError.RATE_LIMIT_ERROR}
></verifiable-email-touchpoint>
