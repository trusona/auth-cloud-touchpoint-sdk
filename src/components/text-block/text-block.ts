import { LitElement, html, css,  } from 'lit';
import {customElement} from 'lit/decorators.js';
import {sharedStyles} from "../../shared/style";

const componentStyle =  css`
  p {
    text-align: center;
    font-size: 1rem;
    line-height: 1.75rem;
    font-weight: 400;
  }
  `

@customElement('text-block')
class TextBlock extends LitElement {

  static styles = [sharedStyles, componentStyle];


  render() {
    return html`
        <p><slot></slot></p>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'text-block': TextBlock
  }
}
