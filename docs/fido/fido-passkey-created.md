# FidoPasskeyCreated Component

The `FidoPasskeyCreated` component is a LitElement-based custom web component designed to provide a visual confirmation that a passkey has been successfully created. It forms part of a user authentication interface, aiming to enhance security and user experience by promoting the use of passkeys for authentication. This component displays a success message along with options to either view the account or cancel and close the dialog.

## Properties

- `onClick`: Function
    - Description: A callback function that is invoked when the "View your account" button is clicked. It should contain the logic for navigating the user to their account overview or similar page.
    - Type: `Function`
    - Default: An empty function that does nothing when called.

- `onCancel`: Function
    - Description: A callback function that is invoked when the close (X) button is clicked. It should contain the logic for closing the passkey creation confirmation dialog.
    - Type: `Function`
    - Default: An empty function that does nothing when called.

## Custom CSS Properties

The following custom CSS properties are used to style the `FidoPasskeyCreated` component. These properties allow for customization of the component's appearance to align with different themes or branding guidelines.

- `--fido-passkey-created-container-width`: Sets the width of the outer container. Default is `320px`.
- `--fido-passkey-created-container-min-height`: Specifies the minimum height of the container. Default is `420px`.
- `--fido-passkey-created-container-margin`: Defines the margin around the container. Default is `auto`.
- `--fido-passkey-created-container-border-radius`: Sets the border radius of the container for rounded corners. Default is `6px`.
- `--fido-passkey-created-container-border`: Defines the border style of the container. Default is `1px solid #000`.
- `--fido-passkey-created-container-background`: Sets the background color of the container. Default is `#FFF`.
- `--fido-passkey-created-container-box-shadow`: Applies a box shadow to the container. Default is `0 0 20px 0 rgba(0, 0, 0, 0.15)`.
- `--fido-passkey-created-card-display`: Controls the display type of the card section. Default is `flex`.
- `--fido-passkey-created-card-flex-direction`: Sets the flex direction of the card. Default is `column`.
- `--fido-passkey-created-card-justify-content`: Aligns the card's content along the main axis. Default is `center`.
- `--fido-passkey-created-card-align-items`: Aligns items in the card along the cross axis. Default is `center`.
- `--fido-passkey-created-card-flex-shrink`: Defines the ability for the card to shrink if necessary. Default is `0`.
- `--fido-passkey-created-card-align-self`: Allows the default alignment to be overridden for the card. Default is `stretch`.
- `--fido-passkey-created-card-gap`: Sets the gap between items in the card. Default is `20px`.
- `--fido-passkey-created-card-padding`: Applies padding inside the card. Default is `60px 30px`.
- `--fido-passkey-created-img-width`: Sets the width of the success icon. Default is `82px`.
- `--fido-passkey-created-img-height`: Sets the height of the success icon. Default is `82px`.
- `--fido-passkey-created-close-img-width`: Specifies the width of the close button icon. Default is `24px`.
- `--fido-passkey-created-close-img-height`: Specifies the height of the close button icon. Default is `24px`.
- `--fido-passkey-created-close-img-position`: Sets the position of the close button icon. Default is `absolute`.
- `--fido-passkey-created-close-img-right`: Defines the right positioning of the close button. Default is `10px`.
- `--fido-passkey-created-close-img-top`: Defines the top positioning of the close button. Default is `10px`.
- `--fido-passkey-created-close-img-cursor`: Sets the cursor type when hovering over the close button. Default is `pointer`.
- `--fido-passkey-created-h1-color`: Sets the color of the H1 element. Default is `#000`.
- `--fido-passkey-created-h1-text-align`: Sets the text alignment of the H1 element. Default is `center`.
- `--fido-passkey-created-h1-font-size`: Sets the font size of the H1 element. Default is `24px`.
- `--fido-passkey-created-h1-font-style`: Sets the font style of the H1 element. Default is `normal`.
- `--fido-passkey-created-h1-font-weight`: Sets the font weight of the H1 element. Default is `400`.
- `--fido-passkey-created-body-line-height`: Sets the line height of the H1 element. Default is `400`.
