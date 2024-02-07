# `auth-skip` Component Documentation

The `auth-skip` component is a Lit 3.0 custom element designed to provide a stylized "skip" button for web applications, particularly useful in scenarios such as skipping authentication steps or bypassing introductory content. This component benefits from shared styles for consistency across the platform, while also supporting inline style customizations and event handling through properties.

## Description

The `auth-skip` component renders a button element that is highly customizable via CSS custom properties and inline styles. It is designed to seamlessly integrate into various user interface designs, offering a flexible way to include skip functionality within applications. The button's default appearance is intentionally minimal, emphasizing usability and design integration.

## Properties

- **`inlineStyle`**: A `String` property that allows for direct inline styling of the skip button. This is useful for quick, component-specific style overrides.

- **`onClick`**: A `Function` property that defines a callback function to be executed when the button is clicked. This property enables the component to handle user interactions, making it versatile for various use cases.

## Custom CSS Properties

The component uses several CSS custom properties for styling, which can be overridden to customize its appearance:

- `--auth-skip-margin-left`: Controls the left margin of the button. Default is `auto`.
- `--auth-skip-margin-right`: Controls the right margin of the button. Default is `auto`.
- `--auth-skip-display`: Controls the display property of the button. Default is `flex`.
- `--auth-skip-flex-direction`: Determines the flex direction of the button. Default is `row`.
- `--auth-skip-justify-content`: Aligns the button's contents along the main axis. Default is `center`.
- `--auth-skip-align-items`: Aligns the button's items along the cross axis. Default is `center`.
- `--auth-skip-padding`: Sets the padding inside the button. Default is `0`.
- `--auth-skip-width`: Sets the width of the button. Default is `auto`.
- `--auth-skip-max-width`: Sets the maximum width of the button. Default is `100%`.
- `--auth-skip-text-align`: Controls text alignment within the button. Default is `center`.
- `--auth-skip-color`: Sets the text color of the button. Default is `#72a3db`.
- `--auth-skip-background`: Sets the background color of the button. Default is `transparent`.
- `--auth-skip-border`: Defines the border of the button. Default is `none`.
- `--auth-skip-border-radius`: Sets the border-radius of the button. Default is `0`.
- `--auth-skip-cursor`: Sets the type of cursor when hovering over the button. Default is `pointer`.
- `--auth-skip-hover-text-decoration`: Controls the text decoration on hover. Default is `underline`.

## Usage

To use the `auth-skip` component in your web application, simply import it and then use it within your Lit templates or HTML documents. The component supports slot content, enabling the insertion of custom text or HTML elements inside the button.

Example usage:

```html
<auth-skip inlineStyle="color: red;" .onClick="${() => console.log('Skip clicked')}">
    Skip this step
</auth-skip>
