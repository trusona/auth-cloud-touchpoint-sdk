import { LitElement, html, css, TemplateResult } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { sharedStyles } from '../../shared/style'

const componentStyle = css`
  .auth-container {
    width: var(--fido-check-email-container-width, 320px);
    min-height: var(--fido-check-email-container-min-height, 420px);
    margin: var(--fido-check-email-container-margin, auto);
    border-radius: var(--fido-check-email-container-border-radius, 6px);
    border: var(--fido-check-email-container-border, 1px solid #000);
    background: var(--fido-check-email-container-background, #FFF);
    box-shadow: var(--fido-check-email-container-box-shadow, 0 0 20px 0 rgba(0, 0, 0, 0.15));
  }

  .auth-card {
    display: var(--fido-check-email-card-display, flex);
    flex-direction: var(--fido-check-email-card-flex-direction, column);
    justify-content: var(--fido-check-email-card-justify-content, center);
    align-items: var(--fido-check-email-card-align-items, center);
    flex-shrink: var(--fido-check-email-card-flex-shrink, 0);
    align-self: var(--fido-check-email-card-align-self, stretch);
    gap: var(--fido-check-email-card-gap, 20px);
    padding: var(--fido-check-email-card-padding, 60px 30px);
  }

  .auth-img {
    width: var(--fido-check-email-img-width, 80px);
    height: var(--fido-check-email-img-height, 80px);
  }

  .auth-img-email {
    width: var(--fido-check-email-img-email-width, 15px);
    height: var(--fido-check-email-img-email-height, 15px);
  }

  .auth-close-img {
    width: var(--fido-check-email-close-img-width, 24px);
    height: var(--fido-check-email-close-img-height, 24px);
    position: var(--fido-check-email-close-img-position, absolute);
    right: var(--fido-check-email-close-img-right, 10px);
    top: var(--fido-check-email-close-img-top, 10px);
  }

  .auth-h1 {
    color: var(--fido-check-email-h1-color, #000);
    text-align: var(--fido-check-email-h1-text-align, center);
    font-size: var(--fido-check-email-h1-font-size, 24px);
    font-style: var(--fido-check-email-h1-font-style, normal);
    font-weight: var(--fido-check-email-h1-font-weight, 400);
    line-height: var(--fido-check-email-h1-line-height, normal);
  }

  .auth-email-card {
    display: var(--fido-check-email-email-card-display, flex);
    width: var(--fido-check-email-email-card-width, 280px);
    flex-direction: var(--fido-check-email-email-card-flex-direction, column);
    align-items: var(--fido-check-email-email-card-align-items, center);
    border-radius: var(--fido-check-email-email-card-border-radius, 10px);
    border: var(--fido-check-email-email-card-border, 1px solid #EEE);
    background: var(--fido-check-email-email-card-background, #FFF);
  }

  .auth-email-card div {
    display: var(--fido-check-email-email-card-div-display, flex);
    padding: var(--fido-check-email-email-card-div-padding, 10px 20px);
    justify-content: var(--fido-check-email-email-card-div-justify-content, center);
    align-items: var(--fido-check-email-email-card-div-align-items, center);
    gap: var(--fido-check-email-email-card-div-gap, 10px);
    align-self: var(--fido-check-email-email-card-div-align-self, stretch);
    border-radius: var(--fido-check-email-email-card-div-border-radius, 10px);
    border: var(--fido-check-email-email-card-div-border, 2px solid #FFF);
    background: var(--fido-check-email-email-card-div-background, #FAFAFA);
  }

  .auth-email-card p {
    display: var(--fido-check-email-email-card-p-display, -webkit-box);
    transform: var(--fido-check-email-email-card-p-transform, rotate(-0.324deg));
    -webkit-box-orient: var(--fido-check-email-email-card-p-box-orient, vertical);
    -webkit-line-clamp: var(--fido-check-email-email-card-p-line-clamp, 1);
    flex: var(--fido-check-email-email-card-p-flex, 1 0 0);
    overflow: var(--fido-check-email-email-card-p-overflow, hidden);
    color: var(--fido-check-email-email-card-p-color, #444);
    text-align: var(--fido-check-email-email-card-p-text-align, center);
    text-overflow: var(--fido-check-email-email-card-p-text-overflow, ellipsis);
    font-size: var(--fido-check-email-email-card-p-font-size, 11px);
    font-style: var(--fido-check-email-email-card-p-font-style, normal);
    font-weight: var(--fido-check-email-email-card-p-font-weight, 400);
    line-height: var(--fido-check-email-email-card-p-line-height, 14px);
  }

  .auth-body {
    color: var(--fido-check-email-body-color, #000);
    text-align: var(--fido-check-email-body-text-align, center);
    font-size: var(--fido-check-email-body-font-size, 14px);
    font-style: var(--fido-check-email-body-font-style, normal);
    font-weight: var(--fido-check-email-body-font-weight, 400);
    line-height: var(--fido-check-email-body-line-height, normal);
  }
`

@customElement('fido-check-email')
class FidoCheckEmail extends LitElement {
  @property({ type: String }) email: string = ''
  @property({ type: Function }) onClick = (): void => {
  }

  @property({ type: Function }) onCancel = (): void => {
  }

  static styles = [sharedStyles, componentStyle]

  render (): TemplateResult {
    return html`
            <div class="auth-container">
                <div style="position: relative;">
                    <svg class="auth-close-img" @click=${() => { this.onCancel() }} viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 19.5L19.5 4.5" stroke="#444444" stroke-width="1.5" stroke-linecap="round"
                              stroke-linejoin="round"/>
                        <path d="M4.5 4.5L19.5 19.5" stroke="#444444" stroke-width="1.5" stroke-linecap="round"
                              stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="auth-card">
                    <p class="auth-h1">Welcome!</p>
                    <svg class="auth-img" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M69.234 13.1799H10.7725C7.37382 13.1799 4.61865 16.1647 4.61865 19.8466V59.8466C4.61865 63.5285 7.37382 66.5133 10.7725 66.5133H69.234C72.6327 66.5133 75.3879 63.5285 75.3879 59.8466V19.8466C75.3879 16.1647 72.6327 13.1799 69.234 13.1799Z"
                              stroke="#19064E" stroke-width="3.03151" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M73.5709 15.1201L39.9986 44.8468L6.42627 15.1201" stroke="#19064E"
                              stroke-width="3.03151" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p class="auth-body">To confirm your new account, click the link we sent to:</p>
                    <button class="auth-email-card" @click=${() => { this.onClick() }} >
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
                    </button>
                </div>
            </div>
        `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fido-check-email': FidoCheckEmail
  }
}
