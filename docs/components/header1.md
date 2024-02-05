# Header1 Component Documentation

## Description

The `Header1` component is a customizable `<h1>` header element built with the Lit 3.0 framework. It is designed to allow easy styling of header elements within web applications, providing properties for customization and adjustment of visual aspects such as font style, weight, size, and color through CSS custom properties. The component also supports inline styling for more direct, one-off customizations.

## Properties

- `inlineStyle` (String): Allows for direct inline styling of the `<h1>` element contained within the component. This property is a string that represents CSS styles and is applied directly to the `<h1>` element, providing a way to add or override styles for individual instances of the component.

## Custom CSS Properties

The component exposes several CSS custom properties, enabling extensive customization of the header's appearance:

- `--auth-header-1-font-style`: Sets the font style of the header. Default is `normal`.
- `--auth-header-1-font-weight`: Controls the font weight. Default is `400`.
- `--auth-header-1-font-size`: Determines the font size. Default is `20px`.
- `--auth-header-1-line-height`: Sets the line height, affecting the spacing between lines of text. Default is `20px`.
- `--auth-header-1-display`: Controls the display property. Default is `block`.
- `--auth-header-1-align-items`: Used to align items along the cross axis when the header is displayed as a flex or grid container. Default is `center`.
- `--auth-header-1-text-align`: Sets the alignment of the text within the header. Default is `center`.
- `--auth-header-1-color`: Determines the text color. Default is `#000000`.
- `--auth-header-1-margin-bottom`: Sets the bottom margin. Default is `0`.
- `--auth-header-1-margin-top`: Sets the top margin. Default is `0`.
- `--auth-header-1-padding-top`: Sets the padding on the top of the header. Default is `0`.
- `--auth-header-1-padding-bottom`: Sets the padding on the bottom of the header. Default is `0`.

## Example Usage

```html
<header-1 inlineStyle="color: blue; font-size: 24px;">
  My Custom Header
</header-1>
