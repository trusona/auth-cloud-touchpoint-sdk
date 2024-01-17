import {css} from 'lit'

export const sharedStyles = css`

  * {
    margin: var(--auth-global-margin, 0);
    padding: var(--auth-global-padding, 0);
    box-sizing: var(--auth-global-box-sizing, border-box);
    color: var(--auth-global-color, inherit);
    font-family: var(--auth-global-font-family, Arial, Helvetica, sans-serif);
    -webkit-font-smoothing: antialiased;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  .auth-ui-input-wrapper {
    position: var(--auth-input-ui-input-wrapper-position, relative);
  }

  .auth-ui-input-wrapper .auth-ui-input {
    border: var(--auth-input-ui-input-border, 1px solid #444444);
    border-radius: var(--auth-input-ui-input-border-radius, 6px);
    position: var(--auth-input-ui-input-position, relative);
    width: var(--auth-input-ui-input-width, 100%);
    margin-top: var(--auth-input-ui-input-margin-top, 10px);
    font-style: var(--auth-input-ui-input-font-style, normal);
    font-weight: var(--auth-input-ui-input-font-weight, 400);
    font-size: var(--auth-input-ui-input-font-size, 14px);
    line-height: var(--auth-input-ui-input-line-height, 14px);
    padding: var(--auth-input-ui-input-padding, 1rem);
    color: var(--auth-input-ui-input-color, #444444);
  }

  .auth-ui-input-wrapper .auth-ui-label {
    position: var(--auth-input-ui-label-position, absolute);
    top: var(--auth-input-ui-label-top, .25rem);
    z-index: var(--auth-input-ui-label-z-index, 1);
    left: var(--auth-input-ui-label-left, 2em);
    background-color: var(--auth-input-ui-label-background-color, white);
    padding: var(--auth-input-ui-label-padding, 0 7px);
    font-style: var(--auth-input-ui-label-font-style, normal);
    font-weight: var(--auth-input-ui-label-font-weight, 400);
    font-size: var(--auth-input-ui-label-font-size, 12px);
    line-height: var(--auth-input-ui-label-line-height, 12px);
    color: var(--auth-input-ui-label-color, #444444);
  }

  .error-msg {
    display: var(--auth-error-msg-display, flex);
    align-items: var(--auth-error-msg-align-items, center);
    justify-content: var(--auth-error-msg-justify-content, center);
    gap: var(--auth-error-msg-gap, 1rem);
    border-radius: var(--auth-error-msg-border-radius, 8px);
    background-color: var(--auth-error-msg-background-color, #FEE5E5);
    font-style: var(--auth-error-msg-font-style, normal);
    font-weight: var(--auth-error-msg-font-weight, 400);
    font-size: var(--auth-error-msg-font-size, 13px);
    line-height: var(--auth-error-msg-line-height, 13px);
    color: var(--auth-error-msg-color, #D14646);
    width: var(--auth-error-msg-width, auto);
    min-width: var(--auth-error-msg-min-width, 300px);
    padding: var(--auth-error-msg-padding, 0.65rem);
  }
  
  .text-center {
    text-align: center;
  }
  
`
