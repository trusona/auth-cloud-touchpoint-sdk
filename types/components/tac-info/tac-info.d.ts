import { LitElement } from 'lit';
import { PropertyValueMap, TemplateResult } from "lit/development";
declare class TacInfo extends LitElement {
    globalStyles: any;
    static styles: import("lit").CSSResult[];
    connectedCallback(): void;
    updated(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    getInfoContent: () => TemplateResult;
    updateStyles: () => void;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'tac-info': TacInfo;
    }
}
export {};
