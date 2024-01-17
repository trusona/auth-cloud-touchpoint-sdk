import { LitElement, html, css, PropertyValueMap } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { sharedStyles } from '../../shared/style'
import { TemplateResult } from 'lit/development'
import { unsafeSVG } from 'lit/directives/unsafe-svg.js'

const componentStyle = css`
  .auth-header-nav {
    display: var(--tac-header-nav-display, flex);
    justify-content: var(--tac-header-nav-justify-content, space-between);
    align-content: var(--tac-header-nav-align-content, center);
    align-items: var(--tac-header-nav-align-items, center);
    width: var(--tac-header-nav-width, 100%);
    padding: var(--tac-header-nav-padding, 1.375rem 1.875rem);
    background-color: var(--tac-header-nav-background-color, #ffffff);
    margin-bottom: var(--tac-header-nav-margin-bottom, 1rem);
  }

  .auth-header-nav img {
    width: var(--tac-header-nav-img-width, auto);
    height: var(--tac-header-nav-img-height, auto);
  }

  .auth-header-nav__lock {
    display: var(--tac-header-nav-lock-display, flex);
    justify-content: var(--tac-header-nav-lock-justify-content, space-between);
    align-content: var(--tac-header-nav-lock-align-content, center);
    align-items: var(--tac-header-nav-lock-align-items, flex-end);
  }

  .auth-header-nav__lock div {
    margin-right: var(--tac-header-nav-lock-div-margin-right, 1rem);
    color: var(--tac-header-nav-lock-div-color, #444444);
    font-size: var(--tac-header-nav-lock-div-font-size, 18px);
    line-height: var(--tac-header-nav-lock-div-line-height, 21px);
  }
`

@customElement('tac-header-nav')
class TacHeaderNav extends LitElement {
  @property({ type: Object }) globalStyles: any

  visible = false

  static styles = [sharedStyles, componentStyle]

  connectedCallback () {
    super.connectedCallback()
    if (this.globalStyles?.headerNavVisible) this.visible = true
  }

  updated (changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>) {
    super.updated(changedProperties)
    if (this.globalStyles?.headerNavVisible) this.visible = true
  }

  getSvgLogo = (): TemplateResult => {
    if (this.globalStyles.headerNavLogo) {
      return html`${unsafeSVG(this.globalStyles.headerNavLogo)}`
    } else {
      return html``
    }
  }

  render () {
    if (this.visible) {
      return html`
              <div style="${this.globalStyles?.headerNavStyle}" class="auth-header-nav">
                ${this.globalStyles?.headerNavLogo
                        ? html`
                      <div
                        class="logo-icon"
                        style="width: ${this.globalStyles?.headerNavLogoWidth || 'auto'}; height: ${this.globalStyles?.headerNavLogoHeight || 'auto'}"
                      >
                        ${this.getSvgLogo()}
                      </div>
                    `
                        : ''}
                    ${this.globalStyles?.headerNavShowSecureMsg
? html`
                          <div class="auth-header-nav__lock">
                            <div>Secure sign-in</div>
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <g clip-path="url(#clip0_807_722)">
                                      <path d="M18.75 9.75H5.25C4.42157 9.75 3.75 10.4216 3.75 11.25V21.75C3.75 22.5784 4.42157 23.25 5.25 23.25H18.75C19.5784 23.25 20.25 22.5784 20.25 21.75V11.25C20.25 10.4216 19.5784 9.75 18.75 9.75Z" stroke="#444444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                      <path d="M6.75003 9.75002V6.00002C6.74003 3.10002 9.10003 0.740022 11.99 0.740022C14.88 0.730022 17.24 3.09002 17.24 5.98002V9.73002" stroke="#444444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                      <path d="M11.9999 15.7499H11.9899C11.7799 15.7499 11.6099 15.9099 11.6099 16.1199C11.6099 16.3199 11.7699 16.4899 11.9799 16.4899C12.1799 16.4799 12.3499 16.3199 12.3499 16.1099V16.0999C12.3499 15.8899 12.1799 15.7199 11.9699 15.7199C11.9599 15.7099 11.9599 15.7099 11.9599 15.7199" stroke="#444444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  </g>
                                  <defs>
                                      <clipPath id="clip0_807_722">
                                          <rect width="24" height="24" fill="white"/>
                                      </clipPath>
                                  </defs>
                              </svg>
                          </div>`
                    : ''}
              </div>
            `
    } else {
      return html``
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tac-header-nav': TacHeaderNav
  }
}
