import { html, css, LitElement } from 'lit'
import { property, customElement, query } from 'lit/decorators.js'
import { sharedStyles } from '../../shared/style'

const componentStyle = css`
  .reset-button {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 20px;
    width: auto;
    max-width: 100%;
    min-width: 90%;
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 14px;
    text-align: center;
    color: #444444;
    background: #FAFAFA;
    border: 1px solid #EEEEEE;
    border-radius: 20px;
    cursor: pointer;
  }

  .reset-button__wrapper {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    white-space: normal;
    word-break: break-all;
  }

  .reset-button__wrapper span {
    white-space: normal;
    word-wrap: break-word;
  }
`
@customElement('auth-reset')
class Reset extends LitElement {
  static styles = [sharedStyles, componentStyle]
  @property({ type: String }) inlineStyle = ''
  @property({ type: Function }) onClick?: Function = (): void => {}
  @query('.reset-button') buttonElement!: HTMLInputElement

  render () {
    return html`
      <button class="reset-button" style="${this.inlineStyle}" @click="${this.onClick}">
        <div class="reset-button__wrapper">
          <svg
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.9244 0.838505L1.07252 4.87736"
              stroke="#19064E"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M1.0756 5.1222L4.92748 9.16105"
              stroke="#19064E"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
          <span><slot></slot></span>
        </div>
      </button>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'auth-reset': Reset
  }
}
