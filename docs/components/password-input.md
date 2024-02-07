# `auth-password-input` Component Documentation

The `auth-password-input` component is a custom Lit 3.0 element designed for secure password entry within web applications. It enhances user experience by including features like password visibility toggle, customizable placeholder text, and dynamic styling options. This component integrates seamlessly with shared styles for a consistent look and feel, while also providing flexibility through CSS custom properties and JavaScript properties for behavior customization.

## Description

This component encapsulates a password input field within an `auth-input-wrapper`, offering additional UI elements like a label for the input and a button to toggle password visibility. It supports customization through properties and CSS custom properties, making it adaptable to various design requirements. The component aims to provide a user-friendly and secure password input mechanism.

## Properties

- `showPassword` (Boolean): Controls the visibility of the password. When true, the password is shown as plain text; when false, it is obscured.
- `userPassword` (String): Binds the value of the password input to a variable, allowing for easy retrieval or manipulation.
- `onInput` (Function): An optional callback function that is invoked whenever the input value changes.
- `isDisabled` (Boolean): Determines whether the input field is disabled. This can be linked to form or application state to control input availability.
- `passwordSignIn` (Object): An object that can contain various configuration options such as hiding the input label (`hideInputLabel`), custom input label text (`inputLabel`), hiding the password toggle button (`hidePasswordToggle`), and custom input hint text (`inputHint`).
- `globalStyles` (Object): Allows for applying additional global styles dynamically to the label element.

## Custom CSS Properties

The component utilizes a range of CSS custom properties for deep customization, affecting both the label and input field styling:

- `--auth-input-ui-label-position`, `--auth-input-ui-label-top`, `--auth-input-ui-label-z-index`, `--auth-input-ui-label-left`, `--auth-input-ui-label-background-color`, `--auth-input-ui-label-padding`, `--auth-input-ui-label-font-style`, `--auth-input-ui-label-font-weight`, `--auth-input-ui-label-font-size`, `--auth-input-ui-label-line-height`, `--auth-input-ui-label-color`: These properties allow customization of the label element that appears above the password input.
- `--auth-input-ui-input-border`, `--auth-input-ui-input-border-radius`, `--auth-input-ui-input-position`, `--auth-input-ui-input-width`, `--auth-input-ui-input-min-width`, `--auth-input-ui-input-margin-top`, `--auth-input-ui-input-font-style`, `--auth-input-ui-input-font-weight`, `--auth-input-ui-input-font-size`, `--auth-input-ui-input-line-height`, `--auth-input-ui-input-padding`, `--auth-input-ui-input-color`: These properties are used to style the password input field itself.

## Usage

To use the `auth-password-input` component, import it into your project and include it in your Lit templates or HTML documents. You can bind to its properties and listen for events to integrate its functionality with your application logic.

Example usage:

```html
<auth-password-input .userPassword="${this.userPassword}"
                     .onInput="${this.handlePasswordChange}"
                     .passwordSignIn="${{ inputLabel: 'Your Password', hidePasswordToggle: false }}">
</auth-password-input>
