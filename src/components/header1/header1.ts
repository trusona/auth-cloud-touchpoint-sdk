import { LitElement, html, css, TemplateResult } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { sharedStyles } from '../../shared/style'

const componentStyle = css`
  h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    display: block;
    align-items: center;
    text-align: center;
    color: #000000;
    margin-bottom: 0;
    margin-top: 0;
    padding-top: 0;
    padding-bottom: 0;
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
