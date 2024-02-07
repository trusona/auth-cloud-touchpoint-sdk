# `fido-create-account` Component Documentation

The `fido-create-account` component is a Lit 3.0 custom element tailored for the account creation process, especially in systems employing FIDO standards for enhanced security. This component provides a streamlined and visually appealing way to guide users through creating an account, emphasizing ease of use and security.

## Description

This component features a main container that encapsulates elements such as a back button, main and secondary text, an email display card, and a customizable action button. It also includes links to terms of use and privacy policy to ensure compliance and transparency. The component is designed with customization in mind, allowing for easy adaptation to the specific styling and functional requirements of various web applications.

## Properties

- **`email`**: A `String` property to display the user's email address, indicating the email associated with the new account.

- **`termsHref`**: A `String` property providing the URL to the terms of use. This is optional and can be used to link to the application's terms of service.

- **`privacyHref`**: A `String` property providing the URL to the privacy policy. This is optional and can be used to link to the application's privacy policy document.

- **`onClick`**: A `Function` property defining a callback function to be executed when the main action button is clicked, typically used for submitting the account creation form.

- **`onBack`**: A `Function` property defining a callback function to be executed when the back button is clicked, allowing users to navigate to the previous step or page.

## Custom CSS Properties

The visual appearance of the component can be customized using the following CSS custom properties:

- `--fido-create-account-width`, `--fido-create-account-min-height`, `--fido-create-account-margin`, `--fido-create-account-border-radius`, `--fido-create-account-border`, `--fido-create-account-background`, `--fido-create-account-box-shadow`: Styling for the main container.

- `--fido-create-account-display`, `--fido-create-account-flex-direction`, `--fido-create-account-justify-content`, `--fido-create-account-align-items`, `--fido-create-account-flex-shrink`, `--fido-create-account-align-self`, `--fido-create-account-gap`, `--fido-create-account-padding`: Styling for the card that holds the account creation content.

- `--fido-create-account-img-width`, `--fido-create-account-img-height`: Dimensions for the email icon within the email display card.

- `--fido-create-account-position`, `--fido-create-account-left`, `--fido-create-account-top`, `--fido-create-account-bg-transparent`, `--fido-create-account-color`, `--fido-create-account-font-size`, `--fido-create-account-font-style`, `--fido-create-account-font-weight`, `--fido-create-account-line-height`, `--fido-create-account-cursor`, `--fido-create-account-text-align`: Styling for the back button.

- `--fido-create-account-h1-color`, `--fido-create-account-h1-text-align`, `--fido-create-account-h1-font-size`, `--fido-create-account-h1-font-weight`: Styling for the main heading.

- `--fido-create-account-h2-color`, `--fido-create-account-h2-text-align`, `--fido-create-account-h2-font-size`, `--fido-create-account-h2-font-weight`: Styling for the secondary text.

- `--fido-create-account-terms-color`, `--fido-create-account-terms-text-align`, `--fido-create-account-terms-font-size`, `--fido-create-account-terms-font-weight`, `--fido-create-account-terms-line-height`, `--fido-create-account-terms-a-text-decoration`: Styling for the terms of use and privacy policy text.

## Usage

The `fido-create-account` component simplifies the presentation of account creation steps, providing users with clear instructions and actionable options.

Example usage:

```html
<fido-create-account
  email="user@example.com"
  termsHref="/terms"
  privacyHref="/privacy"
  .onClick=${() => console.log('Create account clicked')}
  .onBack=${() => console.log('Back to previous step')}
></fido-create-account>
