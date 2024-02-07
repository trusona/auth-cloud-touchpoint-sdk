# FidoPasskeyDetailsCard Component Documentation

The `FidoPasskeyDetailsCard` component is a custom Lit 3.0 element that provides a detailed card view for displaying passkey activity. It is designed to show specific activities related to user authentication, such as registration and assertion events. The component leverages the `@trusona/webauthn` package for accessing and displaying passkey activity information in a user-friendly manner.

## Properties

- `passkeyActivities`: An `Array` of `PasskeyActivity` objects. Each `PasskeyActivity` object contains detailed information about a single authentication event, such as the type of activity (registration or assertion), the date it occurred, and the operating system used.
- `maxActivityShown`: A `Number` indicating the maximum number of passkey assertion activities to display. This property allows the component to limit the number of activities shown to the user, providing a cleaner interface.

## Custom CSS Properties

This component uses several custom CSS properties for styling, allowing developers to customize its appearance according to their application's design requirements:

- `--fido-passkey-details-card-display`: Controls the display style of the card. Default is `flex`.
- `--fido-passkey-details-card-width`: Sets the width of the card. Default is `280px`.
- `--fido-passkey-details-card-flex-direction`: Determines the direction of the flex layout within the card. Default is `column`.
- `--fido-passkey-details-card-align-items`: Aligns the card's items along the cross axis. Default is `flex-start`.
- `--fido-passkey-details-card-border-radius`: Sets the border radius of the card. Default is `10px`.
- `--fido-passkey-details-card-padding`: Specifies the padding inside the card. Default is `3px`.
- `--fido-passkey-details-card-border`: Defines the border of the card. Default is `1px solid #EEE`.
- `--fido-passkey-details-card-background`: Sets the background color of the card. Default is `#FFF`.
- `--fido-passkey-details-card-header-display`: Controls the display style of the card header. Default is `flex`.
- `--fido-passkey-details-card-header-flex-direction`: Sets the flex direction of the header. Default is `column`.
- `--fido-passkey-details-card-header-align-items`: Aligns the header items along the cross axis. Default is `center`.
- `--fido-passkey-details-card-header-justify-content`: Justifies the content of the header along the main axis. Default is `center`.
- `--fido-passkey-details-card-header-gap`: Defines the gap between elements in the header. Default is `10px`.
- `--fido-passkey-details-card-header-padding`: Sets the padding inside the header. Default is `15px 30px`.
- `--fido-passkey-details-card-header-align-self`: Allows the header to override its align-self value. Default is `stretch`.
- `--fido-passkey-details-card-header-border-radius`: Sets the border radius of the header. Default is `8px 8px`.
- `--fido-passkey-details-card-header-background`: Specifies the background color of the header. Default is `#FAFAFA`.
- `--fido-passkey-details-card-body-display`: Controls the display style of the card body. Default is `flex`.
- `--fido-passkey-details-card-body-padding`: Sets the padding inside the body. Default is `10px 20px`.
- `--fido-passkey-details-card-body-flex-direction`: Determines the direction of the flex layout within the body. Default is `column`.
- `--fido-passkey-details-card-body-align-items`: Aligns the body's items along the cross axis. Default is `flex-start`.
- `--fido-passkey-details-card-body-align-self`: Allows the body to override its align-self value. Default is `stretch`.
- `--fido-passkey-details-img-width`: Sets the width of the images used within the card. Default is `22px`.
- `--fido-passkey-details-img-height`: Sets the height of the images used within the card. Default is `22px`.
- `--fido-passkey-details-type-img-width`: Specifies the width of the type images (e.g., mobile or desktop icon). Default is `18px`.
- `--fido-passkey-details-type-img-height`: Specifies the height of the type images. Default is `18px`.
- `--fido-passkey-details-type-img-margin-right`: Sets the margin to the right of the type images. Default is `10px`.
- `--fido-passkey-details-card-h2-color`: Sets the text color of `h2` elements within the card. Default is `#444`.
- `--fido-passkey-details-card-h2-text-align`: Controls the text alignment of `h2` elements. Default is `center`.
- `--fido-passkey-details-card-h2-font-size`: Specifies the font size of `h2` elements. Default is `11px`.
- `--fido-passkey-details-card-h2-font-style`: Determines the font style of `h2` elements. Default is `normal`.
- `--fido-passkey-details-card-h2-font-weight`: Sets the font weight of `h2` elements. Default is `400`.
- `--fido-passkey-details-card-h2-line-height`: Controls the line height of `h2` elements. Default is `14px`.
- `--fido-passkey-details-card-h3-color`: Sets the text color of `h3` elements within the card. Default is `#444`.
- `--fido-passkey-details-card-h3-font-size`: Specifies the font size of `h3` elements. Default is `11px`.
- `--fido-passkey-details-card-h3-font-style`: Determines the font style of `h3` elements. Default is `normal`.
- `--fido-passkey-details-card-h3-font-weight`: Sets the font weight of `h3` elements. Default is `400`.
- `--fido-passkey-details-card-h3-line-height`: Controls the line height of `h3` elements. Default is `14px`.

These custom CSS properties provide a flexible framework for styling the `FidoPasskeyDetailsCard` component, ensuring it can be easily integrated and customized within different web applications.
