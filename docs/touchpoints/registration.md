# RegistrationTouchpoint Component Documentation

The `RegistrationTouchpoint` component is a custom Lit element designed to facilitate user registration, particularly focusing on encouraging users to upgrade or enroll in simplified sign-in options, such as biometric authentication. It provides a user-friendly interface for presenting registration prompts, incorporating custom styles, and handling user interactions.

## Properties

- `upgradePrompt`: An `Object` that contains text and configuration for the registration prompt, including `headline`, `bodyText`, `buttonText`, and optional content such as `learnMoreText` and `learnMoreContent`.
- `globalStyles`: An `Object` used to pass global style configurations to the component. This object can influence the appearance of various elements within the component, like headings, paragraphs, and buttons.
- `platformSpecificIcons`: An `Object` that may contain HTML strings or paths for platform-specific icons, including a `biometricIcon`.
- `started`: A `Boolean` flag indicating whether the registration process has started. This can be used to control the display of processing indicators.
- `learnMoreContentVisible`: A `Boolean` flag controlling the visibility of the "Learn More" content section.

## Methods

- `setButtonFocus()`: Sets focus on the registration button, aiding in accessibility and user experience.
- `updateIcons()`: Updates the inner HTML of icon elements with platform-specific or custom icons provided through `platformSpecificIcons` and `globalStyles`.
- `toggleLearnMore()`: Toggles the visibility of additional information provided in the `learnMoreContent` of the `upgradePrompt` object.

## Slots and Styling

The component does not use slots but allows extensive customization through properties for text content and styling. The `globalStyles` and `platformSpecificIcons` properties enable the customization of icons and styles across different platforms.

## Usage

This component is used in web applications to prompt users for registration or to upgrade their sign-in methods to more secure or convenient options like biometric authentication. It can be customized to fit the application's branding and user experience design.

## Example

```html
<registration-touchpoint
  .upgradePrompt=${{
    headline: "Enhance Your Security",
    bodyText: "Enable biometric sign-in for faster and more secure access.",
    buttonText: "Enable Now",
    learnMoreText: "Learn more about biometric sign-in",
    learnMoreContent: "Biometric sign-in allows you to use your fingerprint, face, or iris to securely sign in to your account, making your login process both easier and more secure."
  }}
  .globalStyles=${{
    heading1Style: "font-size: 24px; color: #333;",
    paragraphStyle: "font-size: 16px; color: #666;",
    buttonStyle: "background-color: #0A84FF; color: white;",
    smallParagraphStyle: "font-size: 14px; color: #888;",
    spinnerIcon: "Base64 SVG string",
    rightArrowIcon: ">",
    downArrowIcon: "v",
    hideLearnMore: false
  }}
  .platformSpecificIcons=${{
    biometricIcon: 'Base64 SVG string'
  }}
  .enroll=${() => console.log("Enrolling...")}
></registration-touchpoint>
