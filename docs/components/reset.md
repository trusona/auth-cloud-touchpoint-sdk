# `auth-reset` Component Documentation

The `auth-reset` component is a Lit 3.0 custom element designed for rendering a stylized reset button, typically used within forms or applications that require a clear, visually consistent reset mechanism. This component integrates shared styles for uniformity across the application while allowing for extensive customization through CSS custom properties and inline styles.

## Description

This component provides a button designed specifically for reset actions, encapsulating both iconography and text within a flexible and customizable UI element. It features a combination of SVG graphics and text content, which can be dynamically adjusted to fit the needs of various user interfaces. The component's layout and styling are highly customizable, supporting a wide range of visual presentations.

## Properties

- `inlineStyle`: A string property allowing for inline CSS styles to be applied directly to the reset button. This enables on-the-fly styling adjustments without altering the component's global or shared styles.

- `onClick`: A Function property intended to be assigned a callback function that will execute when the button is clicked. This provides a flexible mechanism to handle user interactions with the reset button.

## Custom CSS Properties

The component utilizes several CSS custom properties for styling, which can be overridden in the context where the component is used. Below is a list of all custom CSS properties used:

- `--auth-reset-margin-left`: Controls the left margin of the button. Default is `auto`.
- `--auth-reset-margin-right`: Controls the right margin of the button. Default is `auto`.
- `--auth-reset-display`: Sets the display property of the button. Default is `flex`.
- `--auth-reset-flex-direction`: Determines the flex direction of the button. Default is `row`.
- `--auth-reset-justify-content`: Aligns the content within the button. Default is `center`.
- `--auth-reset-align-items`: Aligns items vertically within the button. Default is `center`.
- `--auth-reset-padding`: Sets the padding inside the button. Default is `12px 20px`.
- `--auth-reset-width`: Specifies the width of the button. Default is `auto`.
- `--auth-reset-max-width`: Sets the maximum width of the button. Default is `100%`.
- `--auth-reset-min-width`: Sets the minimum width of the button. Default is `300px`.
- `--auth-reset-font-style`: Determines the font style of the button text. Default is `normal`.
- `--auth-reset-font-weight`: Specifies the font weight of the button text. Default is `400`.
- `--auth-reset-font-size`: Sets the font size of the button text. Default is `11px`.
- `--auth-reset-line-height`: Controls the line height of the button text. Default is `14px`.
- `--auth-reset-text-align`: Aligns the text within the button. Default is `center`.
- `--auth-reset-color`: Sets the text color of the button. Default is `#444444`.
- `--auth-reset-background`: Determines the background color of the button. Default is `#FAFAFA`.
- `--auth-reset-border`: Specifies the border of the button. Default is `1px solid #EEEEEE`.
- `--auth-reset-border-radius`: Sets the border radius of the button. Default is `20px`.
- `--auth-reset-cursor`: Changes the cursor on hover over the button. Default is `pointer`.

## Usage

To use the `auth-reset` component in your web application, simply import it and then use it within your Lit templates or HTML documents. You can customize the button's appearance by overriding the default styles with custom CSS properties or applying inline styles via the `inlineStyle` property.

Example:

```html
<auth-reset inlineStyle="background-color: blue; color: white;" .onClick="${() => console.log('Reset action')}">
  Reset Form
</auth-reset>
