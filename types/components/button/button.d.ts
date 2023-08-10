import { LitElement } from 'lit';
declare class AuthButton extends LitElement {
    onClick?: (() => void) | undefined;
    isProcessing?: boolean | undefined;
    processingIcon?: string;
    isWaitingForInput?: boolean | undefined;
    static styles: import("lit").CSSResult[];
    getContent: () => import("lit-html").TemplateResult<1>;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'auth-button': AuthButton;
    }
}
export {};
