import {LitElement, html} from 'lit';
import {customElement, property} from "lit/decorators.js";


@customElement('create-passkey-touchpoint')
class CreatePasskeyTouchpoint extends LitElement {
    @property({type: String}) userIdentifier?: string = '';
    @property({type: Object}) globalStyles?: any;
    @property({type: Object}) createPasskey?: any;
    @property({type: Object}) platformSpecificIcons?: any;
    @property({type: Boolean}) started: Boolean = false;
    @property({type: Boolean}) disableSkipForNow: Boolean = false;
    @property({type: Function}) enroll: Function = () => {};
    @property({type: Function}) skipCreatePasskey: Function = () => {};
    @property({type: Function}) reset: Function = () => {};

    render() {
        return html`
            <flex-container .globalStyles=${this.globalStyles}>

                ${!this.createPasskey?.hideHeadline ? html`
                            <header-1 .inlineStyle=${this.globalStyles?.heading1Style}>
                                ${this.createPasskey?.headline || 'Create passkey' }
                            </header-1>
                        `
                        : ''}

                <div class="auth-ui-input-wrapper">
                    <auth-reset .onClick=${() => { this.reset() }}>${this.userIdentifier}</auth-reset>
                </div>

                <auth-button .onClick=${() => { this.enroll() }}
                             btnId="authBtn"
                             ?isProcessing=${this.started}
                             .inlineStyle=${this.globalStyles?.buttonStyle}
                             .processingIcon=${this.globalStyles?.spinnerIcon}>
                    ${this.createPasskey?.buttonText || 'Create passkey' }
                </auth-button>

                <div ?hidden=${this.createPasskey?.hideMessage}>
                    <text-block .inlineStyle=${this.globalStyles?.paragraphStyle || ''}>
                        ${this.createPasskey?.message || 'By continuing, you agree to our privacy policy and terms of use.'}
                    </text-block>
                </div>

                ${!this.createPasskey?.hideSkipForNow && !this.disableSkipForNow ? html`
                    <auth-skip .onclick=${() => {this.skipCreatePasskey()}}>
                        ${this.createPasskey?.skipForNow || 'Skip for now' }
                    </auth-skip>
                ` : ''}
            </flex-container>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'create-passkey-touchpoint': CreatePasskeyTouchpoint
    }
}
