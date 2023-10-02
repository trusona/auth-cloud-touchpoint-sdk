import {LitElement, html, css, TemplateResult} from 'lit'
import {repeat} from 'lit/directives/repeat.js';
import {customElement, property} from 'lit/decorators.js'
import {sharedStyles} from '../../shared/style'

const componentStyle = css`

  .auth-container {
    display: flex;
    row-gap: 1.25rem;
    width: 260px;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    flex-shrink: 0;
    align-self: stretch;
    margin: auto;
  }

  .auth-paragraph {
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex-wrap: wrap;
    align-self: stretch;
  }

  .auth-h1 {
    color: #000;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .auth-h3 {
    align-self: stretch;
    color: var(--black, #000);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  ul {
    display: block;
    list-style-type: disc;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0;
    -webkit-margin-end: 0;
    -webkit-padding-start: 20px;
  }

`

export default interface PasskeyDetails {
    savedText: string,
    lastUsedText: string
    lastUsedIsMobile: boolean
    prevLastUsedText?: string | null
    prevLastUsedIsMobile?: boolean | null
}

@customElement('fido-passkey-details')
class FidoPasskeyDetails extends LitElement {

    @property({type: Array}) passkeyDetails: Array<PasskeyDetails> = new Array<PasskeyDetails>()

    static styles = [sharedStyles, componentStyle]

    render(): TemplateResult {
        return html`
            <div class="auth-container">
                <p class="auth-h1">Passkeys</p>
                ${this.getPasskeys()}
                <div class="auth-h3">
                    <ul class="auth-paragraph">
                        <li>
                            <b>Why should I use passkeys?</b>
                            <p>With passkeys, you don’t need to remember complex passwords.</p>
                        </li>
                        <li>
                            <b>What are passkeys?</b>
                            <p>Passkeys are encrypted digital keys you create using your fingerprint, face, or screen
                                lock.</p>
                        </li>
                        <li>
                            <b>Where are passkeys saved?</b>
                            <p>Passkeys are saved to your password manager, so you can sign in on other devices.</p>
                        </li>
                    </ul>
                </div>
            </div>
        `
    }

    private getPasskeys(): TemplateResult {
        return html`
            ${repeat(this.passkeyDetails, (passkeyDetail: PasskeyDetails) => html`
                <fido-passkey-details-card
                        savedText="${passkeyDetail.savedText}"
                        lastUsedText="${passkeyDetail.lastUsedText}"
                        lastUsedIsMobile="${passkeyDetail.lastUsedIsMobile}"
                        prevLastUsedText="${passkeyDetail.prevLastUsedText}"
                        prevLastUsedIsMobile="${passkeyDetail.prevLastUsedIsMobile}"
                >
                </fido-passkey-details-card>
            `)}
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'fido-passkey-details': FidoPasskeyDetails
    }
}
