# `tac-info` Component Documentation

The `tac-info` component is a custom Lit 3.0 element designed to display informative content within a terms and conditions (TAC) container, or similar contexts, in web applications. It leverages shared styles for consistency and supports dynamic content rendering through properties and CSS custom properties.

## Description

This component provides a structured way to present additional information, such as details about service terms, privacy policies, or security practices, in a visually appealing and organized manner. It can display both default template content and custom HTML content, which is dynamically injected via the `unsafeHTML` directive, allowing for a high degree of flexibility and customization.

## Properties

- **`globalStyles`**: An `Object` property used to pass down global style configurations and content to the component. This includes custom messaging content, styles for various text elements, and overall styling for the component.

## Custom CSS Properties

The component's appearance can be customized using the following CSS custom properties:

- `--tac-info-display`, `--tac-info-flex-direction`, `--tac-info-justify-content`, `--tac-info-gap`: Controls the layout and spacing of the component.
- `--tac-info-color`, `--tac-info-padding`: Sets the text color and padding around the content area.
- `--tac-info-default-template-h1-font-style`, `--tac-info-default-template-h1-font-weight`, `--tac-info-default-template-h1-font-size`, `--tac-info-default-template-h1-line-height`: Styles for the `h1` elements in the default template.
- `--tac-info-default-template-p-font-style`, `--tac-info-default-template-p-font-weight`, `--tac-info-default-template-p-font-size`, `--tac-info-default-template-p-line-height`: Styles for the `p` elements in the default template.
- `--tac-info-ul-list-style-type`, `--tac-info-ul-display`, `--tac-info-ul-flex-direction`, `--tac-info-ul-gap`: Styling for the `ul` list elements.
- `--tac-info-li-display`, `--tac-info-li-gap`: Styling for the `li` list items.
- `--tac-info-li-h2-font-style`, `--tac-info-li-h2-font-weight`, `--tac-info-li-h2-font-size`, `--tac-info-li-h2-line-height`, `--tac-info-li-h2-margin-bottom`: Styles for `h2` elements in list items.
- `--tac-info-li-p-font-style`, `--tac-info-li-p-font-weight`, `--tac-info-li-p-font-size`, `--tac-info-li-p-line-height`: Styles for `p` elements in list items.
- `--tac-info-default-template-a-display`, `--tac-info-default-template-a-font-style`, `--tac-info-default-template-a-font-weight`, `--tac-info-default-template-a-font-size`, `--tac-info-default-template-a-line-height`, `--tac-info-default-template-a-padding`, `--tac-info-default-template-a-border`, `--tac-info-default-template-a-border-radius`, `--tac-info-default-template-a-width`: Styles for `a` link elements in the default template.

## Usage

The `tac-info` component can be used to enrich terms and conditions pages or similar sections with additional, detailed information. It supports both a default presentation template and the ability to inject custom HTML content.

Example usage:

```html
<tac-info .globalStyles=${{
  tacContainerMessagingContent: '<p>Custom content goes here.</p>',
  heading1Style: 'font-weight: bold;',
  paragraphStyle: 'color: #333;'
}}></tac-info>
