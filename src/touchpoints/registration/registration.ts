import { LitElement, html, css } from 'lit'
import { customElement, property, query } from 'lit/decorators.js'
import { ref, createRef } from 'lit/directives/ref.js'
import { sharedStyles } from '../../shared/style'

const componentStyle = css`
  .hideLearnMore {
    display: none;
  }
  ul {
    list-style: disc;
  }
`
@customElement('registration-touchpoint')
class RegistrationTouchpoint extends LitElement {
  static styles = [sharedStyles, componentStyle]

  @property({ type: Object }) upgradePrompt?: any
  @property({ type: Object }) globalStyles?: any
  @property({ type: Object }) platformSpecificIcons?: any
  @property({ type: Boolean }) started? = false
  @property({ type: Boolean }) learnMoreContentVisible?: boolean
  @property({ type: Function }) enroll: Function = () => {}
  @query('#biometricIcon') biometricIconElement!: HTMLDivElement
  @query('#rightArrowIcon') rightArrowIconElement!: HTMLSpanElement
  @query('#downArrowIcon') downArrowIconElement!: HTMLSpanElement
  @query('#learnMoreContent') learnMoreContentElement!: HTMLSpanElement

  btnRef = createRef<HTMLInputElement>()

  updated () {
    this.setButtonFocus()
    this.updateIcons()
  }

  connectedCallback () {
    super.connectedCallback()
    this.setButtonFocus()
    this.updateIcons()
  }

  setButtonFocus (): void {
    setTimeout(() => {
      const btnElm: any = this.btnRef.value?.shadowRoot?.querySelector('#authBtn')
      btnElm?.focus()
    }, 1)
  }

  updateIcons () {
    if (this.biometricIconElement) {
      this.biometricIconElement.innerHTML = this.platformSpecificIcons?.biometricIcon ?? 'none'
    }
    if (this.rightArrowIconElement) {
      this.rightArrowIconElement.innerHTML = this.globalStyles?.rightArrowIcon ?? ''
    }
    if (this.downArrowIconElement) {
      this.downArrowIconElement.innerHTML = this.globalStyles?.downArrowIcon ?? ''
    }
    if (this.learnMoreContentElement) {
      this.learnMoreContentElement.innerHTML = this.upgradePrompt?.learnMoreContent ?? ''
    }
  }

  toggleLearnMore (): void {
    this.learnMoreContentVisible = !(this.learnMoreContentVisible ?? false)
  }

  render () {
    return html`
      <flex-container .globalStyles="${this.globalStyles}">
        ${this.upgradePrompt?.hideIcon === false
        ? html`<div></div>`
        : ''}
        ${this.platformSpecificIcons?.biometricIcon !== 'none'
        ? html`<div id="biometricIcon" class="margin-left-right-auto"></div>`
        : ''}
        <header-1 .inlineStyle="${this.globalStyles?.heading1Style}">
          ${this.upgradePrompt?.headline}
        </header-1>
        <text-block .style="${this.globalStyles?.paragraphStyle}">
          ${this.upgradePrompt?.bodyText}
        </text-block>
        <auth-button ${ref(this.btnRef)}
            btnId="authBtn"
          .onClick=${this.enroll}
          ?isProcessing=${this.started}      
          .inlineStyle="${this.globalStyles?.buttonStyle}"
          .processingIcon=${this.globalStyles?.spinnerIcon}
        >
          ${this.upgradePrompt?.buttonText ?? 'Enable Simple Sign-In'}
        </auth-button>

        ${!this.globalStyles?.hideLearnMore
? html`
          <div class="mt-5 mb-2 flex justify-between underline decoration-1">
            <div class="flex items-center">

              ${this.learnMoreContentVisible === true
? html`
                <span class="mr-2" id="rightArrowIcon"> </span>
              `
: html`<span class="mr-2" id="downArrowIcon"> </span>`
              }

              <text-block class="cursor-pointer" 
                          .inlineStyle=${this.globalStyles?.smallParagraphStyle}
                           @click=${this.toggleLearnMore}>
                ${this.upgradePrompt?.learnMoreText}
              </text-block>
            </div>
          </div>


          ${this.learnMoreContentVisible === false
? html`
              <p class="small-paragraph" style="${this.globalStyles?.smallParagraphStyle}">
                <span id="learnMoreContent"></span>
              </p>
              `
: html``
          }

        `
: ''}
        
      </flex-container>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'registration-touchpoint': RegistrationTouchpoint
  }
}
