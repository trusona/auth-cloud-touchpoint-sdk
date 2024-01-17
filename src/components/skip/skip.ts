import { html, css, LitElement } from 'lit'
import { property, customElement } from 'lit/decorators.js'
import { sharedStyles } from '../../shared/style'

const componentStyle = css`
  .skip-button {
    margin-left: var(--auth-skip-margin-left, auto);
    margin-right: var(--auth-skip-margin-right, auto);
    display: var(--auth-skip-display, flex);
    flex-direction: var(--auth-skip-flex-direction, row);
    justify-content: var(--auth-skip-justify-content, center);
    align-items: var(--auth-skip-align-items, center);
    padding: var(--auth-skip-padding, 0);
    width: var(--auth-skip-width, auto);
    max-width: var(--auth-skip-max-width, 100%);
    text-align: var(--auth-skip-text-align, center);
    color: var(--auth-skip-color, #72a3db);
    background: var(--auth-skip-background, transparent);
    border: var(--auth-skip-border, none);
    border-radius: var(--auth-skip-border-radius, 0);
    cursor: var(--auth-skip-cursor, pointer);
  }

  .skip-button:hover {
    text-decoration: var(--auth-skip-hover-text-decoration, underline);
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
