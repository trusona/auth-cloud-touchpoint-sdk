import { LitElement, html } from 'lit';
import {customElement, property} from "lit/decorators.js";
import {ref, createRef} from 'lit/directives/ref.js';


@customElement('continue-touchpoint')
class ContinueTouchpoint extends LitElement {
    @property({ type: Object }) successfulUpgrade?: any;
    @property({ type: Object }) globalStyles?: any;
    @property({ type: Object }) platformSpecificIcons?: any;
    @property({ type: Function }) next: Function = () => {};
    @property({ type: Boolean }) buttonAutoFocus?: boolean = true;
    @property({ type: Boolean }) started: Boolean = false;

    btnRef = createRef<HTMLInputElement>();

    updated(changedProperties: any) {
        super.updated(changedProperties);
        if (changedProperties.has('buttonAutoFocus') && this.buttonAutoFocus) {
            this.setButtonFocus();
        }
    }

    setButtonFocus(): void {
        setTimeout(() => {
            if (this.successfulUpgrade?.disableButtonFocus !== false) {
                const btnElm: any = this.btnRef.value?.shadowRoot?.querySelector('#authBtn')
                btnElm?.focus()
            }
        }, 1);
    }

    onNextClicked(): void {
        this.started = true;
        this.next();
    }

    render() {
        return html`
      <flex-container .globalStyles=${this.globalStyles}>
        <header-1 .inlineStyle=${this.globalStyles?.heading1Style}>${this.successfulUpgrade?.headline}</header-1>
        <text-block .inlineStyle=${this.globalStyles?.paragraphStyle}>${this.successfulUpgrade?.bodyText}</text-block>
        <auth-button ${ref(this.btnRef)}
            btnId="authBtn"
          .onClick=${() => { this.onNextClicked() }}
          ?isProcessing=${this.started}
          .inlineStyle=${this.globalStyles?.buttonStyle}
          .processingIcon=${this.globalStyles?.spinnerIcon}>
          ${this.successfulUpgrade?.buttonText}
        </auth-button>
      </flex-container>
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'continue-touchpoint': ContinueTouchpoint
    }
}
