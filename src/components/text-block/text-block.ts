import { LitElement, html, TemplateResult } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('text-block')
class TextBlock extends LitElement {

  render (): TemplateResult {
    return html`
        <p><slot></slot></p>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'text-block': TextBlock
  }
}
