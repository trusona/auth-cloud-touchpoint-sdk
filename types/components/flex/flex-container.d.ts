import { LitElement, TemplateResult } from 'lit';
declare class FlexContainer extends LitElement {
    minWidth?: string | null;
    render(): TemplateResult;
    private getMinWidthStyles;
}
declare global {
    interface HTMLElementTagNameMap {
        'flex-container': FlexContainer;
    }
}
export {};
