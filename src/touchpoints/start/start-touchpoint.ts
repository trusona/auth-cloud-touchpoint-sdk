import {html, css, LitElement} from 'lit'
import {property, customElement} from 'lit/decorators.js'
import {sharedStyles} from '../../shared/style'
import {validateEmail, validatePhoneNumber} from '../../utils/validators'

const componentStyle = css``

@customElement('start-touchpoint')
class StartTouchpoint extends LitElement {
    static styles = [sharedStyles, componentStyle]

    @property({type: Boolean}) started?: boolean = false
    @property({type: Boolean}) waitingForInput?: boolean = true
    @property({type: Boolean}) isEmailInput?: boolean = false
    @property({type: Boolean}) isPhoneNumberInput?: boolean = false

    @property({type: Boolean}) inputAutofocus?: boolean = false
    @property({type: Boolean}) inputRequired?: boolean = false
    @property({type: Boolean}) inputDisabled?: boolean = false

    @property({type: String}) inputId?: string = 'username'
    @property({type: String}) inputName?: string = 'username'
    @property({type: String}) inputType?: string = 'username'
    @property({type: String}) inputAutocomplete?: string = 'username webauthn'

    @property({type: Object}) login?: any
    @property({type: Object}) globalStyles?: any
    @property({type: Object}) signInWithBiometricPrompt?: any

    @property({type: Function}) signInAnotherWay: Function = () => {
    }
    @property({type: Function}) performContinue: Function = () => {
    }

    username: string = ''
    isEmailError: boolean = false
    isPhoneNumberError: boolean = false

    render() {
        return html`
            <flex-container .globalStyles=${this.globalStyles}>
                ${this.renderHeader()}

                ${this.renderError()}

                <div class="auth-ui-input-wrapper">

                    ${this.renderLabel()}

                    <input class="auth-ui-input"
                           value="${this.login?.userIdentifier ?? ''}"
                           @input=${(e: any) => this.onInputChange(e.target.value)}
                           placeholder="${this.inputPlaceholder()}"
                           id="${this.inputId}"
                           name="${this.inputName}"
                           type="${this.inputType}"
                           autocomplete="${this.inputAutocomplete}"
                           ?autofocus=${this.inputAutofocus}
                           ?required=${this.inputRequired}
                           data-input-marker="userIdentifierInput"
                    >
                </div>

                <auth-button .onClick="${() => this.preparePerformLogin()}"
                             ?isProcessing=${this.started}
                             processingIcon="${this.globalStyles?.spinnerIcon}"
                             ?isWaitingForInput=${this.waitingForInput}
                             inlineStyle="${this.globalStyles?.buttonStyle}"
                             btnId="loginSubmitBtn">
                    ${this.signInWithBiometricPrompt?.buttonText || 'Continue'}
                </auth-button>

                ${this.renderMessage()}

                <div style="text-align:center"
                '>
                <button @click="${() => this.preCheckSignInAnotherWay()}"
                        style="color: #72a3db;border: none;background-color: transparent;padding: 0; cursor: pointer">
                    Sign in another way
                </button>
                </div>
            </flex-container>
        `
    }

    private renderHeader() {
        return (!this.signInWithBiometricPrompt?.hideHeadline)
            ? html`
                    <header-1 inlineStyle="${this.globalStyles?.heading1Style}">
                        ${this.signInWithBiometricPrompt?.headline || 'Sign in or create account'}
                    </header-1>
            `
            : html``
    }

