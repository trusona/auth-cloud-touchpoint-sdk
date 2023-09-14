import {LitElement, html} from 'lit'
import { customElement, property } from 'lit/decorators.js'
import {TemplateResult} from "lit/development";
import {unsafeHTML} from 'lit/directives/unsafe-html.js';

@customElement('tac-footer')
class TacFooter extends LitElement {
    @property({ type: Object }) globalStyles: any

    isFooterVisible = (): boolean => {
        return this.globalStyles?.footerVisible !== undefined && this.globalStyles?.footerVisible
    }

    getFooterContent = (): TemplateResult => {
        if(this.globalStyles?.footerContent !== undefined && this.globalStyles?.footerContent.trim() !== '') {
            return html`<div>${unsafeHTML(this.globalStyles.footerContent)}</div>`
        } else {
            return html``
        }
    }

    render() {
        if(this.isFooterVisible()) {
            return html`
              <div style="${this.globalStyles?.footerStyle}" class="auth-footer">
                ${this.getFooterContent()}
              </div>
            `;
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

