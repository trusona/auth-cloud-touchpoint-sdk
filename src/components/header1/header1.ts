import { LitElement, html, TemplateResult } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('header-1')
class Header1 extends LitElement {

  render (): TemplateResult {
    return html`
        <h1><slot></slot></h1>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'header-1': Header1
  }
}
