import { LitElement, html, css, TemplateResult } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { sharedStyles } from '../../shared/style'

const componentStyle = css`
  .auth-container {
    display: var(--fido-create-passkey-display, flex);
    row-gap: var(--fido-create-passkey-row-gap, 1.25rem);
    width: var(--fido-create-passkey-width, 260px);
    flex-direction: var(--fido-create-passkey-flex-direction, column);
    justify-content: var(--fido-create-passkey-justify-content, center);
    align-content: var(--fido-create-passkey-align-content, center);
    flex-shrink: var(--fido-create-passkey-flex-shrink, 0);
    align-self: var(--fido-create-passkey-align-self, stretch);
    margin: var(--fido-create-passkey-margin, auto);
  }

  .auth-card {
    display: var(--fido-create-passkey-card-display, flex);
    padding: var(--fido-create-passkey-card-padding, 20px);
    flex-direction: var(--fido-create-passkey-card-flex-direction, column);
    align-items: var(--fido-create-passkey-card-align-items, center);
    gap: var(--fido-create-passkey-card-gap, 20px);
    align-self: var(--fido-create-passkey-card-align-self, stretch);
    background: var(--fido-create-passkey-card-background, #F5F9FC);
  }

  .auth-img {
    width: var(--fido-create-passkey-img-width, 110px);
    height: var(--fido-create-passkey-img-height, 96px);
  }

  .auth-paragraph {
    display: var(--fido-create-passkey-paragraph-display, flex);
    flex-direction: var(--fido-create-passkey-paragraph-flex-direction, column);
    gap: var(--fido-create-passkey-paragraph-gap, 8px);
    flex-wrap: var(--fido-create-passkey-paragraph-flex-wrap, wrap);
    align-self: var(--fido-create-passkey-paragraph-align-self, stretch);
  }

  .auth-h1 {
    color: var(--fido-create-passkey-h1-color, #000);
    text-align: var(--fido-create-passkey-h1-text-align, center);
    font-size: var(--fido-create-passkey-h1-font-size, 24px);
    font-style: var(--fido-create-passkey-h1-font-style, normal);
    font-weight: var(--fido-create-passkey-h1-font-weight, 400);
    line-height: var(--fido-create-passkey-h1-line-height, normal);
  }

  .auth-h2 {
    align-self: var(--fido-create-passkey-h2-align-self, stretch);
    color: var(--fido-create-passkey-h2-color, #000);
    text-align: var(--fido-create-passkey-h2-text-align, center);
    font-size: var(--fido-create-passkey-h2-font-size, 22px);
    font-style: var(--fido-create-passkey-h2-font-style, normal);
    font-weight: var(--fido-create-passkey-h2-font-weight, 400);
    line-height: var(--fido-create-passkey-h2-line-height, normal);
  }

  .auth-h3 {
    align-self: var(--fido-create-passkey-h3-align-self, stretch);
    color: var(--fido-create-passkey-h3-color, #000);
    font-size: var(--fido-create-passkey-h3-font-size, 14px);
    font-style: var(--fido-create-passkey-h3-font-style, normal);
    font-weight: var(--fido-create-passkey-h3-font-weight, 400);
    line-height: var(--fido-create-passkey-h3-line-height, normal);
  }

  ul {
    display: var(--fido-create-passkey-ul-display, block);
    list-style-type: var(--fido-create-passkey-ul-list-style-type, disc);
    -webkit-margin-before: var(--fido-create-passkey-ul-margin-before, 1em);
    -webkit-margin-after: var(--fido-create-passkey-ul-margin-after, 1em);
    -webkit-margin-start: var(--fido-create-passkey-ul-margin-start, 0);
    -webkit-margin-end: var(--fido-create-passkey-ul-margin-end, 0);
    -webkit-padding-start: var(--fido-create-passkey-ul-padding-start, 20px);
  }

`

@customElement('fido-create-passkey')
class FidoCreatePasskey extends LitElement {
  @property({ type: Function }) onClick = (): void => {
  }

