import { LitElement, html, css, TemplateResult } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { sharedStyles } from '../../shared/style'
import { styleMap } from 'lit/directives/style-map.js'

const componentStyle = css`
  .auth-flexdialog {
    display: var(--auth-flexdialog-display, flex);
    row-gap: var(--auth-flexdialog-row-gap, 1.25rem);
    flex-direction: var(--auth-flexdialog-flex-direction, column);
    justify-content: var(--auth-flexdialog-justify-content, center);
    align-content: var(--auth-flexdialog-align-content, center);
    align-items: var(--auth-flexdialog-align-content, center);
    background-color: var(--auth-flexdialog-background-color, #ffffff);
    width: var(--auth-flexdialog-width, 290px);
    vertical-align: var(--auth-flexdialog-vertical-align, middle);
    padding: var(--auth-flexdialog-padding, 2rem);
    border-radius: var(--auth-flexdialog-border-radius, 0.5rem);
    margin: var(--auth-flexdialog-margin, auto);
  }
`

@customElement('flex-container')
class FlexContainer extends LitElement {
  @property({ type: String }) minWidth?: string | null
  @property({ type: Object }) globalStyles?: any

  static styles = [sharedStyles, componentStyle]

  connectedCallback () {
    super.connectedCallback()
    this.setFontFaceStyleDeclaration()
  }

  setFontFaceStyleDeclaration (): void {
    if (this.globalStyles?.primaryFontFaceStyleDeclaration == null || this.globalStyles?.primaryFontFaceStyleDeclaration?.trim() === '') {
      return this.setDefaultFontFamily()
    }

    if (this.globalStyles?.primaryFontFamily == null || this.globalStyles?.primaryFontFamily?.trim() === '') {
      return this.setDefaultFontFamily()
    }

    if (document.querySelectorAll(`style[data-font=${this.globalStyles.primaryFontFamily}]`) === undefined || document.querySelectorAll(`style[data-font=${this.globalStyles.primaryFontFamily}]`).length === 0) {
      const style = document.createElement('style')
      const doc = new window.DOMParser().parseFromString(this.globalStyles.primaryFontFaceStyleDeclaration, 'text/html')

      style.textContent = `
        ${doc.documentElement.textContent}

        body, .auth-flexdialog *, .auth-flexdialog button.auth-button {
          font-family: ${this.globalStyles.primaryFontFamily.trim()};
        }
      `

      style.dataset.font = this.globalStyles.primaryFontFamily.replace(/"/g, '\\"')
      document.head.appendChild(style)
    }
  }

  setDefaultFontFamily (): void {
    if (document.querySelectorAll('style[data-font="sans-serif"]') === undefined || document.querySelectorAll('style[data-font="sans-serif"]').length === 0) {
      const style = document.createElement('style')

      style.textContent = `
        body, .auth-flexdialog *, .auth-flexdialog button.auth-button {
          font-family: sans-serif;
        }
      `

      style.dataset.font = 'sans-serif'
      document.head.appendChild(style)
    }
  }

  render (): TemplateResult {
    return html`
            <div class="auth-flexdialog" style=${styleMap(this.getMinWidthStyles())}>
                <slot></slot>
            </div>
        `
  }

  private getMinWidthStyles (): any {
    return { 'min-width': this.minWidth ?? 'auto' }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'flex-container': FlexContainer
  }
}
