import { LitElement, html, css, TemplateResult } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { sharedStyles } from '../../shared/style'

const componentStyle = css`
  h1 {
    font-style: var(--auth-header-1-font-style, normal);
    font-weight: var(--auth-header-1-font-weight, 400);
    font-size: var(--auth-header-1-font-size, 20px);
    line-height: var(--auth-header-1-line-height, 20px);
    display: var(--auth-header-1-display, block);
    align-items: var(--auth-header-1-align-items, center);
    text-align: var(--auth-header-1-text-align, center);
    color: var(--auth-header-1-color, #000000);
    margin-bottom: var(--auth-header-1-margin-bottom, 0);
    margin-top: var(--auth-header-1-margin-top, 0);
    padding-top: var(--auth-header-1-padding-top, 0);
    padding-bottom: var(--auth-header-1-padding-bottom, 0);
  }
  `

@customElement('header-1')
class Header1 extends LitElement {
  static styles = [sharedStyles, componentStyle]
  @property({ type: String }) inlineStyle = ''

  render (): TemplateResult {
    return html`
        <h1 style="${this.inlineStyle}"><slot></slot></h1>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'header-1': Header1
  }
}
