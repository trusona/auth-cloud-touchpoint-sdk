# FlexContainer Component Documentation

## Description

The `FlexContainer` component is a versatile container designed to facilitate flexible layout designs using the Lit 3.0 framework. It leverages the power of Flexbox for layout management, making it easy to align and distribute space among items within the container. This component is particularly useful for creating responsive designs that adjust smoothly to various screen sizes. It comes with a set of customizable properties and CSS variables that allow for extensive styling and functionality adjustments.

## Properties

- `minWidth` (String): Optional. Specifies the minimum width of the flex container. If not provided, the container defaults to `auto`, adjusting its width based on its content and the overall layout constraints.
- `globalStyles` (Object): Optional. An object that can include various global style configurations, such as `primaryFontFaceStyleDeclaration` and `primaryFontFamily`, to apply custom fonts across the component.

## Custom CSS Properties

The component provides several CSS custom properties for styling, enabling developers to fine-tune the appearance of the flex container:

- `--auth-flexdialog-display`: Controls the display property of the flex container. Default is `flex`.
- `--auth-flexdialog-row-gap`: Sets the gap between rows in the flex container. Default is `1.25rem`.
- `--auth-flexdialog-flex-direction`: Determines the flex direction of the container's items. Default is `column`.
- `--auth-flexdialog-justify-content`: Aligns the flex container's items along the main axis. Default is `center`.
- `--auth-flexdialog-align-content`: Aligns the container's lines within when there's extra space in the cross-axis. Default is `center`.
- `--auth-flexdialog-align-items`: Aligns the container's items on the cross-axis. Default mirrors the value of `align-content` for consistency.
- `--auth-flexdialog-background-color`: Sets the background color of the flex container. Default is `#ffffff`.
- `--auth-flexdialog-width`: Specifies the width of the flex container. Default is `290px`.
- `--auth-flexdialog-vertical-align`: Aligns the flex container vertically. Default is `middle`.
- `--auth-flexdialog-padding`: Sets the padding inside the flex container. Default is `2rem`.
- `--auth-flexdialog-border-radius`: Defines the border radius of the flex container. Default is `0.5rem`.
- `--auth-flexdialog-margin`: Controls the margin around the flex container. Default is `auto`.

## Example Usage

```html
<flex-container minWidth="400px">
  <div>Your content here</div>
</flex-container>
