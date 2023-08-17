import { LitElement, PropertyValues } from 'lit';
declare enum InputState {
    ready = 0,
    reset = 1
}
declare class CodeInput extends LitElement {
    inputsList: HTMLInputElement[];
    codeLength: number;
    inputType: string;
    inputMode: string;
    initialFocusField: number;
    isCharsCode: boolean;
    isCodeHidden: boolean;
    isPrevFocusableAfterClearing: boolean;
    isFocusingOnLastByClickIfFilled: boolean;
    code: undefined;
    disabled: boolean;
    autocap: undefined;
    isNonDigitsCode: boolean;
    placeholders: number[];
    inputs: HTMLInputElement[];
    inputsStates: InputState[];
    state: {
        isFocusingAfterAppearingCompleted: boolean;
        isInitialFocusFieldEnabled: boolean;
    };
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changedProperties: any): void;
    render(): import("lit-html").TemplateResult<1>;
    firstUpdated(_changedProperties: PropertyValues): void;
    static styles: import("lit").CSSResult;
    reset(isChangesEmitting?: boolean): void;
    onCodeLengthChanges(): void;
    onInputCodeChanges(): void;
    onClick(e: MouseEvent): void;
    onInput(e: InputEvent, i: number): void;
    onPaste(e: ClipboardEvent, i: number): void;
    onKeydown(e: any, i: number): Promise<void>;
    focusOnInputAfterAppearing(): void;
    emitChanges(): void;
    emitCode(): void;
    getCurrentFilledCode(): string;
    isBackspaceKey(e: KeyboardEvent): Promise<boolean>;
    isDeleteKey(e: KeyboardEvent): any;
    setInputValue(input: HTMLInputElement, value: any): void;
    canInputValue(value: any): boolean;
    focusOnField(index: number): void;
    setStateForInput(input: HTMLInputElement, state: InputState): void;
    getStateForInput(input: HTMLInputElement): InputState | undefined;
    isEmpty(value: any): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'code-input': CodeInput;
    }
}
export {};
