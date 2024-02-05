# `text-block` Component Documentation

The `text-block` component is a Lit 3.0 custom element designed to render text content with a consistent styling throughout web applications. This component is especially useful for creating paragraphs of text that share a common style, with the added flexibility of inline styling adjustments.

## Description

This component encapsulates a paragraph (`<p>`) element, allowing for text to be slotted in for dynamic content rendering. It applies a set of default styles that can be overridden by custom properties or by providing inline styles directly to the component. The `text-block` component leverages shared styles for consistency while offering customization points for specific use cases.

## Properties

- **`inlineStyle`**: A `String` property that allows for the direct application of CSS styles to the `<p>` element within the component. This is useful for one-off style adjustments without needing to alter the component's shared or default styles.

## Custom CSS Properties

The appearance of the text within the component can be customized using the following CSS custom properties:

- `--auth-text-block-p-text-align`: Sets the text alignment within the paragraph. The default value is `center`.
- `--auth-text-block-p-font-size`: Sets the font size of the text. The default value is `1rem`.
- `--auth-text-block-p-line-height`: Sets the line height of the text, affecting the spacing between lines. The default value is `1.75rem`.
- `--auth-text-block-p-font-weight`: Sets the weight (boldness) of the font. The default value is `400`.

## Usage

The `text-block` component is straightforward to use within your Lit templates or HTML documents. You simply need to wrap your desired text within the component tags, and it will be styled according to the component's default or customized styles.

Example usage:

```html
<text-block inlineStyle="color: blue;">
  This is an example of a text block with custom inline styling.
</text-block>
