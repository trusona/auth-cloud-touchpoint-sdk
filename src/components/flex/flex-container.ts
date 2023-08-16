import { LitElement, html, css, TemplateResult } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { sharedStyles } from '../../shared/style'
import { styleMap } from 'lit/directives/style-map.js'

const componentStyle = css`
  .auth-flexdialog {
    display: flex;
    row-gap: 1.25rem;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background-color: #ffffff;
    width: 290px;
    vertical-align: middle;
    padding: 2rem;
    border-radius: 0.5rem;
    margin: auto;
  }
`

@customElement('flex-container')
class FlexContainer extends LitElement {
  @property({ type: String }) minWidth?: string | null

  static styles = [sharedStyles, componentStyle]

  render (): TemplateResult {
    return html`
            <div class="auth-flexdialog" style=${styleMap(this.getMinWidthStyles())}>
                <slot></slot>
            </div>
        `
  }

  private getMinWidthStyles (): any {
    return { 'min-width': this.minWidth ?? 'auto' }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'flex-container': FlexContainer
  }
}
