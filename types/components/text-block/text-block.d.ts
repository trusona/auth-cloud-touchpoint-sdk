import { LitElement, TemplateResult } from 'lit';
declare class TextBlock extends LitElement {
    static styles: import("lit").CSSResult[];
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'text-block': TextBlock;
    }
}
export {};
