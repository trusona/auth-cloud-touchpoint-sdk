import { html, css, LitElement } from 'lit'
import { property, customElement } from 'lit/decorators.js'
import {validateEmail} from '../../utils/validators'
import {sharedStyles} from "../../shared/style";

const componentStyle = css``
@customElement('default-touchpoint')
class AuthLoginDefault extends LitElement {
    static styles = [sharedStyles, componentStyle]

    @property({type: Object}) globalStyles?: any;
    @property({type: Object}) signInWithBiometricPrompt?: any;
    @property({type: String}) inputDisabled? = 'false';
    @property({ type: String }) started?  = 'false'
    @property({ type: String }) waitingForInput? = 'true'

    @property({type: String}) performDefaultContinueEventName = 'perform-default-continue-event';
    @property({type: String}) signInAnotherWayEventName = 'sign-in-another-way-event';

    username = '';

    inputUpdated(event: InputEvent) {
        this.username = (event.target as HTMLInputElement).value
        const booleanResult = !validateEmail(this.username);
        this.waitingForInput = booleanResult.toString();
    }

    inputPlaceholder(): string {
        if (this.signInWithBiometricPrompt?.hideUsernameFieldHint) {
            return '';
        } else {
            return (
                this.signInWithBiometricPrompt?.usernameFieldHint || 'Enter email'
            );
        }
    }

    preparePerformLogin(): void {
        this.dispatchEvent(new CustomEvent(this.performDefaultContinueEventName, {
            detail: { value: this.username},
            bubbles: true,
            composed: true })
        );
    }

    preCheckSignInAnotherWay(): void {
        this.dispatchEvent(new CustomEvent(this.signInAnotherWayEventName, {
            bubbles: true,
            composed: true })
        );
    }

    render() {
        return html`
            <flex-container .globalStyles=${this.globalStyles || {}}>
                <header-1
                        ?hidden=${this.signInWithBiometricPrompt?.hideHeadline}
                        style=${this.globalStyles?.heading1Style || ''}
                >
                    ${this.signInWithBiometricPrompt?.headline || 'Sign in or create account'}
                </header-1>

                <div class="auth-ui-input-wrapper">
                    <label
                            ?hidden=${this.signInWithBiometricPrompt?.hideUsernameControlText}
                            class="auth-ui-label"
                            style=${this.globalStyles?.paragraphStyle}
                            for="email"
                    >
                        ${this.signInWithBiometricPrompt?.usernameControlText || 'Email address'}
                    </label>
                    <input
                            class="auth-ui-input"
                            .value=${this.username}
                            @input=${this.inputUpdated}
                            data-test-id="email"
                            placeholder=${this.inputPlaceholder()}
                            ?disabled=${this.inputDisabled === 'true'}
                            autofocus
                            id="email"
                            name="email"
                            type="email"
                            autocomplete="email webauthn"
                            required
                            data-input-marker="userIdentifierInput"
                    />
                </div>

                <auth-button
                        @click=${this.preparePerformLogin}
                        ?isProcessing="${this.started === 'true'}"
                        ?isWaitingForInput="${this.waitingForInput === 'true'}"
                        style=${this.globalStyles?.buttonStyle || ''}
                        btnId="loginSubmitBtn"
                >
                    ${this.signInWithBiometricPrompt?.buttonText || 'Continue'}
                </auth-button>
                
                <div ?hidden=${this.signInWithBiometricPrompt?.hideMessage}>
                    <text-block .inlineStyle=${this.globalStyles?.paragraphStyle || ''}>
                        ${this.signInWithBiometricPrompt?.message || 'By continuing, you agree to our privacy policy and terms of use.'}
                    </text-block>
                </div>

                <div class="text-center">
                    <button
                            @click=${this.preCheckSignInAnotherWay}
                            style="color: #72a3db;border: none;background-color: transparent;padding: 0"
                    >
                        Sign in another way
                    </button>
                </div>
            </flex-container>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'default-touchpoint': AuthLoginDefault
    }
}
