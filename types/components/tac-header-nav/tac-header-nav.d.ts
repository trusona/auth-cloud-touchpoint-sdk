import { LitElement, PropertyValueMap } from 'lit';
import { TemplateResult } from "lit/development";
declare class TacHeaderNav extends LitElement {
    globalStyles: any;
    visible: boolean;
    static styles: import("lit").CSSResult[];
    connectedCallback(): void;
    updated(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    getSvgLogo: () => TemplateResult;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'tac-header-nav': TacHeaderNav;
    }
}
export {};
