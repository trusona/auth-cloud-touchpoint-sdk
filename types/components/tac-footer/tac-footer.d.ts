import { LitElement } from 'lit';
import { TemplateResult } from "lit/development";
declare class TacFooter extends LitElement {
    globalStyles: any;
    static styles: import("lit").CSSResult[];
    isFooterVisible: () => boolean;
    getFooterContent: () => TemplateResult;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'tac-footer': TacFooter;
    }
}
export {};
