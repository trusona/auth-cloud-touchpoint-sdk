import {LitElement, html, css} from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { sharedStyles } from '../../shared/style'
import {PropertyValueMap, TemplateResult} from "lit/development";
import {unsafeHTML} from 'lit/directives/unsafe-html.js';

const componentStyle = css`
  .auth-tac-info {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 2rem;
    color: #19064E;
    padding: 0 2rem;
  }

  .auth-tac-info.default-template h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
  }

  .auth-tac-info.default-template p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
  }

  .auth-tac-info ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .auth-tac-info li {
    display: flex;
    gap: 1rem;
  }

  .auth-tac-info li h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    margin-bottom: .5rem;
  }

  .auth-tac-info li p {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }

  .auth-tac-info.default-template a {
    display: block;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    padding: 1rem;
    border: 1px solid #EEEEEE;
    border-radius: 4px;
    width: fit-content;
  }
`;

@customElement('tac-info')
class TacInfo extends LitElement {
    @property({ type: Object }) globalStyles: any

    static styles = [sharedStyles, componentStyle]

    connectedCallback() {
        super.connectedCallback();
        this.updateStyles()
    }

    updated(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>) {
        super.updated(changedProperties);
        this.updateStyles()
    }

    getInfoContent = (): TemplateResult => {
        if(this.globalStyles?.tacContainerMessagingContent && this.globalStyles?.tacContainerMessagingContent !== '') {
            return html`<div class="auth-tac-info">${unsafeHTML(this.globalStyles?.tacContainerMessagingContent)}</div>`
        } else {
            return html`
                <div class="auth-tac-info default-template">
                    <h1>
                        <div>Reduce sign-in friction.</div>
                        <div>Go passwordless with Trusona today.</div>
                    </h1>
                    <p>With the Trusona Authentication Cloud, you get a solution that is:</p>
                    <ul>
                        <li>
                            <span>
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="12" fill="#E6D6FF"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3996 15.9999C16.519 16.0018 17.514 15.2869 17.8695 14.2254C18.2249 13.1639 17.861 11.994 16.9661 11.3214C16.0712 10.6489 14.8463 10.6246 13.9255 11.2612C13.5351 9.18383 11.5959 7.76872 9.49847 8.03071C7.40104 8.2927 5.86949 10.1413 6.00214 12.2509C6.1348 14.3605 7.88587 16.0027 9.99959 15.9999H15.3996Z" stroke="#7B46C8" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>
                            </span>
                            <div>
                                <h2>Cloud-based</h2>
                                <p>Low-code, authentication-as-a-service with proxy-based-architecture allows for rapid deployment for immediate value.</p>
                            </div>
                        </li>
                        <li>
                            <span>
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="12" fill="#E6D6FF"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.19922 13.2598C9.19922 12.4313 9.87079 11.7598 10.6992 11.7598H13.2992C14.1276 11.7598 14.7992 12.4313 14.7992 13.2598V14.2598C14.7992 15.0882 14.1276 15.7598 13.2992 15.7598H10.6992C9.87079 15.7598 9.19922 15.0882 9.19922 14.2598V13.2598Z" stroke="#7B46C8" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12.0008 13.5601C11.8903 13.5601 11.8008 13.6496 11.8008 13.7601C11.8008 13.8705 11.8903 13.9601 12.0008 13.9601C12.1112 13.9601 12.2008 13.8705 12.2008 13.7601C12.2009 13.707 12.1799 13.656 12.1424 13.6185C12.1048 13.5809 12.0539 13.5599 12.0008 13.5601V13.5601" stroke="#7B46C8" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10 11.7601V10.5601C10 9.45549 10.8954 8.56006 12 8.56006C13.1046 8.56006 14 9.45549 14 10.5601V11.7601" stroke="#7B46C8" stroke-linecap="round" stroke-linejoin="round"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18.96C8.43947 18.0101 6 15.8986 6 12.16V6.95996H18V12.16C18 15.896 15.5643 18.009 12 18.96Z" stroke="#7B46C8" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>
                            </span>
                            <div>
                                <h2>Device-based security</h2>
                                <p>Security your customers already use and love, making accounts safer and reducing account takeovers (ATOs) and fraud.</p>
                            </div>
                        </li>
                        <li>
                            <span>
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="12" fill="#E6D6FF"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6542 17.9987L8.60083 15.2616C8.39306 14.9843 8.38259 14.6061 8.5747 14.3176V14.3176C8.69945 14.1308 8.89552 14.0036 9.11691 13.9656C9.33831 13.9277 9.56556 13.9825 9.74537 14.1171L10.652 14.7987V9.60029C10.652 9.15847 11.0102 8.80029 11.452 8.80029V8.80029C11.8939 8.80029 12.252 9.15847 12.252 9.60029V12.8003L14.4782 13.2952C15.2637 13.4698 15.7974 14.2005 15.7246 15.0019L15.452 18.0003L10.6542 17.9987Z" stroke="#7B46C8" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M11.4531 7.19854V5.99854" stroke="#7B46C8" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M13.0547 7.59834L13.8547 6.79834" stroke="#7B46C8" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9.85469 7.59834L9.05469 6.79834" stroke="#7B46C8" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M13.4531 8.79834H14.6531" stroke="#7B46C8" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9.45391 8.79834H8.25391" stroke="#7B46C8" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>
                            </span>
                            <div>
                                <h2>“Tap & go” sign-in UX</h2>
                                <p>No app to download and no password to remember, providing a “tap and go”sign-in user experience.</p>
                            </div>
                        </li>
                    </ul>
                    <a href="https://www.trusona.com/customers/authentication-cloud"
                       target="_blank"
                       title="Learn more about Trusona Authentication Cloud">
                        Learn more
                    </a>
                </div>
            `
        }
    }

    updateStyles = (): void => {
        // First build out the basic global styles, then add the custom styles
        if (this.globalStyles?.tacContainerMessagingContent) {
            const header1 = this.globalStyles?.heading1Style
                ? `.auth-tac-info h1 {${this.globalStyles?.heading1Style}}`
                : ''
            const header2 = this.globalStyles?.heading2Style
                ? `.auth-tac-info h2 {${this.globalStyles?.heading2Style}}`
                : ''
            const paragraph = this.globalStyles?.paragraphStyle
                ? `.auth-tac-info p {${this.globalStyles?.paragraphStyle}}`
                : ''
            const button = this.globalStyles?.buttonStyle
                ? `.auth-tac-info button {${this.globalStyles?.buttonStyle}}`
                : ''
            const css = `
        ${header1}
        ${header2}
        ${paragraph}
        ${button}
      `
            const styleElm = document.getElementById('tacInfoGlobalStyle')
            if (styleElm === null) {
                const styleElm = document.createElement('style')
                styleElm.id = 'tacInfoGlobalStyle'
                const head = document.getElementsByTagName('head')[0]
                styleElm.appendChild(document.createTextNode(css))
                head.appendChild(styleElm)
            } else {
                styleElm.innerHTML = css
            }
        }

        if (this.globalStyles?.tacContainerMessagingContentStyle) {
            const css = `${this.globalStyles.tacContainerMessagingContentStyle}`

            const styleElm = document.getElementById('tacInfoStyle')
            if (styleElm === null) {
                const styleElm = document.createElement('style')
                styleElm.id = 'tacInfoStyle'
                const head = document.getElementsByTagName('head')[0]
                styleElm.appendChild(document.createTextNode(css))
                head.appendChild(styleElm)
            } else {
                styleElm.innerHTML = css
            }
        }
    }

    render() {
        return html`
            ${this.getInfoContent()}
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'tac-info': TacInfo
    }
}