    private renderError() {
        return (this.isEmailError || this.isPhoneNumberError)
            ? html`
                    <div class="error-msg">
                        <div>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 14.3335C10.5333 14.3335 10.1667 14.6891 10.1667 15.1668C10.1667 15.6113 10.5222 16.0002 11 16.0002C11.4444 16.0002 11.8333 15.6224 11.8333 15.1668C11.8333 14.7002 11.4555 14.3335 11 14.3335Z"
                                      fill="#D14646"/>
                                <path d="M11 12.25V6" stroke="#D14646" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M2.06671 12.0669H2.05837C1.46671 11.4752 1.46671 10.5169 2.05837 9.93273L9.92504 2.0669V2.05857C10.5084 1.4669 11.4584 1.4669 12.05 2.05023L19.9167 9.91607C20.5 10.4994 20.5 11.4577 19.9167 12.0502L12.05 19.9086C11.4584 20.4919 10.5 20.4919 9.91671 19.9086L2.06671 12.0669Z"
                                      stroke="#D14646" stroke-width="1.5" stroke-linecap="round"
                                      stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div>
                            ${this.isPhoneNumberError ? 'Please enter a valid phone number.' : 'Please enter a valid email.'}
                        </div>
                    </div>
            `
            : html``
    }

    private renderLabel() {
        if (this.signInWithBiometricPrompt?.hideUsernameControlText) {
            return html``
        }
        if (this.isPhoneNumberInput) {
            return html`
                <label class="auth-ui-label" style="${this.globalStyles?.paragraphStyle}"
                       for="${this.inputId}">
                    Phone number
                </label>
            `
        } else if (this.inputName === 'username') {
            return html`
                <label class="auth-ui-label" style="${this.globalStyles?.paragraphStyle}"
                       for="${this.inputId}">
                    ${this.signInWithBiometricPrompt?.usernameControlText || 'Username'}
                </label>
            `
        } else {
            return html`
                <label class="auth-ui-label" style="${this.globalStyles?.paragraphStyle}"
                       for="${this.inputId}">
                    ${this.signInWithBiometricPrompt?.usernameControlText || 'Email address'}
                </label>
            `
        }
    }

    private renderMessage() {
        return (!this.signInWithBiometricPrompt?.hideMessage)
            ? html`
                    <text-block inlineStyle="${this.globalStyles?.paragraphStyle}">
                        ${this.signInWithBiometricPrompt?.message || 'By continuing, you agree to our privacy policy and terms of use.'}
                    </text-block>
            `
            : html``
    }

    private onInputChange(value: string) {
        if (value.trim() !== '') {
            if (this.isPhoneNumberInput || this.isEmailInput) {
                if (this.isPhoneNumberInput) {
                    this.waitingForInput = !validatePhoneNumber(value)
                    if (this.isPhoneNumberError && !this.waitingForInput) {
                        this.isPhoneNumberError = false
                        this.requestUpdate()
                    }
                }
                if (this.isEmailInput) {
                    this.waitingForInput = !validateEmail(value)
                    if (this.isEmailError && !this.waitingForInput) {
                        this.isEmailError = false
                        this.requestUpdate()
                    }
                }
            } else {
                this.waitingForInput = false
            }
        } else {
            this.waitingForInput = true
        }
        this.username = value
    }

    private inputPlaceholder() {
        if (this.signInWithBiometricPrompt?.hideUsernameFieldHint) {
            return ''
        }
        if (this.isPhoneNumberInput) {
            return this.signInWithBiometricPrompt?.usernameFieldHint || 'Enter 10 digit phone number'
        } else if (this.inputName === 'username') {
            return this.signInWithBiometricPrompt?.usernameFieldHint || 'Enter username'
        } else {
            return this.signInWithBiometricPrompt?.usernameFieldHint || 'Enter email'
        }
    }

    private preparePerformLogin() {
        this.performContinue(this.username)
    }

    private preCheckSignInAnotherWay(): void {
        if (this.isPhoneNumberInput && this.waitingForInput) {
            this.isPhoneNumberError = true
            this.requestUpdate()
        } else if (this.isEmailInput && this.waitingForInput) {
            this.isEmailError = true
            this.requestUpdate()
        } else {
            this.signInAnotherWay()
        }
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'start-touchpoint': StartTouchpoint
    }
}
