import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { sharedStyles } from '../../shared/style'
import { TemplateResult } from 'lit/development'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'

const componentStyle = css`
  .auth-footer{
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    width: 100%;
    padding: 1.5rem;
    background-color: #ffffff;
  }
`

@customElement('tac-footer')
class TacFooter extends LitElement {
  @property({ type: Object }) globalStyles: any

  static styles = [sharedStyles, componentStyle]

  isFooterVisible = (): boolean => {
    return this.globalStyles?.footerVisible !== undefined && this.globalStyles?.footerVisible
  }

  getFooterContent = (): TemplateResult => {
    if (this.globalStyles?.footerContent !== undefined && this.globalStyles?.footerContent.trim() !== '') {
      return html`<div>${unsafeHTML(this.globalStyles.footerContent)}</div>`
    } else {
      return html``
    }
  }

  render () {
    if (this.isFooterVisible()) {
      return html`
              <div style="${this.globalStyles?.footerStyle}" class="auth-footer">
                ${this.getFooterContent()}
              </div>
            `
    } else {
      return html``
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tac-footer': TacFooter
  }
}
