import { LitElement, html, css, TemplateResult } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { sharedStyles } from '../../shared/style'

const componentStyle = css`
  h2 {
    font-style: var(--auth-header-2-font-style, normal);
    font-weight: var(--auth-header-2-font-weight, 400);
    font-size: var(--auth-header-2-font-size, 16px);
    line-height: var(--auth-header-2-line-height, 18px);
    display: var(--auth-header-2-display, flex);
    align-items: var(--auth-header-2-align-items, center);
    text-align: var(--auth-header-2-text-align, center);
    color: var(--auth-header-2-color, rgb(23, 47, 48));
    margin-bottom: var(--auth-header-2-margin-bottom, 0);
    margin-top: var(--auth-header-2-margin-top, 0);
    padding-top: var(--auth-header-2-padding-top, 0);
    padding-bottom: var(--auth-header-2-padding-bottom, 0);
  }
  `

@customElement('header-2')
class Header2 extends LitElement {
  static styles = [sharedStyles, componentStyle]
  @property({ type: String }) inlineStyle = ''

  render (): TemplateResult {
    return html`
        <h2 style="${this.inlineStyle}"><slot></slot></h2>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'header-2': Header2
  }
}
