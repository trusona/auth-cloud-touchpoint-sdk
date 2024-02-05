# ContinueTouchpoint Component Documentation

The `ContinueTouchpoint` component is a custom Lit element designed for rendering a UI touchpoint that facilitates a continuation action, such as progressing to the next step in a user flow. This component can display customizable text, a button with auto-focus capability, and is styled according to passed global and platform-specific styles.

## Properties

- `successfulUpgrade`: An `Object` that may contain various properties to customize the display of the touchpoint, such as `headline`, `bodyText`, and `buttonText`. It can also include a `disableButtonFocus` flag to control whether the button should receive focus automatically.
- `globalStyles`: An `Object` used to pass global style configurations to the component. This object can influence the appearance of the touchpoint, including the styles for the heading, paragraph, button, and spinner icon.
- `platformSpecificIcons`: An `Object` that may contain platform-specific icons or styles. This property allows for further customization of the touchpoint's appearance based on the platform.
- `next`: A `Function` callback to be executed when the user interacts with the button. This function is typically used to proceed to the next step in a process or workflow.
- `buttonAutoFocus`: A `Boolean` indicating whether the button should automatically receive focus when the touchpoint is rendered or updated. Default is `true`.
- `started`: A `Boolean` flag indicating whether the action associated with the touchpoint has started. This can be used to toggle the button's processing state, for example.

## Methods

- `setButtonFocus()`: A method to programmatically set focus on the button element. This method is triggered based on the `buttonAutoFocus` property and the `disableButtonFocus` flag within `successfulUpgrade`.

## Usage

The component is utilized in a web application to provide users with a clear continuation point. It can be dynamically customized through its properties to fit the needs of various user flows, such as successful upgrade processes, confirmation steps, or transitional screens.

## Example

```html
<continue-touchpoint
  .successfulUpgrade=${{
    headline: "Upgrade Successful",
    bodyText: "Your account has been upgraded successfully.",
    buttonText: "Continue",
    disableButtonFocus: false
  }}
  .next=${() => console.log('Proceeding to the next step...')}
  ?buttonAutoFocus=${true}
></continue-touchpoint>
