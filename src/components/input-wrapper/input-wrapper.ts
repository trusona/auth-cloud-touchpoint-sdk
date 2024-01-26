import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js'
import {sharedStyles} from "../../shared/style";

const componentStyle = css`
  .auth-ui-input-wrapper {
    position: var(--auth-input-ui-input-wrapper-position, relative);
  }
`
@customElement('auth-input-wrapper')
export class AuthInputWrapper extends LitElement {

    static styles = [sharedStyles, componentStyle]

    render() {
        return html`
      <div class="auth-ui-input-wrapper">
        <slot></slot>
      </div>
    `;
    }

}

declare global {
    interface HTMLElementTagNameMap {
        'auth-input-wrapper': AuthInputWrapper
    }
}

