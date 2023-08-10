import { LitElement, TemplateResult } from 'lit';
declare class AuthButton extends LitElement {
    onClick?: (() => void) | undefined;
    isProcessing?: boolean | undefined;
    processingIcon?: string;
    isWaitingForInput?: boolean | undefined;
    static styles: import("lit").CSSResult[];
    getContent: () => TemplateResult;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'auth-button': AuthButton;
    }
}
export {};
