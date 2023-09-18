import {LitElement, html, property} from 'lit-element';
import {customElement} from "lit/decorators.js";


@customElement('auth-create-passkey')
class CreatePasskeyComponent extends LitElement {
    @property({type: String}) userIdentifier?: string = '';
    @property({type: Object}) globalStyles?: any;
    @property({type: Object}) createPasskey?: any;
    @property({type: Object}) platformSpecificIcons?: any;
    @property({type: Boolean}) started: Boolean = false;
    @property({type: Boolean}) disableSkipForNow: Boolean = false;
    @property({type: Function}) enroll: Function = () => {
    };
    @property({type: Function}) skipCreatePasskey: Function = () => {
    };
    @property({type: Function}) reset: Function = () => {
    };

    render() {
        return html`
            <flex-container .globalStyles=${this.globalStyles}>

                ${!this.createPasskey?.hideHeadline ? html`
                            <heading1 .inlineStyle=${this.globalStyles?.heading1Style}>
                                {{ createPasskey?.headline || 'Create passkey' }}
                            </heading1>
                        `
                        : ''}

                <div class="auth-ui-input-wrapper">
                    <auth-reset @click=${this.reset}>{{ userIdentifier }}</auth-reset>
                </div>

                <auth-button @click=${this.enroll}
                             ?disabled=${this.started}
                             .inlineStyle=${this.globalStyles?.buttonStyle}
                             .loadingIcon=${this.globalStyles?.spinnerIcon}
                             .hideIcon=${this.createPasskey?.hideIcon}>
                    {{ createPasskey?.buttonText || 'Create passkey' }}
                </auth-button>

                <div ?hidden=${this.createPasskey?.hideMessage}>
                    <text-block .inlineStyle=${this.globalStyles?.paragraphStyle || ''}>
                        ${this.createPasskey?.message || 'By continuing, you agree to our privacy policy and terms of use.'}
                    </text-block>
                </div>

                ${!this.createPasskey?.hideSkipForNow && !this.disableSkipForNow ? html`
                    <auth-skip @click=${this.skipCreatePasskey}>
                        {{ createPasskey?.skipForNow || 'Skip for now' }}
                    </auth-skip>
                ` : ''}
            </flex-container>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'auth-create-passkey': CreatePasskeyComponent
    }
}
