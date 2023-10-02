import { LitElement, html, css, TemplateResult } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { sharedStyles } from '../../shared/style'

const componentStyle = css`

  .auth-card {
    display: flex;
    width: 280px;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 10px;
    padding: 3px;
    border: 1px solid var(--pearl, #EEE);
    background: var(--white, #FFF);
  }

  .auth-card-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 15px 30px;
    align-self: stretch;
    border-radius: 8px 8px;
    background: var(--tilt, #FAFAFA);
  }

  .auth-card-body {
    display: flex;
    padding: 10px 20px;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
  }

  .auth-card-title {
    display: flex;
    align-items: center;
    gap: 5px;
    align-self: stretch;
    justify-content: space-between;
    margin-bottom: 5px;
  }

  .auth-card-row {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 5px;
    align-self: stretch;
  }

  .auth-img {
    width: 22px;
    height: 22px;
  }

  .passkey-type-img {
    width: 18px;
    height: 18px;
    margin-right: 10px;
  }

  .auth-card-h2 {
    color: var(--ferrite, #444);
    text-align: center;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
  }

  .auth-card-h3 {
    color: var(--ferrite, #444);
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
  }

`

@customElement('fido-passkey-details-card')
class FidoPasskeyDetailsCard extends LitElement {
  @property({ type: String }) savedText?: string

  @property({ type: String }) lastUsedText: string = ''
  @property({ type: String }) lastUsedIsMobile: string = 'false'

  @property({ type: String }) prevLastUsedText: string | null = null
  @property({ type: String }) prevLastUsedIsMobile: string = 'false'

  static styles = [sharedStyles, componentStyle]

  render (): TemplateResult {
    return html`
            <div class="auth-card">
                <div class="auth-card-header">
                    <svg class="auth-img" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.50805 9.82263C11.261 9.82263 13.4927 7.69721 13.4927 5.07538C13.4927 2.45354 11.261 0.328125 8.50805 0.328125C5.75513 0.328125 3.52344 2.45354 3.52344 5.07538C3.52344 7.69721 5.75513 9.82263 8.50805 9.82263Z"
                              fill="#19064E"/>
                        <path d="M21.7997 9.82073C21.7997 7.78468 20.0607 6.12842 17.9228 6.12842C15.785 6.12842 14.0459 7.78468 14.0459 9.82073C14.0459 11.2871 14.9542 12.553 16.2613 13.1438V18.7878L17.9228 20.3702L20.6921 17.7328L19.0305 16.1504L20.6921 14.568L19.3185 13.2598C20.7696 12.7218 21.7997 11.3926 21.7997 9.82073ZM17.9228 9.82073C17.3136 9.82073 16.8151 9.346 16.8151 8.76578C16.8151 8.18556 17.3136 7.71084 17.9228 7.71084C18.5321 7.71084 19.0305 8.18556 19.0305 8.76578C19.0305 9.346 18.5321 9.82073 17.9228 9.82073Z"
                              fill="#19064E"/>
                        <path d="M12.8722 11.9558C12.0414 11.6077 11.1331 11.4072 10.1694 11.4072H6.84635C3.17989 11.4072 0.200195 14.245 0.200195 17.7369V19.8468H14.6002V14.034C13.847 13.496 13.2599 12.7787 12.8722 11.9663V11.9558Z"
                              fill="#19064E"/>
                    </svg>
                    <p class="auth-card-h2">${this.savedText}</p>
                </div>
                <div class="auth-card-body">
                    <div class="auth-card-title">
                        <p class="auth-card-h3">Last used</p>
                        <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.375 5.06006H2.625C2.21079 5.06006 1.875 5.39585 1.875 5.81006V11.0601C1.875 11.4743 2.21079 11.8101 2.625 11.8101H9.375C9.78921 11.8101 10.125 11.4743 10.125 11.0601V5.81006C10.125 5.39585 9.78921 5.06006 9.375 5.06006Z"
                                  stroke="#444444" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.375 5.06006V3.18506C3.375 2.48887 3.65156 1.82119 4.14384 1.3289C4.63613 0.83662 5.30381 0.560059 6 0.560059C6.69619 0.560059 7.36387 0.83662 7.85616 1.3289C8.34844 1.82119 8.625 2.48887 8.625 3.18506V5.06006"
                                  stroke="#444444" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6 8.06006C5.96292 8.06006 5.92666 8.07106 5.89583 8.09166C5.865 8.11226 5.84096 8.14155 5.82677 8.17581C5.81258 8.21007 5.80887 8.24777 5.8161 8.28414C5.82334 8.32051 5.84119 8.35392 5.86742 8.38014C5.89364 8.40636 5.92705 8.42422 5.96342 8.43146C5.99979 8.43869 6.03749 8.43498 6.07175 8.42079C6.10601 8.4066 6.1353 8.38256 6.1559 8.35173C6.1765 8.32089 6.1875 8.28464 6.1875 8.24756C6.18757 8.22292 6.18276 8.19851 6.17336 8.17573C6.16396 8.15295 6.15015 8.13225 6.13273 8.11483C6.11531 8.09741 6.09461 8.0836 6.07183 8.0742C6.04905 8.0648 6.02464 8.05999 6 8.06006Z"
                                  stroke="#444444" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    ${this.getRow(this.lastUsedText, this.lastUsedIsMobile === 'true')}
                    ${this.getOptionalRow()}
                </div>
            </div>
        `
  }

