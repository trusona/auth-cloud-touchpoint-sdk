import { LitElement, html, css, TemplateResult, svg } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { sharedStyles } from '../../shared/style'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
// import {unsafeSVG} from 'lit/directives/unsafe-svg.js';

const componentStyle = css`

  .auth-button {
    margin-left: var(--auth-btn-margin, auto);
    margin-right: var(--auth-btn-margin, auto);
    align-items: var(--auth-btn-align, center);
    appearance: var(--auth-btn-appearance, none);
    display: var(--auth-btn-display, flex);
    font-size: var(--auth-btn-font-size, 16px);
    font-style: var(--auth-btn-font-style, normal);
    font-weight: var(--auth-btn-font-weight, bold);
    justify-content: var(--auth-btn-justify, space-around);
    letter-spacing: var(--auth-btn-letter-spacing, 1px);
    line-height: var(--auth-btn-line-height, 17px);
    min-height: var(--auth-btn-min-height, 47px);
    min-width: var(--auth-btn-min-width, 300px);
    padding: var(--auth-btn-padding, 0 24px);
    text-align: var(--auth-btn-text-align, center);
    transition-delay: var(--auth-btn-transition-delay, 0s);
    transition-duration: var(--auth-btn-transition-duration, 0.1s);
    transition-property: var(--auth-btn-transition-property, all);
    transition-timing-function: var(--auth-btn-transition-timing-function, ease);
    width: var(--auth-btn-width, 100%);
    cursor: var(--auth-btn-cursor, pointer);
    background-color: var(--auth-btn-bg-color, #7B46D1);
    border: var(--auth-btn-border-width, 1px) var(--auth-btn-border-style, solid) var(--auth-btn-border-color, #7B46D1);
    color: var(--auth-btn-color, rgb(255, 255, 255));
    border-radius: var(--auth-btn-border-radius, 5px);
  }

  .auth-button:disabled {
    background-color: var(--auth-btn-disabled-bg-color, #cccccc) !important;
    border: 1px solid var(--auth-btn-disabled-bg-color, #cccccc) !important;
    color: var(--auth-btn-disabled-color, #444444) !important;
  }

  .auth-btn-content-wrapper {
    display: var(--auth-btn-content-wrapper-display, flex);
    justify-content: var(--auth-btn-content-wrapper-justify, flex-start);
    align-items: var(--auth-btn-content-wrapper-align, center);
    width: var(--auth-btn-content-wrapper-width, 100%);
  }

  .auth-btn-content-text {
    flex: var(--auth-btn-content-text-flex, 1);
    text-align: var(--auth-btn-content-text-text-align, center);
  }
  `

@customElement('auth-button')
class AuthButton extends LitElement {
  @property({ type: Function }) onClick? = (): void => {}
  @property({ type: Boolean }) isProcessing? = false
  @property({ type: String }) processingIcon?: string
  @property({ type: Boolean }) isWaitingForInput? = false
  @property({ type: String }) inlineStyle = ''
  @property({ type: String }) btnId = ''

  static styles = [sharedStyles, componentStyle]

  getContent = (): TemplateResult => {
    if (this.isProcessing ?? false) {
      return this.processingIcon
        ? html`<span>${svg`${unsafeHTML(this.processingIcon)}`}</span>`
        : html`<span>Processing...</span>`
    } else {
      return html`<slot></slot>`
    }
  }

  render (): TemplateResult {
    return html`
        <button part="button"
                id="${this.btnId}"
                @click=${this.onClick}
                ?disabled=${(this.isProcessing ?? false) || (this.isWaitingForInput ?? false)}
                style="${this.inlineStyle}"
                class="auth-button">
            ${this.getContent()}
        </button>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'auth-button': AuthButton
  }
}
