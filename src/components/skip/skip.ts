import { html, css, LitElement } from 'lit'
import { property, customElement } from 'lit/decorators.js'
import { sharedStyles } from '../../shared/style'

const componentStyle = css`
  .skip-button {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0;
    width: auto;
    max-width: 100%;
    text-align: center;
    color: #72a3db;
    background: transparent;
    border: none;
    border-radius: 0;
    cursor: pointer;
  }

  .skip-button:hover {
    text-decoration: underline;
  }
`
@customElement('auth-skip')
class Skip extends LitElement {
  static styles = [sharedStyles, componentStyle]
  @property({ type: String }) inlineStyle = ''
  @property({ type: Function }) onClick?: Function = (): void => {}

  render () {
    return html`
            <button class="skip-button" style="${this.inlineStyle}" @click="${this.onClick}" type="button">
                <slot></slot>
            </button>
        `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'auth-skip': Skip
  }
}
