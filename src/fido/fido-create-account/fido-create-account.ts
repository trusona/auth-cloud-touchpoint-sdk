import { LitElement, html, css, TemplateResult } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { sharedStyles } from '../../shared/style'

const componentStyle = css`
  .auth-container {
    width: var(--fido-create-account-width, 320px);
    min-height: var(--fido-create-account-min-height, 420px);
    margin: var(--fido-create-account-margin, auto);
    border-radius: var(--fido-create-account-border-radius, 6px);
    border: var(--fido-create-account-border, 1px solid #000);
    background: var(--fido-create-account-background, #FFF);
    box-shadow: var(--fido-create-account-box-shadow, 0 0 20px 0 rgba(0, 0, 0, 0.15));
  }

  .auth-card {
    display: var(--fido-create-account-display, flex);
    flex-direction: var(--fido-create-account-flex-direction, column);
    justify-content: var(--fido-create-account-justify-content, center);
    align-items: var(--fido-create-account-align-items, center);
    flex-shrink: var(--fido-create-account-flex-shrink, 0);
    align-self: var(--fido-create-account-align-self, stretch);
    gap: var(--fido-create-account-gap, 20px);
    padding: var(--fido-create-account-padding, 60px 30px);
  }

  .auth-img-email {
    width: var(--fido-create-account-img-width, 15px);
    height: var(--fido-create-account-img-height, 15px);
  }

  .auth-back-btn {
    position: var(--fido-create-account-position, absolute);
    left: var(--fido-create-account-left, 10px);
    top: var(--fido-create-account-top, 10px);
    border: var(--fido-create-account-border, none);
    background-color: var(--fido-create-account-bg-transparent, transparent);
    color: var(--fido-create-account-color, #5390D4);
    font-size: var(--fido-create-account-font-size, 14px);
    font-style: var(--fido-create-account-font-style, normal);
    font-weight: var(--fido-create-account-font-weight, 400);
    line-height: var(--fido-create-account-line-height, normal);
    cursor: var(--fido-create-account-cursor, pointer);
    text-align: var(--fido-create-account-text-align, left);
  }

  .auth-h1 {
    color: var(--fido-create-account-h1-color, #000);
    text-align: var(--fido-create-account-h1-text-align, center);
    font-size: var(--fido-create-account-h1-font-size, 24px);
    font-weight: var(--fido-create-account-h1-font-weight, 400);
  }

  .auth-h2 {
    color: var(--fido-create-account-h2-color, #444);
    text-align: var(--fido-create-account-h2-text-align, center);
    font-size: var(--fido-create-account-h2-font-size, 14px);
    font-weight: var(--fido-create-account-h2-font-weight, 400);
  }

  .auth-email-card {
    display: var(--fido-create-account-email-card-display, flex);
    width: var(--fido-create-account-email-card-width, 280px);
    flex-direction: var(--fido-create-account-email-card-flex-direction, column);
    align-items: var(--fido-create-account-email-card-align-items, center);
    border-radius: var(--fido-create-account-email-card-border-radius, 10px);
    border: var(--fido-create-account-email-card-border, 1px solid #EEE);
    background: var(--fido-create-account-email-card-background, #FFF);
  }

  .auth-email-card div {
    display: var(--fido-create-account-email-card-div-display, flex);
    padding: var(--fido-create-account-email-card-div-padding, 10px 20px);
    justify-content: var(--fido-create-account-email-card-div-justify-content, center);
    align-items: var(--fido-create-account-email-card-div-align-items, center);
    gap: var(--fido-create-account-email-card-div-gap, 10px);
    align-self: var(--fido-create-account-email-card-div-align-self, stretch);
    border-radius: var(--fido-create-account-email-card-div-border-radius, 10px);
    border: var(--fido-create-account-email-card-div-border, 2px solid #FFF);
    background: var(--fido-create-account-email-card-div-background, #FAFAFA);
  }

  .auth-email-card p {
    display: var(--fido-create-account-email-card-p-display, -webkit-box);
    transform: var(--fido-create-account-email-card-p-transform, rotate(-0.324deg));
    -webkit-box-orient: var(--fido-create-account-email-card-p-webkit-box-orient, vertical);
    -webkit-line-clamp: var(--fido-create-account-email-card-p-webkit-line-clamp, 1);
    flex: var(--fido-create-account-email-card-p-flex, 1 0 0);
    overflow: var(--fido-create-account-email-card-p-overflow, hidden);
    color: var(--fido-create-account-email-card-p-color, #444);
    text-align: var(--fido-create-account-email-card-p-text-align, center);
    text-overflow: var(--fido-create-account-email-card-p-text-overflow, ellipsis);
    font-size: var(--fido-create-account-email-card-p-font-size, 11px);
    font-weight: var(--fido-create-account-email-card-p-font-weight, 400);
    line-height: var(--fido-create-account-email-card-p-line-height, 14px);
  }

  .terms {
    color: var(--fido-create-account-terms-color, #888);
    text-align: var(--fido-create-account-terms-text-align, center);
    font-size: var(--fido-create-account-terms-font-size, 11px);
    font-weight: var(--fido-create-account-terms-font-weight, 400);
    line-height: var(--fido-create-account-terms-line-height, 14px);
  }

  .terms a {
    text-decoration: var(--fido-create-account-terms-a-text-decoration, underline);
  }
`

@customElement('fido-create-account')
class FidoCreateAccount extends LitElement {
  @property({ type: String }) email: string = ''
  @property({ type: String }) termsHref?: string
  @property({ type: String }) privacyHref?: string
  @property({ type: Function }) onClick = (): void => {}

  @property({ type: Function }) onBack = (): void => {}

  static styles = [sharedStyles, componentStyle]

  render (): TemplateResult {
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
                    <auth-button .onClick=${() => { this.onClick() }}>Create account</auth-button>
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
