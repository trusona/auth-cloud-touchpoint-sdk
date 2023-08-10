import { LitElement, html, css,  } from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {sharedStyles} from "../../shared/style";
// import {unsafeSVG} from 'lit/directives/unsafe-svg.js';

const componentStyle =  css`
  .auth-button {
    margin-left: auto;
    margin-right: auto;

    align-items: center;
    appearance: none;
    display: flex;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    justify-content: space-around;
    letter-spacing: 1px;
    line-height: 17px;
    min-height: 47px;
    padding: 0 24px;
    text-align: center;
    transition-delay: 0s;
    transition-duration: 0.1s;
    transition-property: box-shadow;
    transition-timing-function: ease;
    width: 100%;
    cursor: pointer;
    background-color: #7B46D1;
    border: 1px solid #7B46D1;
    color: rgb(255, 255, 255);
    border-radius: 5px;
  }

  .auth-button:disabled {
    background-color: #cccccc !important;
    border: 1px solid #cccccc !important;
    color: #444444 !important;
  }

  .auth-btn-content-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }

  .auth-btn-content-text {
    flex: 1;
    text-align: center;
  }
  `

@customElement('auth-button')
class AuthButton extends LitElement {
  @property({ type: Function }) onClick? = () => {};
  @property({type: Boolean}) isProcessing? = false;
  @property({ type: String }) processingIcon?: string;
  @property({ type: Boolean }) isWaitingForInput? = false;


  static styles = [sharedStyles, componentStyle];

  getContent = () => {
    console.log('this.isProcessing', this.isProcessing)
    if(this.isProcessing) {
      return html`<span>${this.processingIcon ? this.processingIcon : 'Processing...'}</span>`
    } else {
      return html`<slot></slot>`
    }
  }

  render() {
    return html`
      <button part="button"
          @click=${this.onClick}
          ?disabled=${this.isProcessing || this.isWaitingForInput}
          class="auth-button"
      >
        ${this.getContent()}
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'auth-button': AuthButton
  }
}
