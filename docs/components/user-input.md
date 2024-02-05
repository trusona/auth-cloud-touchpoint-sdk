# `auth-user-input` Component Documentation

The `auth-user-input` component is a Lit 3.0 custom element designed to facilitate user input in web applications, with a particular focus on authentication scenarios. This versatile component supports various types of user identifiers, including usernames, email addresses, and phone numbers, and integrates seamlessly with biometric sign-in prompts.

## Description

This component encapsulates an input field tailored for user identifiers, offering customizable properties to cater to different input types (e.g., email, phone number). It also provides hooks for inline styling and event handling, making it highly adaptable to specific authentication flows. By leveraging CSS custom properties and optional properties, developers can easily integrate this component into a broader authentication system with minimal effort.

## Properties

- **`userIdentifier`**: A `String` that holds the current value of the user input. This could be a username, email address, or phone number, depending on the configuration.
- **`inputId`**: A `String` specifying the ID attribute of the input element. Default is `'username'`.
- **`inputName`**: A `String` specifying the name attribute of the input element. Default is `'username'`.
- **`inputType`**: A `String` specifying the type attribute of the input element. This can be adjusted to suit different types of input, such as `'text'` or `'email'`.
- **`inputAutocomplete`**: A `String` that provides browser hints for auto-completing the input field, enhancing the user experience.
- **`onInput`**: A `Function` that is called whenever the input value changes, allowing for custom event handling logic.
- **`isEmailInput`**: A `Boolean` indicating whether the input field is specifically for email addresses.
- **`isPhoneNumberInput`**: A `Boolean` indicating whether the input field is specifically for phone numbers.
- **`inputAutofocus`**: A `Boolean` that, if true, automatically focuses the input field when the component is rendered.
- **`inputRequired`**: A `Boolean` indicating whether the input field is required for form submission.
- **`inputDisabled`**: A `Boolean` indicating whether the input field is disabled.
- **`signInWithBiometricPrompt`**: An `Object` that may contain various properties related to biometric sign-in prompts, such as text hints and visibility flags.
- **`globalStyles`**: An `Object` that allows passing down global style configurations to the component.

## Custom CSS Properties

The component's appearance can be customized using the following CSS custom properties:

- `--auth-input-ui-label-position`: The position of the label. Default is `absolute`.
- `--auth-input-ui-label-top`: The top position of the label. Default is `.25rem`.
- `--auth-input-ui-label-z-index`: The z-index of the label. Default is `1`.
- `--auth-input-ui-label-left`: The left position of the label. Default is `2em`.
- `--auth-input-ui-label-background-color`: The background color of the label. Default is `white`.
- `--auth-input-ui-label-padding`: The padding of the label. Default is `0 7px`.
- `--auth-input-ui-input-border`: The border of the input. Default is `1px solid #444444`.
- `--auth-input-ui-input-border-radius`: The border radius of the input. Default is `6px`.
- `--auth-input-ui-input-position`: The position of the input. Default is `relative`.
- `--auth-input-ui-input-width`: The width of the input. Default is `100%`.
- `--auth-input-ui-input-min-width`: The minimum width of the input. Default is `300px`.
- `--auth-input-ui-input-margin-top`: The top margin of the input. Default is `10px`.
- `--auth-input-ui-input-padding`: The padding inside the input. Default is `1rem`.

## Usage

The `auth-user-input` component can be used within Lit templates or HTML documents to capture user identifiers with optional customization for specific needs.

Example usage:

```html
<auth-user-input
  .userIdentifier=${'user@example.com'}
  .inputType=${'email'}
  .isEmailInput=${true}
  .onInput=${(e) => console.log('Input changed:', e.target.value)}
  .inputRequired=${true}
></auth-user-input>
