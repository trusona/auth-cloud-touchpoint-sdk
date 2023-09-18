import { LitElement, html, property } from 'lit-element';
import {customElement, query} from "lit/decorators.js";


@customElement('auth-web-authn-continue')
class AuthWebAuthnContinue extends LitElement {
    @property({ type: Object }) successfulUpgrade?: any;
    @property({ type: Object }) globalStyles?: any;
    @property({ type: Object }) platformSpecificIcons?: any;
    @property({ type: Function }) next: Function = () => {};
    @property({ type: Boolean }) buttonAutoFocus?: boolean = true;
    @property({ type: Boolean }) started: Boolean = false;

    @query('#auth-button') authBtn!: HTMLInputElement;

    updated(changedProperties: any) {
        super.updated(changedProperties);
        if (changedProperties.has('buttonAutoFocus') && this.buttonAutoFocus) {
            this.setButtonFocus();
        }
    }

    setButtonFocus(): void {
        setTimeout(() => {
            if (this.authBtn != null && this.successfulUpgrade?.disableButtonFocus !== false) {
                this.authBtn.focus();
            }
        }, 1);
    }

    onNextClicked(): void {
        this.started = true;
        this.next();
    }

    render() {
        return html`
      <flex-container .globalStyles=${this.globalStyles}>
        <heading1 .inlineStyle=${this.globalStyles?.heading1Style}>${this.successfulUpgrade?.headline}</heading1>
        <text-block .inlineStyle=${this.globalStyles?.paragraphStyle}>${this.successfulUpgrade?.bodyText}</text-block>
        <auth-button
          @click=${this.onNextClicked}
          ?disabled=${this.started}
          .inlineStyle=${this.globalStyles?.buttonStyle}
          .loadingIcon=${this.globalStyles?.spinnerIcon}>
          ${this.successfulUpgrade?.buttonText}
        </auth-button>
      </flex-container>
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'auth-web-authn-continue': AuthWebAuthnContinue
    }
}
