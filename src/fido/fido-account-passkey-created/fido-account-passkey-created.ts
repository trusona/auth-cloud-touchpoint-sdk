import { LitElement, html, css, TemplateResult } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { sharedStyles } from '../../shared/style'

const componentStyle = css`
  .auth-container {
    display: var(--fido-account-passkey-created-container-display, flex);
    row-gap: var(--fido-account-passkey-created-container-row-gap, 1.25rem);
    width: var(--fido-account-passkey-created-container-width, 260px);
    flex-direction: var(--fido-account-passkey-created-container-flex-direction, column);
    justify-content: var(--fido-account-passkey-created-container-justify-content, center);
    align-content: var(--fido-account-passkey-created-container-align-content, center);
    flex-shrink: var(--fido-account-passkey-created-container-flex-shrink, 0);
    align-self: var(--fido-account-passkey-created-container-align-self, stretch);
    margin: var(--fido-account-passkey-created-container-margin, auto);
  }

  .auth-card {
    display: var(--fido-account-passkey-created-card-display, flex);
    padding: var(--fido-account-passkey-created-card-padding, 20px);
    flex-direction: var(--fido-account-passkey-created-card-flex-direction, column);
    align-items: var(--fido-account-passkey-created-card-align-items, center);
    gap: var(--fido-account-passkey-created-card-gap, 20px);
    align-self: var(--fido-account-passkey-created-card-align-self, stretch);
    background: var(--fido-account-passkey-created-card-background, #F5F9FC);
  }

  .auth-img {
    width: var(--fido-account-passkey-created-img-width, 82px);
    height: var(--fido-account-passkey-created-img-height, 82px);
  }

  .auth-link {
    color: var(--fido-account-passkey-created-link-color, #5390D4);
    text-align: var(--fido-account-passkey-created-link-text-align, center);
    font-size: var(--fido-account-passkey-created-link-font-size, 14px);
    font-style: var(--fido-account-passkey-created-link-font-style, normal);
    font-weight: var(--fido-account-passkey-created-link-font-weight, 400);
    line-height: var(--fido-account-passkey-created-link-line-height, normal);
    padding: var(--fido-account-passkey-created-link-padding, 0);
    border: var(--fido-account-passkey-created-link-border, none);
    background: var(--fido-account-passkey-created-link-background, none);
    cursor: var(--fido-account-passkey-created-link-cursor, pointer);
  }

  .auth-h1 {
    color: var(--fido-account-passkey-created-h1-color, #000);
    text-align: var(--fido-account-passkey-created-h1-text-align, center);
    font-size: var(--fido-account-passkey-created-h1-font-size, 24px);
    font-style: var(--fido-account-passkey-created-h1-font-style, normal);
    font-weight: var(--fido-account-passkey-created-h1-font-weight, 400);
    line-height: var(--fido-account-passkey-created-h1-line-height, normal);
  }
`

@customElement('fido-account-passkey-created')
class FidoAccountPasskeyCreated extends LitElement {
  @property({ type: Function }) onClick = (): void => {
  }

  static styles = [sharedStyles, componentStyle]

  render (): TemplateResult {
    return html`
            <div class="auth-container">
                <p class="auth-h1">Security Settings</p>
                <div class="auth-card">
                    <svg class="auth-img" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M48.7144 76.5564C45.6784 77.3313 42.4972 77.7432 39.2197 77.7432C18.0808 77.7432 0.944336 60.6067 0.944336 39.4678C0.944336 18.3289 18.0808 1.19238 39.2197 1.19238C60.3587 1.19238 77.4952 18.3289 77.4952 39.4678C77.4952 42.7452 77.0832 45.9264 76.3083 48.9625" stroke="#19064E" stroke-width="1.78025" stroke-linecap="round"/>
                        <path d="M65.0335 49.2593C62.9294 49.2593 60.846 49.6737 58.902 50.4789C56.9581 51.2841 55.1918 52.4643 53.704 53.9521C52.2162 55.4399 51.036 57.2062 50.2309 59.1501C49.4257 61.094 49.0112 63.1775 49.0112 65.2815C49.0112 67.3856 49.4257 69.4691 50.2309 71.413C51.036 73.3569 52.2162 75.1232 53.704 76.611C55.1918 78.0988 56.9581 79.279 58.902 80.0842C60.846 80.8894 62.9294 81.3038 65.0335 81.3038C67.1376 81.3038 69.221 80.8894 71.1649 80.0842C73.1089 79.279 74.8751 78.0988 76.3629 76.611C77.8507 75.1232 79.0309 73.3569 79.8361 71.413C80.6413 69.4691 81.0558 67.3856 81.0558 65.2815C81.0558 63.1775 80.6413 61.094 79.8361 59.1501C79.0309 57.2062 77.8507 55.4399 76.3629 53.9521C74.8751 52.4643 73.1089 51.2841 71.1649 50.4789C69.221 49.6737 67.1376 49.2593 65.0335 49.2593Z" fill="#A8DBFF"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M73.8063 57.7545C74.116 57.9827 74.1821 58.4188 73.9539 58.7286L64.2012 71.9643C64.0888 72.1169 63.919 72.2171 63.731 72.2418C63.5431 72.2665 63.3532 72.2135 63.2052 72.0951L56.239 66.5221C55.9386 66.2818 55.8899 65.8434 56.1302 65.543C56.3706 65.2425 56.8089 65.1938 57.1094 65.4342L63.5096 70.5543L72.8323 57.9021C73.0605 57.5924 73.4966 57.5263 73.8063 57.7545Z" fill="#19064E"/>
                        <path d="M35.7374 39.2149C39.9123 39.2149 43.2967 35.9917 43.2967 32.0157C43.2967 28.0396 39.9123 24.8164 35.7374 24.8164C31.5626 24.8164 28.1782 28.0396 28.1782 32.0157C28.1782 35.9917 31.5626 39.2149 35.7374 39.2149Z" fill="#19064E"/>
                        <path d="M55.894 39.2122C55.894 36.1245 53.2567 33.6128 50.0147 33.6128C46.7726 33.6128 44.1353 36.1245 44.1353 39.2122C44.1353 41.436 45.5127 43.3558 47.4949 44.2517V52.8108L50.0147 55.2106L54.2142 51.211L51.6945 48.8112L54.2142 46.4115L52.1312 44.4277C54.3318 43.6118 55.894 41.596 55.894 39.2122ZM50.0147 39.2122C49.0907 39.2122 48.3348 38.4923 48.3348 37.6124C48.3348 36.7325 49.0907 36.0125 50.0147 36.0125C50.9386 36.0125 51.6945 36.7325 51.6945 37.6124C51.6945 38.4923 50.9386 39.2122 50.0147 39.2122Z" fill="#19064E"/>
                        <path d="M42.3554 42.4496C41.0955 41.9216 39.7181 41.6177 38.2566 41.6177H33.2171C27.6569 41.6177 23.1382 45.9212 23.1382 51.2167V54.4164H44.9759V45.6013C43.8337 44.7853 42.9433 43.6975 42.3554 42.4656V42.4496Z" fill="#19064E"/>
                    </svg>
                    <p class="auth-h2">Passkey created</p>
                    <button class="auth-link" @click=${() => { this.onClick() }}>View passkey</button>
                </div>
            </div>
        `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fido-account-passkey-created': FidoAccountPasskeyCreated
  }
}
