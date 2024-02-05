# `auth-input-wrapper` Component Documentation

The `auth-input-wrapper` component is a Lit 3.0 custom element designed to encapsulate and style input elements within authentication forms or similar user interfaces. It utilizes a combination of shared and component-specific styles to provide a consistent look and feel across the application. By using a slot, it allows for flexible insertion of various input types or other elements that require the same styling context.

## Description

This component serves as a wrapper for input elements, providing styling hooks through CSS custom properties. It is built with the aim of enhancing the structure and presentation of input fields in a web application's authentication interfaces. The component is part of a suite that leverages shared styles for a cohesive appearance.

## Properties

The `auth-input-wrapper` component does not explicitly define custom properties (in the Lit property decorator sense). It is primarily styled through CSS and leverages a slot for content projection.

## Custom CSS Properties

The component allows for style customization via a CSS custom property:

- `--auth-input-ui-input-wrapper-position`: Sets the position property of the input wrapper. The default value is `relative`. This allows for customization of the positioning context of the wrapper, which can be useful for positioning absolutely placed elements within.

## Usage

To use the `auth-input-wrapper` component in your web application, ensure it is imported from its module. You can then wrap input elements or other form controls within it to apply the consistent wrapper styling.

Example:

```html
<auth-input-wrapper>
  <input type="text" placeholder="Username" />
</auth-input-wrapper>
