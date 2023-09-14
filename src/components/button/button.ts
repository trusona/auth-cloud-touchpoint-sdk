import { LitElement, html, TemplateResult } from 'lit'
import { customElement, property } from 'lit/decorators.js'

// import {unsafeSVG} from 'lit/directives/unsafe-svg.js';


@customElement('auth-button')
class AuthButton extends LitElement {
  @property({ type: Function }) onClick? = (): void => {}
  @property({ type: Boolean }) isProcessing? = false
  @property({ type: String }) processingIcon?: string
  @property({ type: Boolean }) isWaitingForInput? = false


  getContent = (): TemplateResult => {
    console.log('this.isProcessing', this.isProcessing)
    if (this.isProcessing ?? false) {
      return html`<span>${this.processingIcon ?? 'Processing...'}</span>`
    } else {
      return html`<slot></slot>`
    }
  }

  render (): TemplateResult {
    return html`
      <button part="button"
          @click=${this.onClick}
          ?disabled=${(this.isProcessing ?? false) || (this.isWaitingForInput ?? false)}
          class="auth-button"
      >
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
