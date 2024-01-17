import {LitElement, html, css, TemplateResult} from 'lit'
import {repeat} from 'lit/directives/repeat.js'
import {customElement, property} from 'lit/decorators.js'
import {sharedStyles} from '../../shared/style'
import {PasskeyActivity} from "@trusona/webauthn";


const componentStyle = css`
  .auth-container {
    display: var(--fido-passkey-details-container-display, flex);
    row-gap: var(--fido-passkey-details-container-row-gap, 1.25rem);
    width: var(--fido-passkey-details-container-width, 260px);
    flex-direction: var(--fido-passkey-details-container-flex-direction, column);
    justify-content: var(--fido-passkey-details-container-justify-content, center);
    align-content: var(--fido-passkey-details-container-align-content, center);
    flex-shrink: var(--fido-passkey-details-container-flex-shrink, 0);
    align-self: var(--fido-passkey-details-container-align-self, stretch);
    margin: var(--fido-passkey-details-container-margin, auto);
  }

  .auth-paragraph {
    display: var(--fido-passkey-details-paragraph-display, flex);
    flex-direction: var(--fido-passkey-details-paragraph-flex-direction, column);
    gap: var(--fido-passkey-details-paragraph-gap, 8px);
    flex-wrap: var(--fido-passkey-details-paragraph-flex-wrap, wrap);
    align-self: var(--fido-passkey-details-paragraph-align-self, stretch);
  }

  .auth-h1 {
    color: var(--fido-passkey-details-h1-color, #000);
    font-size: var(--fido-passkey-details-h1-font-size, 24px);
    font-style: var(--fido-passkey-details-h1-font-style, normal);
    font-weight: var(--fido-passkey-details-h1-font-weight, 400);
    line-height: var(--fido-passkey-details-h1-line-height, normal);
  }

  .auth-h3 {
    align-self: var(--fido-passkey-details-h3-align-self, stretch);
    color: var(--fido-passkey-details-h3-color, #000);
    font-size: var(--fido-passkey-details-h3-font-size, 14px);
    font-style: var(--fido-passkey-details-h3-font-style, normal);
    font-weight: var(--fido-passkey-details-h3-font-weight, 400);
    line-height: var(--fido-passkey-details-h3-line-height, normal);
  }

  ul {
    display: var(--fido-passkey-details-ul-display, block);
    list-style-type: var(--fido-passkey-details-ul-list-style-type, disc);
    -webkit-margin-before: var(--fido-passkey-details-ul-margin-before, 1em);
    -webkit-margin-after: var(--fido-passkey-details-ul-margin-after, 1em);
    -webkit-margin-start: var(--fido-passkey-details-ul-margin-start, 0);
    -webkit-margin-end: var(--fido-passkey-details-ul-margin-end, 0);
    -webkit-padding-start: var(--fido-passkey-details-ul-padding-start, 20px);
  }

`

@customElement('fido-passkey-details')
class FidoPasskeyDetails extends LitElement {
    @property({type: Object}) passkeyActivitiesMap: Map<string, Array<PasskeyActivity>> = new Map<string, Array<PasskeyActivity>>()

    static styles = [sharedStyles, componentStyle]

    render(): TemplateResult {
        return html`
            <div class="auth-container">
                <p class="auth-h1">Passkeys</p>
                ${this.getPasskeyActivities()}
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

    private getPasskeyActivities(): TemplateResult {
        const entries: Array<PasskeyActivity> = Object.values(this.passkeyActivitiesMap)
        return html`
            ${repeat(entries, activities => html`
                <fido-passkey-details-card passkeyActivities="${JSON.stringify(activities)}">
                </fido-passkey-details-card>
            `)}
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'fido-passkey-details': FidoPasskeyDetails
    }
}
