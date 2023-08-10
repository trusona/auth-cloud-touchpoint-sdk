import { LitElement } from 'lit';
declare class TextBlock extends LitElement {
    static styles: import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'text-block': TextBlock;
    }
}
export {};
