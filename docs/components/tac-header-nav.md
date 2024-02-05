# `tac-header-nav` Component Documentation

The `tac-header-nav` component is a custom Lit 3.0 element designed to provide a flexible navigation header for terms and conditions pages, privacy policies, or similar contexts. This component is part of a broader terms and conditions framework and supports dynamic content rendering, including SVG logos and customizable messages.

## Description

The `tac-header-nav` component is structured to offer a top navigation bar that can be easily integrated into web applications, particularly those requiring a dedicated section for legal or informational content. The component allows for the dynamic inclusion of a logo (including SVG format) and a secure sign-in message, with visibility and styling customizable through global style configurations.

## Properties

- **`globalStyles`**: An `Object` property used to pass down global style configurations to the component. This property can control the visibility of the header, the logo to be displayed, the styling of the header, and whether a secure sign-in message should be shown.

## Custom CSS Properties

The component's appearance can be customized using the following CSS custom properties:

- `--tac-header-nav-display`: Controls the display property of the navigation bar. Default is `flex`.
- `--tac-header-nav-justify-content`: Sets the justification of items within the navigation bar. Default is `space-between`.
- `--tac-header-nav-align-content`: Aligns the container's lines within when there is extra space in the cross-axis. Default is `center`.
- `--tac-header-nav-align-items`: Aligns items along the cross-axis. Default is `center`.
- `--tac-header-nav-width`: Sets the width of the navigation bar. Default is `100%`.
- `--tac-header-nav-padding`: Applies padding within the navigation bar. Default is `1.375rem 1.875rem`.
- `--tac-header-nav-background-color`: Sets the background color of the navigation bar. Default is `#ffffff`.
- `--tac-header-nav-margin-bottom`: Sets the bottom margin of the navigation bar. Default is `1rem`.
- `--tac-header-nav-img-width` and `--tac-header-nav-img-height`: Control the size of the included image/logo. Defaults are `auto`.

## Usage

To utilize the `tac-header-nav` component within your application, import it and configure its appearance and content through the `globalStyles` property.

Example usage:

```html
<tac-header-nav .globalStyles=${{
  headerNavVisible: true,
  headerNavLogo: 'data:image/svg+xml,<svg>...</svg>',
  headerNavLogoWidth: '50px',
  headerNavLogoHeight: '50px',
  headerNavStyle: 'background-color: #ececec;',
  headerNavShowSecureMsg: true
}}></tac-header-nav>