  private getRow (lastUsedText: string, lastUsedIsMobile: boolean): TemplateResult {
    return html`
            <div class="auth-card-row">
                ${this.getIcon(lastUsedIsMobile)}
                <p class="auth-card-h3">${lastUsedText}</p>
            </div>
        `
  }

  private getIcon (isMobile: boolean): TemplateResult {
    if (isMobile) {
      return html`
                <svg class="passkey-type-img" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.6114 11.6851H4.38916" stroke="#444444" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.5003 1.7959H5.50027C4.88662 1.7959 4.38916 2.29336 4.38916 2.90701V13.4626C4.38916 14.0762 4.88662 14.5737 5.50027 14.5737H10.5003C11.1139 14.5737 11.6114 14.0762 11.6114 13.4626V2.90701C11.6114 2.29336 11.1139 1.7959 10.5003 1.7959Z"
                          stroke="#444444" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.00017 12.6519C7.90153 12.6519 7.80511 12.6811 7.7231 12.7359C7.64109 12.7907 7.57717 12.8686 7.53943 12.9597C7.50168 13.0508 7.49181 13.1511 7.51105 13.2478C7.53029 13.3446 7.57779 13.4334 7.64753 13.5032C7.71728 13.5729 7.80614 13.6204 7.90287 13.6397C7.99961 13.6589 8.09988 13.649 8.19101 13.6113C8.28214 13.5736 8.36002 13.5096 8.41482 13.4276C8.46962 13.3456 8.49887 13.2492 8.49887 13.1506C8.49887 13.0183 8.44633 12.8914 8.3528 12.7979C8.25928 12.7044 8.13243 12.6519 8.00017 12.6519Z"
                          fill="#444444"/>
                </svg>
            `
    } else {
      return html`
                <svg class="passkey-type-img" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_5534_164)">
                        <path d="M14.4995 9.68506V3.18506C14.4995 2.35173 13.8262 1.68506 12.9995 1.68506H2.99951C2.16618 1.68506 1.49951 2.35173 1.49951 3.18506V9.68506C1.49951 9.95839 1.71951 10.1851 1.99951 10.1851H13.9995C14.2728 10.1851 14.4995 9.95839 14.4995 9.68506ZM13.4995 9.68506L13.9995 9.18506H1.99951L2.49951 9.68506V3.18506C2.49951 2.90506 2.71951 2.68506 2.99951 2.68506H12.9995C13.2728 2.68506 13.4995 2.90506 13.4995 3.18506V9.68506Z"
                              fill="#444444"/>
                        <path d="M14.9525 12.9785C15.0591 13.2252 14.9458 13.5252 14.6925 13.6319C14.6258 13.6585 14.5591 13.6719 14.4858 13.6719L1.47915 13.6652C1.19915 13.6652 0.972487 13.4385 0.972487 13.1652C0.96582 13.0919 0.98582 13.0252 1.01249 12.9585L2.41915 9.86521L1.95915 10.1519H13.9592L13.4992 9.85854L14.9125 12.9525L14.9525 12.9785ZM15.8591 12.5652L14.4391 9.46521C14.3525 9.28521 14.1791 9.17188 13.9791 9.17188H1.97915C1.77915 9.17188 1.59915 9.28521 1.51915 9.45854L0.0991536 12.5519C0.0058203 12.7452 -0.0341797 12.9519 -0.0341797 13.1652C-0.0341797 13.9919 0.632487 14.6585 1.46582 14.6585H14.4592C14.6658 14.6585 14.8725 14.6119 15.0658 14.5252C15.8191 14.1852 16.1591 13.2985 15.8258 12.5452L15.8591 12.5652Z"
                              fill="#444444"/>
                        <path d="M6.99951 12.6851H8.99951C9.27284 12.6851 9.49951 12.4584 9.49951 12.1851C9.49951 11.9051 9.27284 11.6851 8.99951 11.6851H6.99951C6.71951 11.6851 6.49951 11.9051 6.49951 12.1851C6.49951 12.4584 6.71951 12.6851 6.99951 12.6851Z"
                              fill="#444444"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_5534_164">
                            <rect width="16" height="16" fill="white" transform="translate(0 0.185059)"/>
                        </clipPath>
                    </defs>
                </svg>
            `
    }
  }

  private getOptionalRow (): TemplateResult {
    if (this.prevLastUsedText && this.prevLastUsedText !== '') {
      return this.getRow(this.prevLastUsedText, this.prevLastUsedIsMobile === 'true')
    } else {
      return html``
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fido-passkey-details-card': FidoPasskeyDetailsCard
  }
}
