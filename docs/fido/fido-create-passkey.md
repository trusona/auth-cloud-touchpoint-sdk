# FidoCreatePasskey Component

The `FidoCreatePasskey` component is a LitElement-based custom web component designed to facilitate the creation of passkeys. This component is part of a user authentication interface that promotes the use of passkeys over traditional passwords, aiming to enhance security and user experience by leveraging biometric or device lock methods for authentication.

## Properties

- `onClick`: Function
    - Description: A callback function that is invoked when the "Create passkey" button is clicked. It should contain the logic for initiating the passkey creation process.
    - Type: `Function`
    - Default: An empty function that does nothing when called.

## Custom CSS Properties

The following custom CSS properties are used to style the `FidoCreatePasskey` component. They allow for easy customization of the component's appearance to fit different themes or branding requirements.

- `--fido-create-passkey-display`: Controls the display type of the container. Default is `flex`.
- `--fido-create-passkey-row-gap`: Sets the gap between rows in the container. Default is `1.25rem`.
- `--fido-create-passkey-width`: Specifies the width of the container. Default is `260px`.
- `--fido-create-passkey-flex-direction`: Sets the flex direction of the container. Default is `column`.
- `--fido-create-passkey-justify-content`: Aligns the container's children along the main axis. Default is `center`.
- `--fido-create-passkey-align-content`: Aligns the container's lines within the flex container when there is extra space in the cross-axis. Default is `center`.
- `--fido-create-passkey-flex-shrink`: Defines the ability for a flex item to shrink if necessary. Default is `0`.
- `--fido-create-passkey-align-self`: Allows the default alignment to be overridden for individual flex items. Default is `stretch`.
- `--fido-create-passkey-margin`: Sets the margin of the container. Default is `auto`.
- `--fido-create-passkey-card-display`: Controls the display type of the card. Default is `flex`.
- `--fido-create-passkey-card-padding`: Sets the padding inside the card. Default is `20px`.
- `--fido-create-passkey-card-flex-direction`: Sets the flex direction of the card. Default is `column`.
- `--fido-create-passkey-card-align-items`: Aligns items in the card along the cross axis. Default is `center`.
- `--fido-create-passkey-card-gap`: Sets the gap between items in the card. Default is `20px`.
- `--fido-create-passkey-card-background`: Sets the background color of the card. Default is `#F5F9FC`.
- `--fido-create-passkey-img-width`: Sets the width of the image in the card. Default is `110px`.
- `--fido-create-passkey-img-height`: Sets the height of the image in the card. Default is `96px`.
- `--fido-create-passkey-paragraph-display`: Controls the display type of the paragraph elements. Default is `flex`.
- `--fido-create-passkey-paragraph-flex-direction`: Sets the flex direction of the paragraph elements. Default is `column`.
- `--fido-create-passkey-paragraph-gap`: Sets the gap between paragraph elements. Default is `8px`.
- `--fido-create-passkey-paragraph-flex-wrap`: Sets whether the paragraph elements should wrap. Default is `wrap`.
- `--fido-create-passkey-h1-color`: Sets the color of the H1 element. Default is `#000`.
- `--fido-create-passkey-h1-text-align`: Sets the text alignment of the H1 element. Default is `center`.
- `--fido-create-passkey-h1-font-size`: Sets the font size of the H1 element. Default is `24px`.
- `--fido-create-passkey-h1-font-style`: Sets the font style of the H1 element. Default is `normal`.
- `--fido-create-passkey-h1-font-weight`: Sets the font weight of the H1 element. Default is `400`.
- `--fido-create-passkey-h1-line-height`: Sets the line height of the H1 element. Default is `normal`.
- `--fido-create-passkey-h2-align-self`: Allows the default alignment to be overridden for H2 elements. Default is `stretch`.
- `--fido-create-passkey-h2-color`: Sets the color of the H2 element. Default is `#000`.
- `--fido-create-passkey-h2-text-align`: Sets the text alignment of the H2 element. Default is `center`.
- `--fido-create-passkey-h2-font-size`: Sets the font size of the H2 element. Default is `22px`.
- `--fido-create-passkey-h2-font-style`: Sets the font style of the H2 element. Default is `normal`.
- `--fido-create-passkey-h2-font-weight`: Sets the font weight of the H2 element. Default is `400`.
- `--fido-create-passkey-h2-line-height`: Sets the line height of the H2 element. Default is `normal`.
- `--fido-create-passkey-h3-align-self`: Allows the default alignment to be overridden for H3 elements. Default is `stretch`.
- `--fido-create-passkey-h3-color`: Sets the color of the H3 element. Default is `#000`.
- `--fido-create-passkey-h3-font-size`: Sets the font size of the H3 element. Default is `14px`.
- `--fido-create-passkey-h3-font-style`: Sets the font style of the H3 element. Default is `normal`.
- `--fido-create-passkey-h3-font-weight`: Sets the font weight of the H3 element. Default is `400`.
- `--fido-create-passkey-h3-line-height`: Sets the line height of the H3 element. Default is `normal`.
- `--fido-create-passkey-ul-display`: Controls the display type of the UL element. Default is `block`.
- `--fido-create-passkey-ul-list-style-type`: Sets the list style type of the UL element. Default is `disc`.
- `--fido-create-passkey-ul-margin-before`: Sets the margin before the UL element. Default is `1em`.
- `--fido-create-passkey-ul-margin-after`: Sets the margin after the UL element. Default is `1em`.
- `--fido-create-passkey-ul-margin-start`: Sets the start margin of the UL element. Default is `0`.
- `--fido-create-passkey-ul-margin-end`: Sets the end margin of the UL element. Default is `0`.
- `--fido-create-passkey-ul-padding-start`: Sets the start padding of the UL element. Default is `20px`.
