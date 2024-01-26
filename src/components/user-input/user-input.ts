import {LitElement, html, css} from 'lit';
import {customElement, property } from 'lit/decorators.js'
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
`

@customElement('auth-user-input')
export class UserInput extends LitElement {

    @property({type: String}) userIdentifier? = ''
    @property({type: String}) inputId?: string = 'username'
    @property({type: String}) inputName?: string = 'username'
    @property({type: String}) inputType?: string = 'username'
    @property({type: String}) inputAutocomplete?: string = 'username webauthn'
    @property({type: Function}) onInput?: Function
    @property({type: Boolean}) isEmailInput?: boolean = false
    @property({type: Boolean}) isPhoneNumberInput?: boolean = false

    @property({type: Boolean}) inputAutofocus?: boolean = false
    @property({type: Boolean}) inputRequired?: boolean = false
    @property({type: Boolean}) inputDisabled?: boolean = false
    @property({type: Object}) signInWithBiometricPrompt?: any
    @property({type: Object}) globalStyles?: any

    static styles = [sharedStyles, componentStyle]

    onInputChange(ev: Event) {
        if (this.onInput) this.onInput(ev)
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

    render() {
        return html`
            <auth-input-wrapper>
                    ${this.renderLabel()}

                    <input class="auth-ui-input"
                           value="${this.userIdentifier ?? ''}"
                           @input=${(e: any) => this.onInputChange(e)}
                           placeholder="${this.inputPlaceholder()}"
                           id="${this.inputId}"
                           name="${this.inputName}"
                           type="${this.inputType}"
                           autocomplete="${this.inputAutocomplete}"
                           ?autofocus=${this.inputAutofocus}
                           ?required=${this.inputRequired}
                    >
            </auth-input-wrapper>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'auth-user-input': UserInput
    }
}
