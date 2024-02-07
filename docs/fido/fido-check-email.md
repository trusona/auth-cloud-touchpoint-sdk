# `fido-check-email` Component Documentation

The `fido-check-email` component is a custom Lit 3.0 element designed to inform users to check their email after taking an action that requires email verification. This component is particularly useful in workflows where users are required to confirm their email address to proceed, such as during account registration or password reset processes.

## Description

This component showcases a container with a friendly message prompting users to check their email for a verification link. It features an illustrative email icon and displays the user's email address to remind them where to look. The component's design can be easily adjusted to match the look and feel of any application, thanks to its support for CSS custom properties.

## Properties

- **`email`**: A `String` property that holds the user's email address to be displayed within the component.

- **`onClick`**: A `Function` property that defines a callback function to be executed when the user interacts with the component, typically used to handle click events on the displayed email address.

- **`onCancel`**: A `Function` property that defines a callback function to be executed when the close (X) icon is clicked, allowing users to dismiss the message.

## Custom CSS Properties

The appearance of the component can be customized using the following CSS custom properties:

- `--fido-check-email-container-width`, `--fido-check-email-container-min-height`, `--fido-check-email-container-margin`, `--fido-check-email-container-border-radius`, `--fido-check-email-container-border`, `--fido-check-email-container-background`, `--fido-check-email-container-box-shadow`: Custom properties for styling the main container.

- `--fido-check-email-card-display`, `--fido-check-email-card-flex-direction`, `--fido-check-email-card-justify-content`, `--fido-check-email-card-align-items`, `--fido-check-email-card-flex-shrink`, `--fido-check-email-card-align-self`, `--fido-check-email-card-gap`, `--fido-check-email-card-padding`: Custom properties for styling the card that contains the message.

- `--fido-check-email-img-width`, `--fido-check-email-img-height`: Custom properties for styling the main image/icon within the card.

- `--fido-check-email-close-img-width`, `--fido-check-email-close-img-height`, `--fido-check-email-close-img-position`, `--fido-check-email-close-img-right`, `--fido-check-email-close-img-top`: Custom properties for styling the close (X) icon.

- `--fido-check-email-h1-color`, `--fido-check-email-h1-text-align`, `--fido-check-email-h1-font-size`, `--fido-check-email-h1-font-style`, `--fido-check-email-h1-font-weight`, `--fido-check-email-h1-line-height`: Custom properties for styling the main heading.

- `--fido-check-email-body-color`, `--fido-check-email-body-text-align`, `--fido-check-email-body-font-size`, `--fido-check-email-body-font-style`, `--fido-check-email-body-font-weight`, `--fido-check-email-body-line-height`: Custom properties for styling the body text.

## Usage

The `fido-check-email` component is designed to be used in scenarios where email verification is required. It provides users with clear instructions on how to proceed by checking their email.

Example usage:

```html
<fido-check-email
  email="user@example.com"
  .onClick=${() => console.log('Email clicked')}
  .onCancel=${() => console.log('Close icon clicked')}
></fido-check-email>
