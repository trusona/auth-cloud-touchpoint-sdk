import { LitElement, html, css, PropertyValueMap } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { sharedStyles } from '../../shared/style'
import { TemplateResult } from 'lit/development'

const componentStyle = css`
  .auth-tac-container {
    width: var(--tac-container-width, 100%);
    height: var(--tac-container-height, 100vh);
    background-color: var(--tac-container-background-color, #FAFAFA);
    display: var(--tac-container-display, flex);
    flex-flow: var(--tac-container-flex-flow, column);
  }

  .auth-tac-container .auth-header-nav {
    flex: var(--tac-container-header-nav-flex, 0 1 auto);
  }

  .auth-tac-container .auth-inner-wrapper {
    flex: var(--tac-container-inner-wrapper-flex, 1 1 auto);
    width: var(--tac-container-inner-wrapper-width, 100%);
    display: var(--tac-container-inner-wrapper-display, flex);
    justify-content: var(--tac-container-inner-wrapper-justify-content, center);
    align-content: var(--tac-container-inner-wrapper-align-content, center);
    align-items: var(--tac-container-inner-wrapper-align-items, center);
    flex-direction: var(--tac-container-inner-wrapper-flex-direction, column);
    gap: var(--tac-container-inner-wrapper-gap, 1.5rem);
    background-color: var(--tac-container-inner-wrapper-background-color, inherit);
  }

  .auth-inner-wrapper .auth-help {
    font-style: var(--tac-container-help-font-style, normal);
    font-weight: var(--tac-container-help-font-weight, 400);
    font-size: var(--tac-container-help-font-size, 14px);
    line-height: var(--tac-container-help-line-height, 14px);
    display: var(--tac-container-help-display, flex);
    width: var(--tac-container-help-width, 100%);
    text-align: var(--tac-container-help-text-align, center);
    justify-content: var(--tac-container-help-justify-content, center);
    align-content: var(--tac-container-help-align-content, center);
    color: var(--tac-container-help-color, #444444);
    opacity: var(--tac-container-help-opacity, 0.75);
  }

  .auth-tac-container .auth-main-content {
    display: var(--tac-container-main-content-display, flex);
    background-color: var(--tac-container-main-content-background-color, white);
    padding: var(--tac-container-main-content-padding, 2rem 0);
    justify-content: var(--tac-container-main-content-justify-content, center);
    align-items: var(--tac-container-main-content-align-items, center);
    flex-wrap: var(--tac-container-main-content-flex-wrap, wrap);
  }

  .auth-tac-container .auth-container-divider {
    width: var(--tac-container-divider-width, 1px);
    align-self: var(--tac-container-divider-align-self, stretch);
    background: var(--tac-container-divider-background, #D8D8D8);
  }

  @media only screen and (max-width: 1125px) {
    .auth-tac-container .auth-container-divider {
      display: none;
    }

    .auth-tac-container .auth-main-content {
      height: auto !important;
    }
  }
`

@customElement('tac-container')
class TacContainer extends LitElement {
  @property({ type: Object }) globalStyles: any

  static styles = [sharedStyles, componentStyle]

  updateStyles = (): void => {
    if (this.globalStyles?.tacContainerStyle) {
      const css = `${this.globalStyles.tacContainerStyle}`

      const styleElm = document.getElementById('tacContainerStyle')
      if (styleElm === null) {
        const styleElm = document.createElement('style')
        styleElm.id = 'tacContainerStyle'
        const head = document.getElementsByTagName('head')[0]
        styleElm.appendChild(document.createTextNode(css))
        head.appendChild(styleElm)
      } else {
        let backgroundCss = ''
        if (this.globalStyles?.tacContainerBackgroundImg) {
          backgroundCss = `
                    .auth-tac-container .auth-inner-wrapper{
                      background: url(${this.globalStyles?.tacContainerBackgroundImg}) no-repeat center center fixed;
                      -webkit-background-size: cover;
                      -moz-background-size: cover;
                      -o-background-size: cover;
                      background-size: cover;
                    }
                    .auth-tac-container .auth-header-nav {
                      margin-bottom: 0;
                    }
                  `
        }
        styleElm.innerHTML = `
                  ${backgroundCss}
                  ${css}
                `
      }
    }
  }

  connectedCallback () {
    super.connectedCallback()
    this.updateStyles()
  }

  updated (changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>) {
    super.updated(changedProperties)
    this.updateStyles()
  }

  getSecondColumn = (): TemplateResult => {
    if (this.globalStyles?.tacContainerShowSecondColumn) {
      return html`
                <div class="auth-container-divider"></div>
                <tac-info .globalStyles=${this.globalStyles}></tac-info>
            `
    } else {
      return html``
    }
  }

  render () {
    return html`
            <div  class="auth-tac-container">
                <tac-header-nav .globalStyles=${this.globalStyles}></tac-header-nav>
                <div class="auth-inner-wrapper">
                    <div class="auth-main-content" style="${this.globalStyles?.componentHeightStyle ?? 'auto'}">
                        <slot></slot>
                        ${this.getSecondColumn()}
                    </div>
                </div>
                <tac-footer .globalStyles=${this.globalStyles}></tac-footer>
            </div>
        `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tac-container': TacContainer
  }
}
