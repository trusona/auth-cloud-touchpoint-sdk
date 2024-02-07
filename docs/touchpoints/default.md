# DefaultTouchpoint Component Documentation

The `DefaultTouchpoint` component is a custom Lit element that serves as a generic interface for users to sign in or create an account, potentially offering biometric sign-in options. It provides a flexible interface for capturing user input, displaying configurable text, and managing the flow of authentication or account creation processes.

## Properties

- `globalStyles`: An `Object` used to pass global styling options to the component. This can affect various elements within the component, such as headings, paragraphs, and buttons.
- `signInWithBiometricPrompt`: An `Object` that contains configuration options specific to biometric sign-in prompts, such as headlines, button texts, and field hints.
- `inputDisabled`: A `String` flag that, when set to `'true'`, disables the input field, preventing user interaction.
- `started`: A `String` flag indicating whether the sign-in or account creation process has started. When `'true'`, it may trigger visual feedback such as processing indicators.
- `waitingForInput`: A `String` flag that represents whether the component is waiting for user input. It may influence the state or appearance of elements within the component.
- `performDefaultContinueEventName`: A `String` specifying the name of the custom event that will be dispatched when the user initiates the continuation of the default action, such as signing in or proceeding to the next step.
- `signInAnotherWayEventName`: A `String` specifying the name of the custom event that will be dispatched to handle alternative sign-in methods, which could include biometric options or other authentication mechanisms.

## Methods

- `inputUpdated(event: InputEvent)`: Handles updates to the input field, validating the input and setting component state accordingly.
- `inputPlaceholder()`: Returns a placeholder string for the input field, which can be customized via the `signInWithBiometricPrompt` property.
- `preparePerformLogin()`: Dispatches a custom event indicating that the user wishes to proceed with the default continue action, carrying the user's input as detail.
- `preCheckSignInAnotherWay()`: Dispatches a custom event for initiating an alternative sign-in process.

## Usage

This component is designed to accommodate various sign-in or account creation scenarios, including but not limited to biometric authentication. It allows for extensive customization through properties to fit the needs of different applications, providing a user-friendly and adaptable interface.

## Example

```html
<default-touchpoint
  .globalStyles=${{
    heading1Style: "font-size: 24px; color: #333;",
    paragraphStyle: "font-size: 16px; color: #666;",
    buttonStyle: "background-color: #0A84FF; color: white;"
  }}
  .signInWithBiometricPrompt=${{
    headline: 'Welcome Back',
    usernameFieldHint: 'Enter your email address',
    buttonText: 'Sign In',
    message: 'Sign in quickly with your biometric data'
  }}
  inputDisabled="false"
  started="false"
  waitingForInput="true"
  .performDefaultContinueEventName="default-continue"
  .signInAnotherWayEventName="alternative-sign-in"
></default-touchpoint>
