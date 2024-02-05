# `tac-footer` Component Documentation

The `tac-footer` component is a custom Lit 3.0 element designed to provide a flexible footer for terms and conditions pages, privacy policies, or similar documents. It incorporates shared styles for consistency and supports dynamic content and visibility through the use of properties.

## Description

This component is structured to offer a footer section that can be easily integrated into a variety of web applications, especially those requiring dynamically rendered content such as legal disclaimers, copyright information, or custom messages. The use of the `unsafeHTML` directive allows for the insertion of HTML content directly into the component, providing significant flexibility in content presentation.

## Properties

- **`globalStyles`**: An `Object` property that is used to pass down global style configurations and content to the component. This property can influence the visibility of the footer, its content, and custom styling applied directly to the footer.

## Custom CSS Properties

The component's appearance can be customized using the following CSS custom properties:

- `--tac-footer-display`: Controls the display property of the footer. Default is `flex`.
- `--tac-footer-justify-content`: Aligns the content of the footer along the main axis. Default is `center`.
- `--tac-footer-align-content`: Aligns the content of the footer along the cross axis when there is extra space in the cross-axis. Default is `center`.
- `--tac-footer-align-items`: Aligns items in the footer along the cross axis. Default is `center`.
- `--tac-footer-width`: Sets the width of the footer. Default is `100%`.
- `--tac-footer-padding`: Sets the padding inside the footer. Default is `1.5rem`.
- `--tac-footer-background-color`: Sets the background color of the footer. Default is `#ffffff`.

## Usage

To utilize the `tac-footer` component within your application, you need to import it and then optionally configure its appearance and content through the `globalStyles` property.

Example usage:

```html
<tac-footer .globalStyles=${{
  footerVisible: true,
  footerContent: '<p>Copyright &copy; 2021 Your Company Name. All Rights Reserved.</p>',
  footerStyle: 'background-color: #f8f9fa; color: #6c757d;'
}}></tac-footer>
