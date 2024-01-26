import {LitElement, html, css} from 'lit';
import {query, customElement, property } from 'lit/decorators.js'
import {sharedStyles} from "../../shared/style";

const componentStyle = css`

  .auth-ui-label {
    position: var(--auth-input-ui-label-position, absolute);
    top: var(--auth-input-ui-label-top, .25rem);
    z-index: var(--auth-input-ui-label-z-index, 1);
    left: var(--auth-input-ui-label-left, 2em);
    background-color: var(--auth-input-ui-label-background-color, white);
    padding: var(--auth-input-ui-label-padding, 0 7px);
    font-style: var(--auth-input-ui-label-font-style, normal);
    font-weight: var(--auth-input-ui-label-font-weight, 400);
    font-size: var(--auth-input-ui-label-font-size, 12px);
    line-height: var(--auth-input-ui-label-line-height, 12px);
    color: var(--auth-input-ui-label-color, #444444);
  }

  .auth-ui-input {
    border: var(--auth-input-ui-input-border, 1px solid #444444);
    border-radius: var(--auth-input-ui-input-border-radius, 6px);
    position: var(--auth-input-ui-input-position, relative);
    width: var(--auth-input-ui-input-width, 100%);
    min-width: var(--auth-input-ui-input-min-width, 300px);;
    margin-top: var(--auth-input-ui-input-margin-top, 10px);
    font-style: var(--auth-input-ui-input-font-style, normal);
    font-weight: var(--auth-input-ui-input-font-weight, 400);
    font-size: var(--auth-input-ui-input-font-size, 14px);
    line-height: var(--auth-input-ui-input-line-height, 14px);
    padding: var(--auth-input-ui-input-padding, 1rem);
    color: var(--auth-input-ui-input-color, #444444);
  }

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

  .password-toggle-icon {
    /* TODO: Add password toggle icon var styles */
  }
`

@customElement('auth-password-input')
export class AuthPasswordInput extends LitElement {

    @property({type: Boolean}) showPassword = false
    @property({type: String}) userPassword? = ''
    @property({type: Function}) onInput?: Function
    @property({type: Boolean}) isDisabled? = false // !this.currentStep(LoginStep.ProvidePassword)
    @property({type: Object}) passwordSignIn?: any
    @property({type: Object}) globalStyles?: any

    @query('#password') passwordInput!: HTMLInputElement

    static styles = [sharedStyles, componentStyle]

    render() {
        return html`
            <auth-input-wrapper>
                <label ?hidden="${(!!this.passwordSignIn?.hideInputLabel)}"
                       class="auth-ui-label"
                       style="${this.globalStyles?.paragraphStyle ?? ''}"
                       for="password">
                    ${this.passwordSignIn?.inputLabel || 'Password'}
                </label>
                <div class="password-input-container">
                    <input class="auth-ui-input"
                           value="${this.userPassword ?? ''}"
                           ?disabled=${this.isDisabled}
                           @input=${(ev: Event) => {
                               this.onPasswordChange(ev);
                           }}
                           placeholder=${this.inputPlaceholder()}
                           id="password"
                           name="password"
                           type="${this.showPassword ? 'text' : 'password'}"
                           required>

                    ${!this.passwordSignIn?.hidePasswordToggle && !this.showPassword ? html`
                                <button title="Show password"
                                        class="password-toggle-icon"
                                        @click=${() => {
                                            this.togglePasswordVisibility()
                                        }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                         fill="currentColor" class="bi bi-eye"
                                         viewBox="0 0 16 16">
                                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                                    </svg>
                                </button>
                            `
                            : ''}

                    ${!this.passwordSignIn?.hidePasswordToggle && this.showPassword ? html`
                                <button title="Hide password"
                                        class="password-toggle-icon"
                                        @click=${() => {
                                            this.togglePasswordVisibility()
                                        }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                         fill="currentColor"
                                         class="bi bi-eye-slash"
                                         viewBox="0 0 16 16">
                                        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
                                        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
                                        <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
                                    </svg>
                                </button>
                            `
                            : ''}
                </div>
            </auth-input-wrapper>
        `;
    }

    onPasswordChange(ev: Event) {
        if (this.onInput) this.onInput(ev)
    }

    togglePasswordVisibility(): void {
        this.showPassword = !this.showPassword
        if (this.passwordInput) {
            this.passwordInput.type = this.showPassword ? 'text' : 'password'
        }
    }

    inputPlaceholder() {
        if (this.passwordSignIn?.hideInputHint) {
            return ''
        } else {
            return this.passwordSignIn?.inputHint || 'Enter Password'
        }
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'auth-password-input': AuthPasswordInput
    }
}