  static styles = [sharedStyles, componentStyle]

  render (): TemplateResult {
    return html`
            <div class="auth-container">
                <p class="auth-h1">Security Settings</p>
                <div class="auth-card">
                    <svg class="auth-img" viewBox="0 0 111 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_5480_50179)">
                            <ellipse cx="55.5" cy="48.3943" rx="48" ry="48.0003" fill="#A8DBFF"/>
                            <path d="M98.7144 75.2305H101.729" stroke="#19064E" stroke-width="1.30617"
                                  stroke-linecap="round" stroke-linejoin="round"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M82.1357 67.9397C82.1357 67.8045 82.2454 67.6948 82.3806 67.6948H104.498C104.633 67.6948 104.743 67.8045 104.743 67.9397V78C104.743 78.1353 104.633 78.2449 104.498 78.2449H82.3806C82.2454 78.2449 82.1357 78.1353 82.1357 78V67.9397Z"
                                  stroke="#19064E" stroke-width="1.30617" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                            <path d="M88.9178 71.4629L85.1499 75.2308" stroke="#19064E" stroke-width="1.30617"
                                  stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M88.9178 75.2308L85.1499 71.4629" stroke="#19064E" stroke-width="1.30617"
                                  stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M95.7 71.4629L91.9321 75.2308" stroke="#19064E" stroke-width="1.30617"
                                  stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M95.7 75.2308L91.9321 71.4629" stroke="#19064E" stroke-width="1.30617"
                                  stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M87.3836 32.0091C87.3059 31.9703 87.2671 31.9072 87.2671 31.8198C87.2671 31.7324 87.2865 31.6499 87.3253 31.5722C88.5294 29.9021 90.0538 28.6107 91.8987 27.6979C93.7436 26.7852 95.7147 26.3288 97.8121 26.3288C99.9094 26.3288 101.885 26.7755 103.74 27.6688C105.595 28.5621 107.134 29.8438 108.357 31.5139C108.415 31.611 108.44 31.6887 108.43 31.747C108.42 31.8052 108.386 31.8635 108.328 31.9217C108.27 31.98 108.197 32.0091 108.109 32.0091C108.022 32.0091 107.94 31.9606 107.862 31.8635C106.716 30.2711 105.255 29.0476 103.478 28.1931C101.701 27.3387 99.8123 26.9114 97.8121 26.9114C95.8118 26.9114 93.9378 27.3435 92.19 28.2077C90.4422 29.0719 88.9857 30.2905 87.8206 31.8635C87.7429 31.9606 87.6701 32.0188 87.6021 32.0383C87.5341 32.0577 87.4613 32.048 87.3836 32.0091ZM101.279 46.6614C99.2783 46.1565 97.6324 45.1564 96.341 43.6611C95.0496 42.1657 94.4039 40.35 94.4039 38.2138C94.4039 37.3011 94.7389 36.534 95.4089 35.9125C96.0789 35.2911 96.8799 34.9804 97.8121 34.9804C98.7442 34.9804 99.5453 35.2911 100.215 35.9125C100.885 36.534 101.22 37.3011 101.22 38.2138C101.22 38.9517 101.507 39.5732 102.08 40.0781C102.652 40.583 103.318 40.8355 104.075 40.8355C104.813 40.8355 105.459 40.583 106.012 40.0781C106.566 39.5732 106.842 38.9517 106.842 38.2138C106.842 35.8251 105.954 33.8249 104.177 32.213C102.4 30.6012 100.278 29.7953 97.8121 29.7953C95.3458 29.7953 93.2241 30.6012 91.4472 32.213C89.6703 33.8249 88.7818 35.8251 88.7818 38.2138C88.7818 38.6799 88.8352 39.2867 88.9421 40.0344C89.0489 40.7821 89.277 41.6317 89.6266 42.5833C89.6654 42.6804 89.6654 42.7532 89.6266 42.8017C89.5878 42.8503 89.5392 42.894 89.481 42.9328C89.4033 42.9717 89.3207 42.9814 89.2334 42.9619C89.146 42.9425 89.0828 42.8843 89.044 42.7872C88.7915 42.0492 88.5925 41.2967 88.4468 40.5296C88.3012 39.7625 88.2284 38.9906 88.2284 38.2138C88.2284 35.7086 89.1799 33.5676 91.0831 31.7907C92.9862 30.0137 95.2292 29.1253 97.8121 29.1253C100.453 29.1253 102.72 29.9992 104.614 31.747C106.507 33.4948 107.454 35.6504 107.454 38.2138C107.454 39.1071 107.124 39.8645 106.464 40.4859C105.803 41.1073 105.007 41.4181 104.075 41.4181C103.123 41.4181 102.308 41.1073 101.628 40.4859C100.948 39.8645 100.609 39.1071 100.609 38.2138C100.609 37.4564 100.332 36.8253 99.7783 36.3204C99.2249 35.8154 98.5694 35.563 97.8121 35.563C97.0547 35.563 96.3944 35.8154 95.8312 36.3204C95.2681 36.8253 94.9865 37.4564 94.9865 38.2138C94.9865 40.2335 95.5982 41.9181 96.8217 43.2678C98.0451 44.6175 99.5696 45.5642 101.395 46.108C101.512 46.1468 101.584 46.1954 101.614 46.2536C101.643 46.3119 101.647 46.3798 101.628 46.4575C101.609 46.5546 101.57 46.6226 101.512 46.6614C101.453 46.7003 101.376 46.7003 101.279 46.6614ZM90.9957 25.688C90.8986 25.7268 90.8258 25.7317 90.7772 25.7025C90.7287 25.6734 90.685 25.6297 90.6461 25.5715C90.6073 25.5326 90.5879 25.4744 90.5879 25.3967C90.5879 25.319 90.617 25.2607 90.6753 25.2219C91.7822 24.6199 92.9425 24.1635 94.1563 23.8528C95.37 23.5421 96.5886 23.3867 97.8121 23.3867C99.0744 23.3867 100.312 23.5421 101.526 23.8528C102.74 24.1635 103.9 24.6005 105.007 25.1636C105.104 25.2025 105.158 25.2607 105.167 25.3384C105.177 25.4161 105.162 25.4841 105.124 25.5423C105.085 25.6006 105.031 25.6491 104.963 25.688C104.895 25.7268 104.813 25.7268 104.716 25.688C103.648 25.1636 102.531 24.751 101.366 24.45C100.201 24.1489 99.0161 23.9984 97.8121 23.9984C96.608 23.9984 95.4331 24.1392 94.2874 24.4208C93.1416 24.7024 92.0444 25.1248 90.9957 25.688ZM94.8991 46.341C93.7727 45.1758 92.894 43.9524 92.2628 42.6706C91.6317 41.3889 91.3161 39.9033 91.3161 38.2138C91.3161 36.4854 91.9521 35.0289 93.2241 33.8443C94.4961 32.6597 96.0254 32.0674 97.8121 32.0674C99.5987 32.0674 101.138 32.6597 102.429 33.8443C103.721 35.0289 104.366 36.4854 104.366 38.2138C104.366 38.3109 104.342 38.3837 104.293 38.4323C104.245 38.4808 104.172 38.5051 104.075 38.5051C103.978 38.5051 103.9 38.4808 103.842 38.4323C103.784 38.3837 103.755 38.3109 103.755 38.2138C103.755 36.6408 103.167 35.3202 101.992 34.2521C100.817 33.184 99.4239 32.65 97.8121 32.65C96.2002 32.65 94.8166 33.184 93.6611 34.2521C92.5056 35.3202 91.9279 36.6408 91.9279 38.2138C91.9279 39.8645 92.2143 41.2724 92.7872 42.4376C93.3601 43.6028 94.2097 44.768 95.336 45.9332C95.4137 46.0109 95.4477 46.0837 95.438 46.1517C95.4283 46.2196 95.3943 46.2827 95.336 46.341C95.2972 46.3798 95.2341 46.4138 95.1467 46.443C95.0593 46.4721 94.9768 46.4381 94.8991 46.341ZM103.813 44.2145C102.104 44.2145 100.623 43.6465 99.3705 42.5104C98.1179 41.3744 97.4916 39.9422 97.4916 38.2138C97.4916 38.1167 97.5159 38.039 97.5645 37.9807C97.613 37.9225 97.6858 37.8934 97.7829 37.8934C97.88 37.8934 97.9529 37.9225 98.0014 37.9807C98.05 38.039 98.0742 38.1167 98.0742 38.2138C98.0742 39.7868 98.652 41.0831 99.8075 42.1026C100.963 43.1222 102.298 43.6319 103.813 43.6319C103.968 43.6319 104.153 43.6222 104.366 43.6028C104.58 43.5834 104.813 43.5542 105.065 43.5154C105.162 43.496 105.24 43.5106 105.298 43.5591C105.357 43.6077 105.396 43.6611 105.415 43.7193C105.434 43.797 105.43 43.865 105.4 43.9232C105.371 43.9815 105.308 44.0203 105.211 44.0397C104.861 44.1368 104.556 44.1903 104.293 44.2C104.031 44.2097 103.871 44.2145 103.813 44.2145Z"
                                  stroke="#19064E" stroke-width="0.710023"/>
                            <g clip-path="url(#clip1_5480_50179)">
                                <path d="M24.2081 46.1357V48.934C24.2081 49.3051 24.0607 49.6609 23.7983 49.9233C23.5359 50.1857 23.1801 50.3331 22.809 50.3331H20.0107"
                                      stroke="#19064E" stroke-width="1.36709" stroke-linecap="round"
                                      stroke-linejoin="round"/>
                                <path d="M20.0107 29.3462H22.809C23.1801 29.3462 23.5359 29.4936 23.7983 29.756C24.0607 30.0184 24.2081 30.3742 24.2081 30.7453V33.5436"
                                      stroke="#19064E" stroke-width="1.36709" stroke-linecap="round"
                                      stroke-linejoin="round"/>
                                <path d="M3.22168 33.5436V30.7453C3.22168 30.3742 3.36909 30.0184 3.63148 29.756C3.89386 29.4936 4.24974 29.3462 4.62081 29.3462H7.41907"
                                      stroke="#19064E" stroke-width="1.36709" stroke-linecap="round"
                                      stroke-linejoin="round"/>
                                <path d="M7.41907 50.3331H4.62081C4.24974 50.3331 3.89386 50.1857 3.63148 49.9233C3.36909 49.6609 3.22168 49.3051 3.22168 48.934V46.1357"
                                      stroke="#19064E" stroke-width="1.36709" stroke-linecap="round"
                                      stroke-linejoin="round"/>
                                <path d="M13.7148 40.8891C15.8398 40.8891 17.5624 39.1664 17.5624 37.0415C17.5624 34.9165 15.8398 33.1938 13.7148 33.1938C11.5898 33.1938 9.86719 34.9165 9.86719 37.0415C9.86719 39.1664 11.5898 40.8891 13.7148 40.8891Z"
                                      stroke="#19064E" stroke-width="1.36709" stroke-linecap="round"
                                      stroke-linejoin="round"/>
                                <path d="M19.6513 46.4864C19.2173 45.2586 18.4133 44.1956 17.35 43.4437C16.2868 42.6918 15.0166 42.2881 13.7143 42.2881C12.4121 42.2881 11.1419 42.6918 10.0786 43.4437C9.01537 44.1956 8.21137 45.2586 7.77734 46.4864"
                                      stroke="#19064E" stroke-width="1.36709" stroke-linecap="round"
                                      stroke-linejoin="round"/>
                            </g>
                            <path d="M53.5081 48.0316C56.261 48.0316 58.4927 45.9062 58.4927 43.2844C58.4927 40.6625 56.261 38.5371 53.5081 38.5371C50.7551 38.5371 48.5234 40.6625 48.5234 43.2844C48.5234 45.9062 50.7551 48.0316 53.5081 48.0316Z"
                                  fill="#19064E"/>
                            <path d="M66.7997 48.0297C66.7997 45.9937 65.0607 44.3374 62.9228 44.3374C60.785 44.3374 59.0459 45.9937 59.0459 48.0297C59.0459 49.4961 59.9542 50.762 61.2613 51.3528V56.9967L62.9228 58.5792L65.6921 55.9418L64.0305 54.3594L65.6921 52.777L64.3185 51.4688C65.7696 50.9308 66.7997 49.6016 66.7997 48.0297ZM62.9228 48.0297C62.3136 48.0297 61.8151 47.555 61.8151 46.9748C61.8151 46.3945 62.3136 45.9198 62.9228 45.9198C63.5321 45.9198 64.0305 46.3945 64.0305 46.9748C64.0305 47.555 63.5321 48.0297 62.9228 48.0297Z"
                                  fill="#19064E"/>
                            <path d="M57.8722 50.1643C57.0414 49.8162 56.1331 49.6157 55.1694 49.6157H51.8463C48.1799 49.6157 45.2002 52.4535 45.2002 55.9454V58.0553H59.6002V52.2425C58.847 51.7045 58.2599 50.9872 57.8722 50.1748V50.1643Z"
                                  fill="#19064E"/>
                            <path d="M74.1739 67.9248H38" stroke="black" stroke-width="1.43" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                            <path d="M68.6087 18.394H43.5652C40.4916 18.394 38 20.8857 38 23.9593V76.8288C38 79.9024 40.4916 82.394 43.5652 82.394H68.6087C71.6823 82.394 74.1739 79.9024 74.1739 76.8288V23.9593C74.1739 20.8857 71.6823 18.394 68.6087 18.394Z"
                                  stroke="black" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M56.0862 72.7676C55.5922 72.7676 55.1093 72.9141 54.6985 73.1885C54.2877 73.463 53.9676 73.8531 53.7785 74.3095C53.5895 74.766 53.54 75.2682 53.6364 75.7527C53.7328 76.2373 53.9706 76.6823 54.32 77.0317C54.6693 77.381 55.1144 77.6189 55.5989 77.7153C56.0834 77.8116 56.5857 77.7622 57.0421 77.5731C57.4985 77.3841 57.8886 77.0639 58.1631 76.6532C58.4376 76.2424 58.5841 75.7594 58.5841 75.2654C58.5841 74.603 58.3209 73.9676 57.8525 73.4992C57.384 73.0307 56.7487 72.7676 56.0862 72.7676Z"
                                  fill="#19064E"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_5480_50179">
                                <rect width="110.4" height="96.0005" fill="white"
                                      transform="translate(0.299805 0.394043)"/>
                            </clipPath>
                            <clipPath id="clip1_5480_50179">
                                <rect width="22.3861" height="22.3861" fill="white"
                                      transform="translate(2.52148 28.646)"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <p class="auth-h2">With passkeys, you don’t need to remember complex passwords.</p>
                    <div class="auth-h3">
                        <ul class="auth-paragraph">
                            <li>
                                <b>What are passkeys?</b>
                                <p>Passkeys are encrypted digital keys you create using your fingerprint, face, or
                                    screen lock.</p>
                            </li>
                            <li>
                                <b>Where are passkeys saved?</b>
                                <p>Passkeys are saved to your password manager, so you can sign in on other devices.</p>
                            </li>
                        </ul>
                    </div>
                    <auth-button .onClick=${() => { this.onClick() }}>Create passkey</auth-button>
                </div>
            </div>
        `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fido-create-passkey': FidoCreatePasskey
  }
}
