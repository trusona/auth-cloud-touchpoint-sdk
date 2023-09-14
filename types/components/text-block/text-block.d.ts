import { LitElement, TemplateResult } from 'lit';
declare class TextBlock extends LitElement {
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'text-block': TextBlock;
    }
}
export {};
