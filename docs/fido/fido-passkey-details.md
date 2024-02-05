# FidoPasskeyDetails Component Documentation

The `FidoPasskeyDetails` component is a Lit 3.0 element designed to display information about passkeys. It presents a user-friendly interface that explains the concept of passkeys, their benefits, and details about their usage. The component makes use of the `@trusona/webauthn` package for handling passkey activities, showcasing a list of passkey activities if available.

## Properties

- `passkeyActivitiesMap`: A `Map<string, Array<PasskeyActivity>>` that holds passkey activities keyed by a string identifier. Each entry in the map corresponds to an array of `PasskeyActivity` objects which represent individual activities associated with passkeys.

## Custom CSS Properties

The component provides several custom CSS properties to allow for extensive styling flexibility. These properties include:

- `--fido-passkey-details-container-display`: Controls the display property of the passkey details container. Default is `flex`.
- `--fido-passkey-details-container-row-gap`: Specifies the gap between rows in the container. Default is `1.25rem`.
- `--fido-passkey-details-container-width`: Sets the width of the container. Default is `260px`.
- `--fido-passkey-details-container-flex-direction`: Determines the flex direction of the container. Default is `column`.
- `--fido-passkey-details-container-justify-content`: Aligns the content along the main axis of the container. Default is `center`.
- `--fido-passkey-details-container-align-content`: Aligns the container's lines within when there's extra space in the cross-axis. Default is `center`.
- `--fido-passkey-details-container-flex-shrink`: Defines the ability of the container to shrink if necessary. Default is `0`.
- `--fido-passkey-details-container-align-self`: Allows the default alignment to be overridden for the container. Default is `stretch`.
- `--fido-passkey-details-container-margin`: Sets the margin of the container. Default is `auto`.
- `--fido-passkey-details-paragraph-display`: Controls the display property of paragraphs within the component. Default is `flex`.
- `--fido-passkey-details-paragraph-flex-direction`: Specifies the flex direction for paragraphs. Default is `column`.
- `--fido-passkey-details-paragraph-gap`: Sets the gap between elements in the paragraph. Default is `8px`.
- `--fido-passkey-details-paragraph-flex-wrap`: Allows the paragraph elements to wrap as needed. Default is `wrap`.
- `--fido-passkey-details-paragraph-align-self`: Overrides the default alignment for paragraph elements. Default is `stretch`.
- `--fido-passkey-details-h1-color`: Sets the text color for `h1` headings. Default is `#000`.
- `--fido-passkey-details-h1-font-size`: Specifies the font size for `h1` headings. Default is `24px`.
- `--fido-passkey-details-h1-font-style`: Determines the font style for `h1` headings. Default is `normal`.
- `--fido-passkey-details-h1-font-weight`: Sets the font weight for `h1` headings. Default is `400`.
- `--fido-passkey-details-h1-line-height`: Controls the line height for `h1` headings. Default is `normal`.
- `--fido-passkey-details-h3-align-self`: Allows the default alignment to be overridden for `h3` headings. Default is `stretch`.
- `--fido-passkey-details-h3-color`: Sets the text color for `h3` headings. Default is `#000`.
- `--fido-passkey-details-h3-font-size`: Specifies the font size for `h3` headings. Default is `14px`.
- `--fido-passkey-details-h3-font-style`: Determines the font style for `h3` headings. Default is `normal`.
- `--fido-passkey-details-h3-font-weight`: Sets the font weight for `h3` headings. Default is `400`.
- `--fido-passkey-details-h3-line-height`: Controls the line height for `h3` headings. Default is `normal`.
- `--fido-passkey-details-ul-display`: Controls the display property of `ul` elements. Default is `block`.
- `--fido-passkey-details-ul-list-style-type`: Sets the list style type for `ul` elements. Default is `disc`.
- `--fido-passkey-details-ul-margin-before`: Specifies the margin before `ul` elements. Default is `1em`.
- `--fido-passkey-details-ul-margin-after`: Specifies the margin after `ul` elements. Default is `1em`.
- `--fido-passkey-details-ul-margin-start`: Sets the start margin for `ul` elements. Default is `0`.
- `--fido-passkey-details-ul-margin-end`: Sets the end margin for `ul` elements. Default is `0`.
- `--fido-passkey-details-ul-padding-start`: Specifies the padding start for `ul` elements. Default is `20px`.

These custom properties allow for a highly customizable appearance, making it easy to integrate the `FidoPasskeyDetails` component into a wide variety of web applications.
