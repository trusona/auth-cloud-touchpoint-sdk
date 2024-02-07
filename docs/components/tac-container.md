# `tac-container` Component Documentation

The `tac-container` component is a Lit 3.0 custom element that serves as a container for terms and conditions (TAC) pages or similar types of content. It provides a structured layout with a header, main content area, optional secondary column, and footer. The component is designed to be flexible and easily customizable through global styles and CSS custom properties.

## Description

This component is intended for use in applications requiring a dedicated area for terms and conditions, privacy policies, or similar content. It features a responsive design to accommodate various device sizes and orientations. The component's layout includes a navigation header, a main content area that can dynamically include an additional information column, and a footer. Customization is facilitated through properties and CSS custom properties, allowing for the integration of custom backgrounds, layout adjustments, and more.

## Properties

- **`globalStyles`**: An `Object` property that allows passing down global style configurations to the component. This object can include styles for the container itself, background images, component height, and whether to show a second column.

## Custom CSS Properties

The component uses several CSS custom properties for styling, which can be overridden to customize its appearance:

- `--tac-container-width`: Sets the width of the container. Default is `100%`.
- `--tac-container-height`: Sets the height of the container. Default is `100vh`.
- `--tac-container-background-color`: Background color of the container. Default is `#FAFAFA`.
- `--tac-container-display`: The display property of the container. Default is `flex`.
- `--tac-container-flex-flow`: The flex flow of the container. Default is `column`.
- `--tac-container-header-nav-flex`: Flex settings for the header navigation area.
- `--tac-container-inner-wrapper-flex`: Flex settings for the inner wrapper.
- `--tac-container-inner-wrapper-width`: Width of the inner wrapper.
- `--tac-container-inner-wrapper-display`: Display property of the inner wrapper.
- `--tac-container-inner-wrapper-justify-content`: How to justify content in the inner wrapper.
- `--tac-container-inner-wrapper-align-content`: Align content property of the inner wrapper.
- `--tac-container-inner-wrapper-align-items`: Align items in the inner wrapper.
- `--tac-container-inner-wrapper-flex-direction`: Flex direction of the inner wrapper.
- `--tac-container-inner-wrapper-gap`: Gap between elements in the inner wrapper.
- `--tac-container-inner-wrapper-background-color`: Background color of the inner wrapper.
- `--tac-container-help-font-style`, `--tac-container-help-font-weight`, `--tac-container-help-font-size`, `--tac-container-help-line-height`: Font styling for help text.
- `--tac-container-help-display`, `--tac-container-help-width`, `--tac-container-help-text-align`, `--tac-container-help-justify-content`, `--tac-container-help-align-content`, `--tac-container-help-color`, `--tac-container-help-opacity`: Styling and layout for help text.
- `--tac-container-main-content-display`, `--tac-container-main-content-background-color`, `--tac-container-main-content-padding`, `--tac-container-main-content-justify-content`, `--tac-container-main-content-align-items`, `--tac-container-main-content-flex-wrap`: Styling for the main content area.
- `--tac-container-divider-width`, `--tac-container-divider-align-self`, `--tac-container-divider-background`: Styling for the optional divider between main content and secondary column.

## Usage

The `tac-container` component is used as a wrapper for terms and conditions content or similar pages. It supports slotting in custom content and dynamically adjusts its layout based on provided properties and global styles.

Example usage:

```html
<tac-container .globalStyles=${{ tacContainerBackgroundImg: 'url-to-background-image', tacContainerShowSecondColumn: true }}>
  <p>Terms and conditions content goes here.</p>
</tac-container>
