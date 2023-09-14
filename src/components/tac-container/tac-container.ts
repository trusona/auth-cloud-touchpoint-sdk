import {LitElement, html, PropertyValueMap} from 'lit'
import { customElement, property } from 'lit/decorators.js'
import {TemplateResult} from "lit/development";

@customElement('tac-container')
class TacContainer extends LitElement {
    @property({ type: Object }) globalStyles: any

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
                let backgroundCss = ""
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

    connectedCallback() {
        super.connectedCallback();
        this.updateStyles()
    }

    updated(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>) {
        super.updated(changedProperties);
        this.updateStyles()
    }

    getSecondColumn = (): TemplateResult => {
        if(this.globalStyles?.tacContainerShowSecondColumn) {
            return html`
                <div class="auth-container-divider"></div>
                <tac-info .globalStyles=${this.globalStyles}></tac-info>
            `
        } else {
            return html``
        }
    }

    render() {
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
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'tac-container': TacContainer
    }
}

