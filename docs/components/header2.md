# `header-2` Component Documentation

The `header-2` component is a Lit 3.0 custom element that provides a stylized header (h2) for use within web applications. It is designed to be flexible and easily integrated into a broader styling system, allowing for both default styles and custom inline styles to be applied. The component is part of a larger suite of components that leverage shared styles for consistency across a platform.

## Description

This component creates an h2 header element with customizable styles through CSS custom properties. It supports insertion of content via the default slot, allowing for dynamic content insertion within the header. The component's styles can be extended or overridden using a set of predefined CSS custom properties.

## Properties

- `inlineStyle`: A string that allows for inline CSS styles to be directly applied to the `h2` element. This is useful for one-off style overrides without needing to alter the component's CSS or the global style sheet.

## Custom CSS Properties

The component utilizes a variety of CSS custom properties for styling, which can be overridden in the context where the component is used. Below is a list of all custom CSS properties used:

- `--auth-header-2-font-style`: Sets the font style of the header. Default is `normal`.
- `--auth-header-2-font-weight`: Sets the font weight of the header. Default is `400`.
- `--auth-header-2-font-size`: Sets the font size of the header. Default is `16px`.
- `--auth-header-2-line-height`: Sets the line height of the header. Default is `18px`.
- `--auth-header-2-display`: Sets the display property of the header. Default is `flex`.
- `--auth-header-2-align-items`: Sets how items are aligned within the header. Default is `center`.
- `--auth-header-2-text-align`: Sets the text alignment within the header. Default is `center`.
- `--auth-header-2-color`: Sets the text color of the header. Default is `rgb(23, 47, 48)`.
- `--auth-header-2-margin-bottom`: Sets the bottom margin of the header. Default is `0`.
- `--auth-header-2-margin-top`: Sets the top margin of the header. Default is `0`.
- `--auth-header-2-padding-top`: Sets the top padding of the header. Default is `0`.
- `--auth-header-2-padding-bottom`: Sets the bottom padding of the header. Default is `0`.

## Usage

To use the `header-2` component in your web application, you need to import it and then use it within your Lit templates or HTML documents. You can override any of the default styles by specifying the custom CSS properties in your CSS.

Example:

```html
<header-2 inlineStyle="color: blue;">My Custom Header</header-2>
