import { LitElement, html, TemplateResult } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { styleMap } from 'lit/directives/style-map.js'

@customElement('flex-container')
class FlexContainer extends LitElement {
  @property({ type: String }) minWidth?: string | null

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
