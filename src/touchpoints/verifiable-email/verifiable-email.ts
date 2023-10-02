import { LitElement, html, TemplateResult } from 'lit'
import { customElement, query, property } from 'lit/decorators.js'
import { LoginError, LoginStep } from '../../utils/login.model'
import { sharedStyles } from '../../shared/style'

@customElement('verifiable-email-touchpoint')
export class VerifiableEmailTouchpoint extends LitElement {
  static styles = [sharedStyles]

  @property({ type: Object }) globalStyles?: any
  @property({ type: Object }) otpSignIn?: any
  @property({ type: Boolean }) setFocus = true
  @property({ type: Boolean }) started = false
  @property({ type: Boolean }) waitingForInput? = true
  @property({ type: Object }) login: any
  @property({ type: Boolean }) inputDisabled = true
  @property({ type: Object }) loginError?: any
  @property({ type: Boolean }) isInErrorState = false
  @property({ type: Function }) signInWithBiometricPrompt: Function = () => {}
  @property({ type: Function }) performLogin: Function = () => {}
  @property({ type: Function }) signInAnotherWay: Function = () => {}
  @property({ type: Function }) resendCode: Function = () => {}
  @property({ type: Function }) startOver: Function = () => {}
  @property({ type: Function }) codeCompleted: Function = () => {}
  @property({ type: Function }) currentStep: Function = () => {}
  @property({ type: Function }) isError: Function = () => {}

  @query('#authCodeInput') authCodeInputElement!: HTMLInputElement
  @query('#codeInput') codeInput!: any

  userIdentifier = ''
  errorCnt = 0

  updated (changedProperties: Map<string | number | symbol, unknown>): void {
    super.updated(changedProperties)
    if (changedProperties.has('loginError') && this.loginError != null) {
      this.errorCnt = 0
      this.waitingForInput = true
    }
  }

  preparePerformLogin (username: string) {
    this.userIdentifier = username
    this.performLogin(this.userIdentifier)
  }

  async performResendCode (event: Event): Promise<void> {
    event.preventDefault()
    if (this.resendCode) {
      this.codeInput.reset()
      this.resendCode()
    }
  }

  onWebAuthCodeChanged (code: string): void {
    if (this.authCodeInputElement != null) {
      this.authCodeInputElement.value = code
    }
  }

  preLogin (): void {
    this.performLogin()
    this.codeInput.reset(true)
  }

  onWebAuthCodeCompleted (code: string): void {
    if (this.authCodeInputElement != null) {
      this.authCodeInputElement.value = code
    }
    this.waitingForInput = false
    this.login.response = code
    if (this.codeCompleted) {
      this.errorCnt = 0
      this.codeCompleted()
    }
  }

  render (): TemplateResult {
    if (this.currentStep(LoginStep.ProvideEmail)) {
      return html`
              <start-touchpoint
                      ?started=${this.started}
                      ?waitingForInput=${this.waitingForInput}
                      ?isEmailInput=${true}
                      ?isPhoneNumberInput=${false}
                      ?inputAutofocus=${this.setFocus}
                      ?inputRequired=${false}
                      ?inputDisabled=${this.inputDisabled}
                        inputId="email"
                        inputName="email"
                        inputType="email"
                        inputAutocomplete="email webauthn"
                      .login=${this.login}
                      .globalStyles=${this.globalStyles}
                      .signInWithBiometricPrompt=${this.signInWithBiometricPrompt}
                      .signInAnotherWay=${this.signInAnotherWay}
                      .performContinue=${this.preparePerformLogin.bind(this)}>
              </start-touchpoint>
            `
    } else {
      return html`
                <flex-container .globalStyles="${this.globalStyles}" minWidth="325px">
                    <header-1 ?hidden="${this.otpSignIn?.hideHeadline}" .style="${this.globalStyles?.heading1Style}">
                        ${this.otpSignIn?.headline || 'Sign in'}
                    </header-1>

                    ${this.loginError != null
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
                            ${this.loginError === LoginError.RATE_LIMIT_ERROR
? html`
                                <div>Too many attempts! Try again later.</div>
                            `
: html`
                                <div>Code is invalid! Try again.</div>
                            `}
                        </div>
                    `
: ''
                    }

        <div style="position: relative;">
          <div class="auth-ui-input-wrapper">
            <auth-reset .onClick="${() => { this.startOver() }}">${this.userIdentifier}</auth-reset>
          </div>
        </div>

          ${this.otpSignIn?.hideMessage === true
? html`
              <text-block .inlineStlye="${this.globalStyles?.paragraphStyle}">
                  ${this.otpSignIn?.message || 'Enter code sent to your phone number.'}
              </text-block>
          `
: ''}

        <button type="button" class="resendBtn" @click="${this.performResendCode}">Resend</button>

        <div ?hidden="${!this.currentStep(LoginStep.VerifyOtp)}" style="position: relative;" class="auth-code-input-wrapper">
          <input
            .value="${this.login?.response ?? ''}"
            ?disabled=${!this.currentStep(LoginStep.VerifyOtp)}
            ?hidden="${true}"
            id="code"
            name="code"
            type="hidden"
            inputmode="numeric"
            maxlength="6"
            autocomplete="one-time-code"
          />

          <code-input ?hidden="${this.setFocus}" 
                      .isCodeHidden="${false}" 
                      initialFocusField="0" 
                      codeLength="6" 
                      .codeChanged=${(code: any) => { this.onWebAuthCodeChanged(code) }} 
                      .codeCompleted=${(code: any) => { this.onWebAuthCodeCompleted(code) }} 
                      ?isPrevFocusableAfterClearing="${false}" 
                      id="codeInput">
          </code-input>
        </div>
          
          <auth-button .onClick=${() => { this.preLogin() }}
                       ?isProcessing=${this.started}
                       processingIcon="${this.globalStyles?.spinnerIcon}"
                       ?isWaitingForInput=${this.waitingForInput}
                       .inlineStyle="${this.globalStyles?.buttonStyle}" 
                       btnId="loginSubmitBtn">
            ${this.otpSignIn?.buttonText || 'Continue'}
          </auth-button>

        <div class="text-center">
          <button @click=${this.signInAnotherWay} class="sign-in-another-way-btn">Sign in another way</button>
        </div>
      </flex-container>
    `
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'verifiable-email-touchpoint': VerifiableEmailTouchpoint
  }
}
