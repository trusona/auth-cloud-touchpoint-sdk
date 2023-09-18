import { LitElement, html, property, css } from 'lit-element';
import {customElement, query} from 'lit/decorators.js'
import {sharedStyles} from "../../shared/style";

const componentStyle = css`
  .hideLearnMore {
    display: none;
  }
  ul {
    list-style: disc;
  }
`
@customElement('auth-web-authn-registration')
class AuthWebAuthnRegistration extends LitElement {
  static styles = [sharedStyles, componentStyle]

  @property({ type: Object }) upgradePrompt?: any;
  @property({ type: Object }) globalStyles?: any;
  @property({ type: Object }) platformSpecificIcons?: any;
  @property({ type: Boolean }) started?: boolean;
  @property({ type: Boolean }) learnMoreContentVisible?: boolean;
  @property({ type: Function }) enroll: Function = () => {}
  @query('#biometricIcon') biometricIconElement!: HTMLDivElement;
  @query('#rightArrowIcon') rightArrowIconElement!: HTMLSpanElement;
  @query('#downArrowIcon') downArrowIconElement!: HTMLSpanElement;
  @query('#learnMoreContent') learnMoreContentElement!: HTMLSpanElement;
  @query('#auth-button') authBtn!: HTMLInputElement;

  updated() {
    this.setButtonFocus();
    this.updateIcons();
  }

  setButtonFocus(): void {
    setTimeout(() => {
      this.authBtn.focus();
    }, 1);
  }

  updateIcons() {
    if (this.biometricIconElement) {
      this.biometricIconElement.innerHTML = this.platformSpecificIcons?.biometricIcon ?? 'none';
    }
    if (this.rightArrowIconElement) {
      this.rightArrowIconElement.innerHTML = this.globalStyles?.rightArrowIcon ?? '';
    }
    if (this.downArrowIconElement) {
      this.downArrowIconElement.innerHTML = this.globalStyles?.downArrowIcon ?? '';
    }
    if (this.learnMoreContentElement) {
      this.learnMoreContentElement.innerHTML = this.upgradePrompt?.learnMoreContent ?? '';
    }
  }

  render() {
    return html`
      <flex-container .globalStyles="${this.globalStyles}">
        ${this.upgradePrompt?.hideIcon === false
        ? html`<div></div>`
        : ''}
        ${this.platformSpecificIcons?.biometricIcon !== 'none'
        ? html`<div id="biometricIcon" class="margin-left-right-auto"></div>`
        : ''}
        <heading1 .inlineStyle="${this.globalStyles?.heading1Style}">
          ${this.upgradePrompt?.headline}
        </heading1>
        <text-block .style="${this.globalStyles?.paragraphStyle}">
          ${this.upgradePrompt?.bodyText}
        </text-block>
        <auth-button
          @click="${this.enroll}"
          ?disabled="${this.started}"
          .style="${this.globalStyles?.buttonStyle}"
          .loadingIcon="${this.globalStyles?.spinnerIcon}"
        >
          ${this.upgradePrompt?.buttonText}
        </auth-button>
      </flex-container>
    `;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'auth-web-authn-registration': AuthWebAuthnRegistration
  }
}
