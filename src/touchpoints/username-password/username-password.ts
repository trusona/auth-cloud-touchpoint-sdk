import {html, css, LitElement} from 'lit'
import {property, customElement, query} from 'lit/decorators.js'
import {sharedStyles} from '../../shared/style'
import {LoginStep} from '../../utils/login.model'

const componentStyle = css`
  .sign-in-another-way-btn {
    border: none;
    background-color: transparent;
    color: #444444;
    font-weight: 400;
    cursor: pointer;
  }
`

@customElement('username-password-touchpoint')
class UsernamePasswordTouchpoint extends LitElement {
    static styles = [sharedStyles, componentStyle]

    @property({type: Object}) globalStyles?: any
    @property({type: Object}) signInWithBiometricPrompt?: any
    @property({type: Object}) passwordSignIn?: any
    @property({type: Object}) platformSpecificIcons?: any
    @property({type: Function}) currentStep: Function = () => {
    }
    @property({type: Function}) isError: Function = () => {
    }
    @property({type: Boolean}) started?: boolean = false
    @property({type: Object}) login: any
    @property({type: Function}) performLogin: any
    @property({type: Boolean}) inputDisabled: boolean = true
    @property({type: Function}) signInAnotherWay: Function = () => {
    }
    @property({type: Function}) startOver: Function = () => {
    }

    @query('#password') passwordInput!: HTMLInputElement

    waitingForInput: boolean = true
    showPassword: boolean = false

    getUserIdentifier(): string {
        return this.login.userIdentifier ?? ''
    }

    onPasswordChange(event: Event) {
        this.waitingForInput = (event.target as HTMLInputElement).value === ''
        this.requestUpdate()
    }

    resetButtonClicked(event: Event) {
        event.preventDefault()
        if (this.startOver) {
            this.startOver(event)
        }
        return false
    }

    prePerformLogin(): any {
        this.performLogin({
            username: this.login.userIdentifier,
            password: this.passwordInput.value
        })
    }

    preCheckSignInAnotherWay() {
        this.signInAnotherWay()
    }

    render() {
        return html`
            ${this.currentStep(LoginStep.ProvideUsername) ? html`
                <start-touchpoint
                        ?started=${this.started}
                        ?waitingForInput=${this.waitingForInput}
                        ?isEmailInput=${false}
                        ?isPhoneNumberInput=${false}
                        ?inputRequired=${false}
                        ?inputDisabled=${this.inputDisabled}
                        inputId="username"
                        inputName="username"
                        inputType="username"
                        inputAutocomplete="username webauthn"
                        .login=${this.login}
                        .globalStyles=${this.globalStyles}
                        .signInWithBiometricPrompt=${this.signInWithBiometricPrompt}
                        .signInAnotherWay=${this.preCheckSignInAnotherWay}
                        .performContinue=${this.performLogin}>
                </start-touchpoint>
            ` : html`
                <flex-container .globalStyles=${this.globalStyles}>
                    <header-1 ?hidden=${this.passwordSignIn?.hideHeadline}
                              style=${this.globalStyles?.heading1Style}>
                        ${this.passwordSignIn?.headline || 'Sign in'}
                    </header-1>
                    ${this.isError('response')
                            ? html`
                                <div class="error-msg">
                                    <div>
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                    d="M11 14.3335C10.5333 14.3335 10.1667 14.6891 10.1667 15.1668C10.1667 15.6113 10.5222 16.0002 11 16.0002C11.4444 16.0002 11.8333 15.6224 11.8333 15.1668C11.8333 14.7002 11.4555 14.3335 11 14.3335Z"
                                                    fill="#D14646"/>
                                            <path d="M11 12.25V6" stroke="#D14646" stroke-width="1.5"
                                                  stroke-linecap="round"/>
                                            <path
                                                    d="M2.06671 12.0669H2.05837C1.46671 11.4752 1.46671 10.5169 2.05837 9.93273L9.92504 2.0669V2.05857C10.5084 1.4669 11.4584 1.4669 12.05 2.05023L19.9167 9.91607C20.5 10.4994 20.5 11.4577 19.9167 12.0502L12.05 19.9086C11.4584 20.4919 10.5 20.4919 9.91671 19.9086L2.06671 12.0669Z"
                                                    stroke="#D14646" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                    <div>Incorrect username or password. Please try again.</div>
                                </div>
                            `
                            : ''}

                    <div style="position: relative;">
                        ${!this.currentStep(LoginStep.ProvideUsername)
                                ? html`
                                    <auth-input-wrapper>
                                        <auth-reset .callback="${this.resetButtonClicked}">
                                            ${this.getUserIdentifier()}
                                        </auth-reset>
                                    </auth-input-wrapper>
                                `
                                : ''}
                        <p ?hidden=${!this.isError(this.getUserIdentifier())} class="mt-2 text-sm text-red-600">
                            <span class="font-medium">Username or password</span> is required
                        </p>
                    </div>

                    <div ?hidden="${!this.currentStep(LoginStep.ProvidePassword)}" style="position: relative;">
                        <auth-password-input 
                                .onInput="${(ev: Event) => {this.onPasswordChange(ev)}}"
                                ?isDisabled="${!this.currentStep(LoginStep.ProvidePassword)}"
                                .globalStyles="${this.globalStyles}"
                                .passwordSignIn="${this.passwordSignIn}">
                        </auth-password-input>
                    </div>

                    <auth-button .onClick=${() => {this.prePerformLogin()}}
                                 processingIcon="${this.globalStyles?.spinnerIcon}"
                                 ?isProcessing=${this.started}
                                 ?isWaitingForInput=${this.waitingForInput}
                                 inlineStyle="${this.globalStyles?.buttonStyle}"
                                 btnId="loginSubmitBtn">${this.passwordSignIn?.buttonText || 'Continue'}
                    </auth-button>

                    ${!this.passwordSignIn?.hideMessage
                            ? html`
                                <text-block inlineStyle="${this.globalStyles?.paragraphStyle}">
                                    ${this.passwordSignIn?.message || 'By continuing, you agree to our privacy policy and terms of use.'}
                                </text-block>
                            `
                            : ''}


                    <div class="text-center">
                        <button @click=${this.signInAnotherWay} class="sign-in-another-way-btn">Sign in another
                            way
                        </button>
                    </div>
                </flex-container>
            `}
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'username-password-touchpoint': UsernamePasswordTouchpoint
    }
}
