import { LitElement, html, css, TemplateResult } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { sharedStyles } from '../../shared/style'

const componentStyle = css`
  p {
    text-align: center;
    font-size: 1rem;
    line-height: 1.75rem;
    font-weight: 400;
  }
  `

@customElement('text-block')
class TextBlock extends LitElement {
  static styles = [sharedStyles, componentStyle]
  @property({ type: String }) inlineStyle = ''

  render (): TemplateResult {
    return html`
        <p style="${this.inlineStyle}"><slot></slot></p>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'text-block': TextBlock
  }
}
