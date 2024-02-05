# AuthButton Component Documentation

## Description

The `<auth-button>` component is a customizable button designed for authentication actions, built using the Lit 3.0 framework. It allows for a dynamic display of content, such as showing a processing state with an optional icon or a default text message. The component is highly customizable through properties and custom CSS variables, enabling developers to adjust its appearance and behavior to fit their application's design and functionality needs.

## Properties

- `onClick` (Function): Optional. A function that is called when the button is clicked. It does not accept any arguments and does not return any value.
- `isProcessing` (Boolean): Optional. A flag to indicate whether the button is in a processing state. When `true`, the button displays a processing icon or text.
- `processingIcon` (String): Optional. A string representing an SVG icon to be displayed when the button is in a processing state. If not provided, a default text message is shown.
- `isWaitingForInput` (Boolean): Optional. A flag to indicate whether the button is waiting for input and should be disabled.
- `inlineStyle` (String): The inline CSS styles to be applied directly to the button. Defaults to an empty string.
- `btnId` (String): An identifier for the button element, allowing for easier reference and styling.

## Custom CSS Properties

The component leverages a set of custom CSS properties for styling, providing flexibility to theme the button as needed:

- `--auth-btn-margin`: The margin around the button. Defaults to `auto`.
- `--auth-btn-align`: The alignment of the button's content. Defaults to `center`.
- `--auth-btn-appearance`: The CSS appearance property of the button. Defaults to `none`.
- `--auth-btn-display`: The display property of the button. Defaults to `flex`.
- `--auth-btn-font-size`: The font size of the button's text. Defaults to `16px`.
- `--auth-btn-font-style`: The font style of the button's text. Defaults to `normal`.
- `--auth-btn-font-weight`: The font weight of the button's text. Defaults to `bold`.
- `--auth-btn-justify`: The justification of the button's content. Defaults to `space-around`.
- `--auth-btn-letter-spacing`: The letter spacing of the button's text. Defaults to `1px`.
- `--auth-btn-line-height`: The line height of the button's text. Defaults to `17px`.
- `--auth-btn-min-height`: The minimum height of the button. Defaults to `47px`.
- `--auth-btn-min-width`: The minimum width of the button. Defaults to `300px`.
- `--auth-btn-padding`: The padding inside the button. Defaults to `0 24px`.
- `--auth-btn-text-align`: The text alignment within the button. Defaults to `center`.
- `--auth-btn-transition-*`: Properties to control the transition effects on the button (`delay`, `duration`, `property`, `timing-function`). These allow for smooth visual transitions.
- `--auth-btn-width`: The width of the button. Defaults to `100%`.
- `--auth-btn-cursor`: The cursor when hovering over the button. Defaults to `pointer`.
- `--auth-btn-bg-color`: The background color of the button. Defaults to `#7B46D1`.
- `--auth-btn-border-*`: Properties to control the border of the button (`width`, `style`, `color`). The defaults create a solid border matching the background color.
- `--auth-btn-color`: The color of the button's text. Defaults to `rgb(255, 255, 255)`.
- `--auth-btn-border-radius`: The border radius of the button. Defaults to `5px`.
- `--auth-btn-disabled-*`: Properties to style the button when disabled (`bg-color`, `color`). This changes the background and text color to indicate the disabled state.

These custom properties enable a wide range of stylistic customizations, allowing the `AuthButton` component to integrate seamlessly into various designs and themes.

## Simple Code Example

```html
<script>
  // Function to handle click events on the AuthButton
  function handleButtonClick() {
    console.log('Button clicked!');
  }
</script>

<auth-button
  btnId="loginButton"
  .onClick="${handleButtonClick}"
  .isProcessing="${false}"
  inlineStyle="background-color: var(--auth-btn-bg-color, green); color: white;"
>
  Continue
</auth-button>
