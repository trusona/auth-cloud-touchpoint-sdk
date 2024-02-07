# StartTouchpoint Component Documentation

The `StartTouchpoint` component is a custom Lit element tailored to initiate user interactions within a digital service, such as sign-ins or account creations. This component is highly flexible, accommodating various input types including email and phone numbers, and it integrates validation logic to enhance user experience.

## Properties

- `started`: A `Boolean` flag indicating if the process (e.g., sign-in or registration) has begun, potentially altering the component's visual feedback to reflect an ongoing operation.
- `waitingForInput`: A `Boolean` flag that denotes whether the component is awaiting user input. This can be used to manage the state of submission controls like buttons.
- `isEmailInput`: A `Boolean` flag specifying if the input field is intended for email addresses, enabling specific validation.
- `isPhoneNumberInput`: A `Boolean` flag that determines if the input field is for phone numbers, triggering appropriate validation routines.
- `inputAutofocus`: A `Boolean` attribute that, when true, focuses the input field as soon as it is rendered, enhancing user experience.
- `inputRequired`: A `Boolean` attribute indicating if the input is mandatory, aiding in form validation and submission handling.
- `inputDisabled`: A `Boolean` attribute that disables the input field when set to true, useful in scenarios where user interaction should be temporarily restricted.
- `inputId`: A `String` representing the ID of the input field, facilitating label association and accessibility enhancements.
- `inputName`: A `String` designating the name attribute of the input field, crucial for form data handling.
- `inputType`: A `String` indicating the type of input (e.g., text, email), used for semantic HTML and enhancing on-screen keyboards on mobile devices.
- `inputAutocomplete`: A `String` that advises the browser on how it should auto-complete the field, improving user experience by leveraging existing information.
- `login`: An `Object` containing any pre-filled login information or configurations for the input field.
- `globalStyles`: An `Object` for passing global styling directives to the component, allowing for visual consistency across different touchpoints.
- `signInWithBiometricPrompt`: An `Object` that may include prompts or instructions for biometric sign-in options, enhancing the component's flexibility to accommodate advanced authentication methods.
- `signInAnotherWay`: A `Function` callback to offer users an alternative authentication method, improving accessibility and user choice.
- `performContinue`: A `Function` that is called to proceed with the operation (e.g., sign-in, registration) based on user input.

## Example Usage

```html
<start-touchpoint
  .started=${false}
  .waitingForInput=${true}
  .isEmailInput=${true}
  .inputAutofocus=${true}
  .inputRequired=${true}
  .login=${{userIdentifier: 'user@example.com'}}
  .globalStyles=${{
    heading1Style: "font-size: 24px;",
    buttonStyle: "background-color: blue; color: white;"
  }}
  .signInWithBiometricPrompt=${{
    headline: 'Welcome Back!',
    buttonText: 'Sign In',
    message: 'Sign in with your email or use biometric authentication for quicker access.'
  }}
  .signInAnotherWay=${() => console.log('Alternative sign-in method selected.')}
  .performContinue=${(username) => console.log(`Continue with ${username}`)}
></start-touchpoint>
