import { html, css, LitElement } from 'lit'
import { property, customElement, query } from 'lit/decorators.js'
import { sharedStyles } from '../../shared/style'

const componentStyle = css`
  .reset-button {
    margin-left: var(--auth-reset-margin-left, auto);
    margin-right: var(--auth-reset-margin-right, auto);
    display: var(--auth-reset-display, flex);
    flex-direction: var(--auth-reset-flex-direction, row);
    justify-content: var(--auth-reset-justify-content, center);
    align-items: var(--auth-reset-align-items, center);
    padding: var(--auth-reset-padding, 12px 20px);
    width: var(--auth-reset-width, auto);
    max-width: var(--auth-reset-max-width, 100%);
    min-width: var(--auth-reset-min-width, 90%);
    font-style: var(--auth-reset-font-style, normal);
    font-weight: var(--auth-reset-font-weight, 400);
    font-size: var(--auth-reset-font-size, 11px);
    line-height: var(--auth-reset-line-height, 14px);
    text-align: var(--auth-reset-text-align, center);
    color: var(--auth-reset-color, #444444);
    background: var(--auth-reset-background, #FAFAFA);
    border: var(--auth-reset-border, 1px solid #EEEEEE);
    border-radius: var(--auth-reset-border-radius, 20px);
    cursor: var(--auth-reset-cursor, pointer);
  }

  .reset-button__wrapper {
    display: var(--auth-reset-wrapper-display, flex);
    flex-direction: var(--auth-reset-wrapper-flex-direction, row);
    gap: var(--auth-reset-wrapper-gap, 0.5rem);
    align-items: var(--auth-reset-wrapper-align-items, center);
    justify-content: var(--auth-reset-wrapper-justify-content, center);
    flex-wrap: var(--auth-reset-wrapper-flex-wrap, wrap);
    white-space: var(--auth-reset-wrapper-white-space, normal);
    word-break: var(--auth-reset-wrapper-word-break, break-all);
  }

  .reset-button__wrapper span {
    white-space: var(--auth-reset-wrapper-span-white-space, normal);
    word-wrap: var(--auth-reset-wrapper-span-word-wrap, break-word);
  }
`
@customElement('auth-reset')
class Reset extends LitElement {
  static styles = [sharedStyles, componentStyle]
  @property({ type: String }) inlineStyle = ''
  @property({ type: Function }) onClick?: Function = (): void => {}
  @query('.reset-button') buttonElement!: HTMLInputElement

  render () {
    return html`
      <button class="reset-button" style="${this.inlineStyle}" @click="${this.onClick}">
        <div class="reset-button__wrapper">
          <svg
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.9244 0.838505L1.07252 4.87736"
              stroke="#19064E"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M1.0756 5.1222L4.92748 9.16105"
              stroke="#19064E"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
          <span><slot></slot></span>
        </div>
      </button>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'auth-reset': Reset
  }
}
