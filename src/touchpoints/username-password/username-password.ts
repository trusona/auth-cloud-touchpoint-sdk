import {html, css, LitElement} from 'lit';
import {property, customElement, query} from 'lit/decorators.js';
import {sharedStyles} from "../../shared/style";
import {LoginStep} from "../../utils/login.model";

const componentStyle = css`
  .password-input-container {
    position: relative;
  }

  .password-toggle-icon {
    position: absolute;
    top: 58%;
    right: 10px;
    transform: translateY(-50%);
    cursor: pointer;
    border: none !important;
    background-color: transparent;
  }

  .password-input {
    padding-right: 40px;
  }
`

@customElement('username-password-touchpoint')
class AuthLoginUsernamePassword extends LitElement {
    static styles = [sharedStyles, componentStyle]

    @property({type: Object}) globalStyles?: any;
    @property({type: Object}) signInWithBiometricPrompt?: any;
    @property({type: Object}) passwordSignIn?: any;
    @property({type: Object}) platformSpecificIcons?: any;
    @property({type: Function}) currentStep: Function = () => {
    };
    @property({type: Function}) isError: Function = () => {
    };
    @property({type: Boolean}) started?: boolean = false;
    @property({type: Object}) login: any;
    @property({type: Function}) performLogin: any;
    @property({type: Boolean}) inputDisabled: boolean = true;
    @property({type: Function}) signInAnotherWay: Function = () => {
    };
    @property({type: Function}) startOver: Function = () => {
    };

    @query('#password') passwordInput!: HTMLInputElement;

    waitingForInput: boolean = true;
    userIdentifier: string = '';
    showPassword: boolean = false;

    updated(changedProperties: Map<string | number | symbol, unknown>): void {
        if (changedProperties.has('login')) {
            this.userIdentifier = this.login.userIdentifier ?? '';
        }
    }

    onPasswordChange(event: InputEvent) {
        this.waitingForInput = (event.target as HTMLInputElement).value === '';
    }

    resetButtonClicked(event: Event) {
        event.preventDefault();
        if (this.startOver) {
            this.startOver(event);
        }
        return false;
    }

    togglePasswordVisibility(): void {
        this.showPassword = !this.showPassword;
        if (this.passwordInput) {
            this.passwordInput.type = this.showPassword ? 'text' : 'password';
        }
    }

    preCheckSignInAnotherWay() {
        this.signInAnotherWay();
    }

    inputPlaceholder() {
        if (this.passwordSignIn?.hideInputHint) {
            return '';
        } else {
            return this.passwordSignIn?.inputHint || 'Enter Password';
        }
    }

    render() {
        return html`
            ${this.currentStep(LoginStep['ProvideUsername'])
                    ? html`
                        <start-touchpoint
                                .globalStyles=${this.globalStyles}
                                .started=${this.started}
                                .login=${this.login}
                                .signInWithBiometricPrompt=${this.signInWithBiometricPrompt}
                                @signInAnotherWay=${this.preCheckSignInAnotherWay}
                                .waitingForInput=${this.waitingForInput}
                                @performContinue=${this.performLogin}
                                inputId="username"
                                inputName="username"
                                inputType="username"
                                inputAutocomplete="username webauthn"
                                ?inputAutofocus=${true}
                                ?inputRequired=${true}
                                ?isEmailInput=${false}
                                ?inputDisabled=${this.inputDisabled}
                        ></start-touchpoint>
                    ` : html`
                        <flex-container .globalStyles=${this.globalStyles}>
                            <heading1 ?hidden=${this.passwordSignIn?.hideHeadline}
                                      style=${this.globalStyles?.heading1Style}>
                                ${this.passwordSignIn?.headline || 'Sign in'}
                            </heading1>
                            <div ?hidden=${!this.isError('response')} class="error-msg">
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
                            
                            <div style="position: relative;">
                                ${!this.currentStep(LoginStep['ProvideUsername']) ? html`
                                    <div class="auth-ui-input-wrapper">
                                        <auth-reset .callback="${this.resetButtonClicked}">{{ userIdentifier }}
                                        </auth-reset>
                                    </div>
                                ` : ''}
                                <p ?hidden="!isError('userIdentifier')" class="mt-2 text-sm text-red-600">
                                    <span class="font-medium">Username or password</span> is required
                                </p>
                            </div>

                            <div ?hidden="${!this.currentStep(LoginStep.ProvidePassword)}" style="position: relative;">
                                <div class="auth-ui-input-wrapper">
                                    <label ?hidden="${!this.passwordSignIn?.hideInputLabel ?? false}"
                                           class="auth-ui-label"
                                           style="${this.globalStyles?.paragraphStyle ?? ''}"
                                           for="password">
                                        ${this.passwordSignIn?.inputLabel || 'Password'}
                                    </label>
                                    <div class="password-input-container">
                                        <input class="auth-ui-input"
                                               disabled="${!this.currentStep(LoginStep['ProvidePassword'])}"
                                               @input="${this.onPasswordChange}"
                                               placeholder=${this.inputPlaceholder()}
                                               id="password"
                                               name="password"
                                               type="${this.showPassword ? 'text' : 'password'}"
                                               required>

                                        ${!this.passwordSignIn?.hidePasswordToggle && !this.showPassword ? html`
                                            <button title="Show password"
                                                    class="password-toggle-icon"
                                                    @click="${this.togglePasswordVisibility}">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                                     fill="currentColor" class="bi bi-eye"
                                                     viewBox="0 0 16 16">
                                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                                                </svg>
                                            </button>
                                        ` : ''}

                                        ${!this.passwordSignIn?.hidePasswordToggle && this.showPassword ? html`
                                            <button title="Hide password"
                                                    class="password-toggle-icon"
                                                    @click="${this.togglePasswordVisibility}">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                                     fill="currentColor"
                                                     class="bi bi-eye-slash"
                                                     viewBox="0 0 16 16">
                                                    <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
                                                    <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
                                                    <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
                                                </svg>
                                            </button>
                                        ` : ''}

                                    </div>
                                </div>
                            </div>

                            <auth-button @click="${this.performLogin()}"
                                         loadingIcon="${this.globalStyles?.spinnerIcon}"
                                         disabled="${this.started}"
                                         waitingForInput="${this.waitingForInput}"
                                         style="${this.globalStyles?.buttonStyle}"
                                         btnId="loginSubmitBtn">${this.passwordSignIn?.buttonText || 'Continue'}
                            </auth-button>


                            ${!this.passwordSignIn?.hideMessage ? html`
                                <text-block style="${this.globalStyles?.paragraphStyle}">
                                    ${this.passwordSignIn?.message || 'By continuing, you agree to our privacy policy and terms of use.'}
                                </text-block>
                            ` : ''}


                            <div class="text-center">
                                <button
                                        @click=${this.preCheckSignInAnotherWay}
                                        style="color: #72a3db; border: none; background-color: transparent; padding: 0"
                                >
                                    Sign in another way
                                </button>
                            </div>
                        </flex-container>
                    `}
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'username-password-touchpoint': AuthLoginUsernamePassword
    }
}
