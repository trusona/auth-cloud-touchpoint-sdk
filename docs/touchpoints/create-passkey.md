# CreatePasskeyTouchpoint Component Documentation

The `CreatePasskeyTouchpoint` component is a custom Lit element designed to facilitate the creation of a passkey within a user interface. It provides a customizable touchpoint for users to either initiate the creation of a passkey or skip the process for later. The component can be styled globally and supports platform-specific customizations.

## Properties

- `userIdentifier`: A `String` that may represent the user's identifier (such as an email or username) displayed during the passkey creation process. Default is an empty string.
- `globalStyles`: An `Object` used to pass global style configurations to the component. This object can influence the appearance of the touchpoint, including styles for headings, paragraphs, buttons, and spinner icons.
- `createPasskey`: An `Object` containing properties to customize the touchpoint's text and visibility aspects, such as `headline`, `buttonText`, `message`, and flags to hide specific elements (`hideHeadline`, `hideMessage`, `hideSkipForNow`).
- `platformSpecificIcons`: An `Object` that may include platform-specific icons or styles, enabling further customization based on the platform.
- `started`: A `Boolean` flag indicating whether the passkey creation process has started. It can be used to toggle the button's processing state. Default is `false`.
- `disableSkipForNow`: A `Boolean` indicating whether the option to skip passkey creation for now should be disabled. Default is `false`.
- `enroll`: A `Function` callback triggered when the user chooses to start the passkey creation process.
- `skipCreatePasskey`: A `Function` callback executed when the user opts to skip the passkey creation process.
- `reset`: A `Function` callback that can be used to reset the touchpoint or perform any necessary cleanup actions.

## Usage

This component is intended to be used in web applications that implement passkey-based authentication. It provides a user-friendly interface for initiating the passkey creation process, with options to customize the text displayed and to handle user actions like starting the process, skipping it, or resetting the touchpoint.

## Example

```html
<create-passkey-touchpoint
  userIdentifier="user@example.com"
  .globalStyles=${{
    heading1Style: "font-size: 24px; color: blue;",
    paragraphStyle: "font-size: 16px; color: black;",
    buttonStyle: "background-color: green; color: white;",
    spinnerIcon: "base64 svg string"
  }}
  .createPasskey=${{
    headline: "Let's set up your passkey",
    buttonText: "Start",
    message: "Passkeys keep your account secure.",
    hideSkipForNow: false
  }}
  .platformSpecificIcons=${{
    androidIcon: "/path/to/android/icon.png",
    iosIcon: "/path/to/ios/icon.png"
  }}
  .enroll=${() => console.log('Enrolling user...')}
  .skipCreatePasskey=${() => console.log('Skipping passkey creation...')}
  .reset=${() => console.log('Resetting touchpoint...')}
  ?disableSkipForNow=${false}
></create-passkey-touchpoint>
