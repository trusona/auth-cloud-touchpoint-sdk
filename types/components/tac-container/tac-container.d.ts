import { LitElement, PropertyValueMap } from 'lit';
import { TemplateResult } from "lit/development";
declare class TacContainer extends LitElement {
    globalStyles: any;
    static styles: import("lit").CSSResult[];
    updateStyles: () => void;
    connectedCallback(): void;
    updated(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    getSecondColumn: () => TemplateResult;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'tac-container': TacContainer;
    }
}
export {};
