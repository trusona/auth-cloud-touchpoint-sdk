import {LitElement, html, css, TemplateResult} from 'lit'
import {customElement, property} from 'lit/decorators.js'
import {sharedStyles} from '../../shared/style'

const componentStyle = css`

  .auth-container {
    width: 320px;
    min-height: 420px;
    margin: auto;
    border-radius: 6px;
    border: 1px solid #000;
    background: var(--white, #FFF);
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
  }

  .auth-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    align-self: stretch;
    gap: 20px;
    padding: 60px 30px;
  }

  .auth-img-email {
    width: 15px;
    height: 15px;
  }

  .auth-back-btn {
    position: absolute;
    left: 10px;
    top: 10px;
    border: none;
    background-color: transparent;
    color: #5390D4;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
    text-align: left;
  }

  .auth-button {
    border-radius: 4px;
    display: flex;
    padding: 16px;
    justify-content: center;
    align-items: center;
    gap: 16px;
    align-self: stretch;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    background-color: var(--trusona-button-bg-color, #19064E);
    border: 1px solid var(--trusona-button-border-color, #19064E);
    color: var(--trusona-button-color, rgb(255, 255, 255));
    cursor: pointer;
  }

  .auth-button:disabled {
    background-color: var(--trusona-button-disabled-bg-color, #cccccc) !important;
    border: 1px solid var(--trusona-button-disabled-bg-color, #cccccc) !important;
    color: var(--trusona-button-disabled-color, #444444) !important;
  }

  .auth-h1 {
    color: #000;
    text-align: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .auth-h2 {
    color: var(--ferrite, #444);
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .auth-email-card {
    display: flex;
    width: 280px;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    border: 1px solid var(--pearl, #EEE);
    background: var(--white, #FFF);
  }

  .auth-email-card div {
    display: flex;
    padding: 10px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    align-self: stretch;
    border-radius: 10px;
    border: 2px solid var(--white, #FFF);
    background: var(--tilt, #FAFAFA);
  }
  
  .auth-email-card p {
    display: -webkit-box;
    transform: rotate(-0.324deg);
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    flex: 1 0 0;
    overflow: hidden;
    color: #444;
    text-align: center;
    text-overflow: ellipsis;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px; 
  }

  .auth-button {
    border-radius: 4px;
    display: flex;
    padding: 16px;
    justify-content: center;
    align-items: center;
    gap: 16px;
    align-self: stretch;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    background-color: var(--trusona-button-bg-color, #19064E);
    border: 1px solid var(--trusona-button-border-color, #19064E);
    color: var(--trusona-button-color, rgb(255, 255, 255));
    cursor: pointer;
  }

  .auth-button:disabled {
    background-color: var(--trusona-button-disabled-bg-color, #cccccc) !important;
    border: 1px solid var(--trusona-button-disabled-bg-color, #cccccc) !important;
    color: var(--trusona-button-disabled-color, #444444) !important;
  }
  
  .terms {
    color: #888;
    text-align: center;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
  }
  
  .terms a {
    text-decoration: underline;
  }

`

@customElement('fido-create-account')
class FidoCreateAccount extends LitElement {

    @property({type: String}) email: string = ""
    @property({type: String}) termsHref?: string
    @property({type: String}) privacyHref?: string
    @property({type: Function}) onClick = (): void => {}

    @property({type: Function}) onBack = (): void => {}


    static styles = [sharedStyles, componentStyle]

    render(): TemplateResult {
        return html`
            <div class="auth-container">
                <div style="position: relative;">
                   <button class="auth-back-btn" @click=${() => { this.onBack() }}>&lt;&nbsp;Back</button>
                </div>
                <div class="auth-card">
                    <p class="auth-h1">Create Account</p>
                    <p class="auth-h2">Create your account using:</p>
                    <div class="auth-email-card">
                        <div>
                            <svg class="auth-img-email" viewBox="0 0 15 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.9806 2.5791H2.01908C1.38183 2.5791 0.865234 3.13875 0.865234 3.8291V11.3291C0.865234 12.0195 1.38183 12.5791 2.01908 12.5791H12.9806C13.6179 12.5791 14.1345 12.0195 14.1345 11.3291V3.8291C14.1345 3.13875 13.6179 2.5791 12.9806 2.5791Z"
                                      stroke="#444444" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M13.7947 2.94287L7.49989 8.51662L1.20508 2.94287" stroke="#444444"
                                      stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p>${this.email}</p>
                        </div>
                    </div>
                    <button class="auth-button" @click=${() => { this.onClick() }}>Create account</button>
                    <p class="terms">By Creating an Account up you accept our <a href="${this.termsHref ?? '#'}">terms of use</a> and <a href="${this.privacyHref ?? '#'}">privacy policy.</a></p>
                </div>
            </div>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'fido-create-account': FidoCreateAccount
    }
}
