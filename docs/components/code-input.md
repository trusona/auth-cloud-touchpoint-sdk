# CodeInput Component Documentation

## Description

The `CodeInput` component is a flexible, multi-field input component designed for entering codes such as verification or PIN codes. It is built with Lit 3.0 and offers extensive customization options for input type, visibility, auto-focus behavior, and completion handling. This component is ideal for scenarios requiring users to input a code received via SMS, email, or other means for verification.

## Properties

- `codeLength` (Number): The number of input fields to be rendered. Default is `6`.
- `inputType` (String): The type of input (e.g., `text`, `password`). Default is `text`.
- `inputMode` (String): Suggests to the browser what type of keyboard to display. Default is `numeric`.
- `initialFocusField` (Number): The index of the input field that should be auto-focused when the component is loaded. Default is `0`.
- `isCharsCode` (Boolean): If `true`, allows alphanumeric inputs. Default is `false`, allowing only numeric inputs.
- `isCodeHidden` (Boolean): If `true`, hides the input characters. Useful for sensitive inputs like PIN codes. Default is `false`.
- `isPrevFocusableAfterClearing` (Boolean): If `true`, focuses the previous input field when the current is cleared. Default is `false`.
- `isFocusingOnLastByClickIfFilled` (Boolean): If `true`, focuses the last input field when all fields are filled and any field is clicked. Default is `false`.
- `code` (String): The current value of the input code. Not set by default.
- `disabled` (Boolean): If `true`, disables all input fields. Default is `false`.
- `autocap` (String): Controls the autocapitalize behavior of the input fields. Not set by default.
- `isNonDigitsCode` (Boolean): If `true`, allows non-digit characters in the code. Default is `false`.
- `codeChanged` (Function): A callback function that is invoked on code change.
- `codeCompleted` (Function): A callback function that is invoked when the code input is complete.

## Custom CSS Properties

- `--auth-code-input-span-display`: Controls the display property of the span elements wrapping the input fields. This allows for customization of how each input field's container is displayed within the component.
- `--auth-code-input-span-flex`: Defines the flex property for the span elements wrapping the input fields, influencing how they grow or shrink within the flex container.

- `--auth-code-input-input-width`: Sets the width of each input field within the component. This allows for precise control over the size of the input fields.
- `--auth-code-input-input-height`: Specifies the height of the input fields, allowing for customization of the field's size for better alignment and layout.
- `--auth-code-input-input-color`: Determines the text color within the input fields, enabling color customization to match the design of the host application.
- `--auth-code-input-input-background`: Sets the background color of the input fields, providing a way to customize or highlight the input area.
- `--auth-code-input-input-text-align`: Controls the alignment of the text within the input fields, which can be set to `center`, `left`, or `right` to suit different design needs.
- `--auth-code-input-input-font-size`: Specifies the font size of the text within the input fields, allowing for adjustments to match the design aesthetics of the surrounding UI.

- `--auth-code-input-input-border-top-width`, `--auth-code-input-input-border-top-style`, `--auth-code-input-input-border-top-color`: These properties control the style, width, and color of the top border of the input fields, enabling detailed border customization.
- `--auth-code-input-input-border-right-width`, `--auth-code-input-input-border-right-style`, `--auth-code-input-input-border-right-color`: These properties set the right border's style, width, and color, allowing for side-specific border customization.
- `--auth-code-input-input-border-bottom-width`, `--auth-code-input-input-border-bottom-style`, `--auth-code-input-input-border-bottom-color`: Adjusts the bottom border's style, width, and color, providing control over the appearance of the input field's lower edge.
- `--auth-code-input-input-border-left-width`, `--auth-code-input-input-border-left-style`, `--auth-code-input-input-border-left-color`: Defines the left border's style, width, and color, enabling customization of the input field's left-side border.

- `--auth-code-input-span-code-hidden-input-text-security`: Applies text security to the input fields when `isCodeHidden` is `true`, changing the visibility of input characters to dots or other symbols to mask the input.

- `--auth-code-input-input-focus-border-top-width`, `--auth-code-input-input-focus-border-top-style`, `--auth-code-input-input-focus-border-top-color`, `--auth-code-input-input-focus-border-right-width`, `--auth-code-input-input-focus-border-right-style`, `--auth-code-input-input-focus-border-right-color`, `--auth-code-input-input-focus-border-bottom-width`, `--auth-code-input-input-focus-border-bottom-style`, `--auth-code-input-input-focus-border-bottom-color`, `--auth-code-input-input-focus-border-left-width`, `--auth-code-input-input-focus-border-left-style`, `--auth-code-input-input-focus-border-left-color`: These properties control the appearance of the input fields when they are focused, including the border's style, width, and color, offering a way to visually indicate focus within the UI.
- `--auth-code-input-input-focus-box-shadow`: Specifies the box shadow for input fields when focused, enhancing the visual cue that an input field is active or selected.

## Example Usage

```html
<code-input
  codeLength="4"
  inputType="text"
  isCodeHidden="true"
  initialFocusField="0"
  disabled="false"
  .code-changed="${(e) => console.log('Code Changed:', e.detail)}"
  .code-completed="${(e) => console.log('Code Completed:', e.detail)}"
></code-input>
