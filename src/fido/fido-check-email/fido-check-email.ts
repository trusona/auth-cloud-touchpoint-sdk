import {LitElement, html, css, TemplateResult} from 'lit'
import {customElement, property} from 'lit/decorators.js'
import {sharedStyles} from '../../shared/style'

const componentStyle = css`

  .auth-container {
    width: 320px;
    min-height: 420px;
    margin: auto;
    /* TODO: Adding Border? */
    border-radius: 6px;
    border: 1px solid #000;
    background: var(--white, #FFF);
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
  }

  .auth-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    align-self: stretch;
    gap: 20px;
    padding: 60px 30px;
  }

  .auth-img {
    width: 80px;
    height: 80px;
  }

  .auth-img-email {
    width: 15px;
    height: 15px;
  }

  .auth-close-img {
    width: 24px;
    height: 24px;
    position: absolute;
    right: 10px;
    top: 10px;
  }

  .auth-button {
    border-radius: 4px;
    display: flex;
    padding: 16px;
    justify-content: center;
    align-items: center;
    gap: 16px;
    align-self: stretch;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    background-color: var(--trusona-button-bg-color, #19064E);
    border: 1px solid var(--trusona-button-border-color, #19064E);
    color: var(--trusona-button-color, rgb(255, 255, 255));
  }

  .auth-button:disabled {
    background-color: var(--trusona-button-disabled-bg-color, #cccccc) !important;
    border: 1px solid var(--trusona-button-disabled-bg-color, #cccccc) !important;
    color: var(--trusona-button-disabled-color, #444444) !important;
  }

  .auth-h1 {
    color: #000;
    text-align: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .auth-email-card {
    display: flex;
    width: 280px;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    border: 1px solid var(--pearl, #EEE);
    background: var(--white, #FFF);
  }

  .auth-email-card div {
    display: flex;
    padding: 10px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    align-self: stretch;
    border-radius: 10px;
    border: 2px solid var(--white, #FFF);
    background: var(--tilt, #FAFAFA);
  }
  
  

  .auth-email-card p {
    display: -webkit-box;
    transform: rotate(-0.324deg);
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    flex: 1 0 0;
    overflow: hidden;
    color: var(--ferrite, #444);
    text-align: center;
    text-overflow: ellipsis;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px; /* 127.273% */
  }

  .auth-body {
    color: #000;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

`

@customElement('fido-check-email')
class FidoCheckEmail extends LitElement {

    @property({type: String}) email: string = ""
    @property({type: Function}) onClick? = (): void => {
    }

    @property({type: Function}) onCancel? = (): void => {
    }

    static styles = [sharedStyles, componentStyle]

    render(): TemplateResult {
        return html`
            <div class="auth-container">
                <div style="position: relative;">
                    <svg class="auth-close-img" @click=${this.onCancel} viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 19.5L19.5 4.5" stroke="#444444" stroke-width="1.5" stroke-linecap="round"
                              stroke-linejoin="round"/>
                        <path d="M4.5 4.5L19.5 19.5" stroke="#444444" stroke-width="1.5" stroke-linecap="round"
                              stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="auth-card">
                    <p class="auth-h1">Welcome!</p>
                    <svg class="auth-img" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M69.234 13.1799H10.7725C7.37382 13.1799 4.61865 16.1647 4.61865 19.8466V59.8466C4.61865 63.5285 7.37382 66.5133 10.7725 66.5133H69.234C72.6327 66.5133 75.3879 63.5285 75.3879 59.8466V19.8466C75.3879 16.1647 72.6327 13.1799 69.234 13.1799Z"
                              stroke="#19064E" stroke-width="3.03151" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M73.5709 15.1201L39.9986 44.8468L6.42627 15.1201" stroke="#19064E"
                              stroke-width="3.03151" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p class="auth-body">To confirm your new account, click the link we sent to:</p>
                    <div class="auth-email-card">
                        <div>
                            <svg class="auth-img-email" viewBox="0 0 15 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.9806 2.5791H2.01908C1.38183 2.5791 0.865234 3.13875 0.865234 3.8291V11.3291C0.865234 12.0195 1.38183 12.5791 2.01908 12.5791H12.9806C13.6179 12.5791 14.1345 12.0195 14.1345 11.3291V3.8291C14.1345 3.13875 13.6179 2.5791 12.9806 2.5791Z"
                                      stroke="#444444" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M13.7947 2.94287L7.49989 8.51662L1.20508 2.94287" stroke="#444444"
                                      stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p>${this.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'fido-check-email': FidoCheckEmail
    }
}