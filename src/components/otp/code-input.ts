import { html, css, LitElement, PropertyValues } from 'lit'
import { property, queryAll, customElement } from 'lit/decorators.js'
import {PropertyValueMap} from "lit/development";

enum InputState {
  ready = 0,
  reset = 1
}
@customElement('code-input')
class CodeInput extends LitElement {
  @queryAll('input') inputsList!: HTMLInputElement[]

  // @property({ type: Function }) codeChanged? = (code: string): void => {console.log(code)}
  // @property({ type: Function }) codeCompleted? = (code: string): void => {console.log(code)}
  @property({ type: Number }) codeLength = 6
  @property({ type: String }) inputType = 'text'
  @property({ type: String }) inputMode = 'numeric'
  @property({ type: Number }) initialFocusField = 0
  @property({ type: Boolean }) isCharsCode = false
  @property({ type: Boolean }) isCodeHidden = false
  @property({ type: Boolean }) isPrevFocusableAfterClearing = false
  @property({ type: Boolean }) isFocusingOnLastByClickIfFilled = false
  @property({ type: String }) code = undefined
  @property({ type: Boolean }) disabled = false
  @property({ type: String }) autocap = undefined
  @property({ type: Boolean }) isNonDigitsCode = false
  @property({ type: Function }) codeChanged: Function = () => {}
  @property({ type: Function }) codeCompleted: Function = () => {}

  placeholders: number[] = []
  inputs: HTMLInputElement[] = []
  inputsStates: InputState[] = []

  state = {
    isFocusingAfterAppearingCompleted: false,
    isInitialFocusFieldEnabled: false
  }

  connectedCallback () {
    super.connectedCallback()
    this.state.isInitialFocusFieldEnabled = this.initialFocusField !== undefined
    this.onCodeLengthChanges()
  }

  disconnectedCallback () {
    super.disconnectedCallback()
  }


  updated (changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>) {
    super.updated(changedProperties)
    if (changedProperties.has('code')) {
      this.onInputCodeChanges()
    }
    if (changedProperties.has('codeLength')) {
      this.onCodeLengthChanges()
    }
  }

  render () {
    return html`
            <div class="code-input">
              ${this.placeholders.map((_, i) => html`
                <span class="${this.isCodeHidden ? 'code-hidden' : ''}">
                  <input
                    @click="${(e: any) => this.onClick(e)}"
                    @paste="${(e: any) => this.onPaste(e, i)}"
                    @input="${(e: any) => this.onInput(e, i)}"
                    @keydown="${async (e: any) => await this.onKeydown(e, i)}" 
                    type="${this.inputType}"
                    ?disabled="${this.disabled}"
                    inputmode="${this.inputMode}"
                    ?autocapitalize="${this.autocap}"
                    autocomplete="one-time-code"
                  />
                </span>
              `)}
            </div>
    `
  }

  firstUpdated (_changedProperties: PropertyValues) {
    super.firstUpdated(_changedProperties)
    // @ts-expect-error
    this.inputs = this.shadowRoot?.querySelectorAll('input') || []
    this.focusOnInputAfterAppearing()
  }

  static styles = css`

    :host {
      display: var(--auth-code-input-host-display, flex);
      transform: var(--auth-code-input-host-transform, translate3d(0, 0, 0));
      font-size: var(--auth-code-input-host-font-size, inherit);
      margin-left: var(--auth-code-input-host-margin-left, auto);
      margin-right: var(--auth-code-input-host-margin-right, auto);
    }

    .code-input {
      display: var(--auth-code-input-code-input-display, flex);
      color: var(--auth-code-input-code-input-color, #171516);
      flex-direction: var(--auth-code-input-code-input-flex-direction, row);
      gap: var(--auth-code-input-code-input-gap, 1rem);
      max-width: var(--auth-code-input-code-input-max-width, 300px);
    }

    span {
      display: var(--auth-code-input-span-display, block);
      flex: var(--auth-code-input-span-flex, 1);
    }

    span.code-hidden input {
      text-security: var(--auth-code-input-span-code-hidden-input-text-security, disc);
      -webkit-text-security: var(--auth-code-input-span-code-hidden-input-webkit-text-security, disc);
      -moz-text-security: var(--auth-code-input-span-code-hidden-input-moz-text-security, disc);
    }

    input {
      width: var(--auth-code-input-input-width, 100%);
      height: var(--auth-code-input-input-height, 4.375em);
      color: var(--auth-code-input-input-color, inherit);
      background: var(--auth-code-input-input-background, transparent);
      text-align: var(--auth-code-input-input-text-align, center);
      font-size: var(--auth-code-input-input-font-size, inherit);
      border-top-width: var(--auth-code-input-input-border-top-width, 1px);
      border-top-style: var(--auth-code-input-input-border-top-style, solid);
      border-top-color: var(--auth-code-input-input-border-top-color, #ddd);
      border-right-width: var(--auth-code-input-input-border-right-width, 1px);
      border-right-style: var(--auth-code-input-input-border-right-style, solid);
      border-right-color: var(--auth-code-input-input-border-right-color, #ddd);
      border-left-width: var(--auth-code-input-input-border-left-width, 1px);
      border-left-style: var(--auth-code-input-input-border-left-style, solid);
      border-left-color: var(--auth-code-input-input-border-left-color, #ddd);
      border-bottom-width: var(--auth-code-input-input-border-bottom-width, 1px);
      border-bottom-style: var(--auth-code-input-input-border-bottom-style, solid);
      border-bottom-color: var(--auth-code-input-input-border-bottom-color, #ddd);
      border-radius: var(--auth-code-input-input-border-radius, 5px);
      -webkit-appearance: var(--auth-code-input-input-appearance, none);
      transform: var(--auth-code-input-input-transform, translateZ(0));
      outline: var(--auth-code-input-input-outline, none);
    }

    input.has-value {
      border: var(--auth-code-input-input-has-value-border, 1px solid #ddd);
      border-bottom: var(--auth-code-input-input-has-value-border-bottom, 1px solid #ddd);
    }

    input:focus {
      border-top-width: var(--auth-code-input-input-focus-border-top-width, 1px);
      border-top-style: var(--auth-code-input-input-focus-border-top-style, solid);
      border-top-color: var(--auth-code-input-input-focus-border-top-color, #ddd);
      border-right-width: var(--auth-code-input-input-focus-border-right-width, 1px);
      border-right-style: var(--auth-code-input-input-focus-border-right-style, solid);
      border-right-color: var(--auth-code-input-input-focus-border-right-color, #ddd);
      border-left-width: var(--auth-code-input-input-focus-border-left-width, 1px);
      border-left-style: var(--auth-code-input-input-focus-border-left-style, solid);
      border-left-color: var(--auth-code-input-input-focus-border-left-color, #ddd);
      border-bottom-width: var(--auth-code-input-input-focus-border-bottom-width, 1px);
      border-bottom-style: var(--auth-code-input-input-focus-border-bottom-style, solid);
      border-bottom-color: var(--auth-code-input-input-focus-border-bottom-color, #ddd);
      box-shadow: var(--auth-code-input-input-focus-box-shadow, 0 1px 5px #ddd);
    }
  `

  reset (isChangesEmitting = false): void {
    // resetting the code to its initial value or to an empty value
    this.onInputCodeChanges()

    if (this.state.isInitialFocusFieldEnabled) {
      // tslint:disable-next-line:no-non-null-assertion
      this.focusOnField(this.initialFocusField)
    }

    if (isChangesEmitting) {
      this.emitChanges()
    }
  }

  onCodeLengthChanges () {
    if (!this.codeLength) {
      return
    }

    this.placeholders = Array.from({ length: this.codeLength }, (_, i) => i)
  }

  onInputCodeChanges () {
    if (this.inputs.length === 0) {
      return
    }

    if (this.isEmpty(this.code)) {
      this.inputs.forEach((input) => {
        this.setInputValue(input, null)
      })
      return
    }

    // @ts-expect-error
    const chars = this.code.toString().trim().split('')
    let isAllCharsAreAllowed = true

    for (const char of chars) {
      if (!this.canInputValue(char)) {
        isAllCharsAreAllowed = false
        break
      }
    }

    this.inputs.forEach((input, index) => {
      const value = isAllCharsAreAllowed ? chars[index] : null
      this.setInputValue(input, value)
    })
  }

  onClick (e: MouseEvent) {
    if (!this.isFocusingOnLastByClickIfFilled) {
      return
    }

    const target = e.target as HTMLInputElement
    const last = this.inputs[this.codeLength - 1]

    if (target === last) {
      return
    }

    const isFilled = this.getCurrentFilledCode().length >= this.codeLength

    if (!isFilled) {
      return
    }

    setTimeout(() => last.focus())
  }

  onInput (e: InputEvent, i: number) {
    const target = e.target as HTMLInputElement
    const value = (e as any).data || target.value

    if (this.isEmpty(value)) {
      return
    }

    if (!this.canInputValue(value)) {
      e.preventDefault()
      e.stopPropagation()
      this.setInputValue(target, null)
      this.setStateForInput(target, InputState.reset)
      return
    }

    const values = value.toString().trim().split('')

    for (let j = 0; j < values.length; j++) {
      const index = j + i

      if (index > this.codeLength - 1) {
        break
      }

      this.setInputValue(this.inputs[index], values[j])
    }

    this.emitChanges()

    const next = i + values.length

    if (next > this.codeLength - 1) {
      target.blur()
      return
    }

    this.inputs[next].focus()
  }

  onPaste (e: ClipboardEvent, i: number) {
    e.preventDefault()
    e.stopPropagation()

    const data = (e.clipboardData != null) ? e.clipboardData.getData('text').trim() : undefined

    if (this.isEmpty(data)) {
      return
    }

    const values = data!.split('')
    let valIndex = 0

    for (let j = i; j < this.inputs.length; j++) {
      if (valIndex === values.length) {
        break
      }

      const input = this.inputs[j]
      const val = values[valIndex]

      if (!this.canInputValue(val)) {
        this.setInputValue(input, null)
        this.setStateForInput(input, InputState.reset)
        return
      }

      this.setInputValue(input, val.toString())
      valIndex++
    }

    this.inputs[i].blur()
    this.emitChanges()
  }

  async onKeydown (e: any, i: number): Promise<void> {
    const target = e.target
    const isTargetEmpty = this.isEmpty(target.value)
    const prev = i - 1

    // processing only the backspace and delete key events
    const isBackspaceKey = await this.isBackspaceKey(e)
    const isDeleteKey = this.isDeleteKey(e)
    if (!isBackspaceKey && !isDeleteKey) {
      return
    }

    e.preventDefault()

    this.setInputValue(target, null)
    if (!isTargetEmpty) {
      this.emitChanges()
    }

    // preventing to focusing on the previous field if it does not exist or the delete key has been pressed
    if (prev < 0 || isDeleteKey) {
      return
    }

    if (isTargetEmpty || this.isPrevFocusableAfterClearing) {
      this.inputs[prev].focus()
    }
  }

  focusOnInputAfterAppearing () {
    if (!this.state.isInitialFocusFieldEnabled) {
      return
    }

    if (this.state.isFocusingAfterAppearingCompleted) {
      return
    }

    this.focusOnField(this.initialFocusField)

    this.state.isFocusingAfterAppearingCompleted = document.activeElement === this.inputs[this.initialFocusField]
  }

  emitChanges () {
    setTimeout(() => this.emitCode(), 50)
  }

  emitCode () {
    const code = this.getCurrentFilledCode()

    document.dispatchEvent(new CustomEvent('code-changed', { detail: code }))
    if (this.codeChanged) {
      this.codeChanged(code)
    }

    if (code.length >= this.codeLength) {
      if (this.codeCompleted) {
        this.codeCompleted(code)
      }
      document.dispatchEvent(new CustomEvent('code-completed', { detail: code }))
    }
  }

  getCurrentFilledCode (): string {
    let code = ''

    for (const input of this.inputs) {
      if (!this.isEmpty(input.value)) {
        code += input.value
      }
    }

    return code
  }

  async isBackspaceKey (e: KeyboardEvent): Promise<boolean> {
    const isBackspace = (e.key && e.key.toLowerCase() === 'backspace') || (e.keyCode && e.keyCode === 8)

    if (isBackspace) {
      return await Promise.resolve(true)
    }

    if (!e.keyCode || e.keyCode !== 229) {
      return await Promise.resolve(false)
    }

    return await new Promise<boolean>((resolve) => {
      setTimeout(() => {
        const input = e.target as HTMLInputElement
        const isReset = this.getStateForInput(input) === InputState.reset

        if (isReset) {
          this.setStateForInput(input, InputState.ready)
        }

        resolve(input.selectionStart === 0 && !isReset)
      })
    })
  }

  isDeleteKey (e: KeyboardEvent): any {
    return (e.key && e.key.toLowerCase() === 'delete') || (e.keyCode && e.keyCode === 46)
  }

  setInputValue (input: HTMLInputElement, value: any) {
    const isEmpty = this.isEmpty(value)
    const valueClassCSS = 'has-value'
    const emptyClassCSS = 'empty'

    if (isEmpty) {
      input.value = ''
      input.classList.remove(valueClassCSS)
      input.parentElement!.classList.add(emptyClassCSS)
    } else {
      input.value = value
      input.classList.add(valueClassCSS)
      input.parentElement!.classList.remove(emptyClassCSS)
    }
  }

  canInputValue (value: any): boolean {
    if (this.isEmpty(value)) {
      return false
    }

    const isDigitsValue = /^[0-9]+$/.test(value.toString())
    return isDigitsValue || (this.isCharsCode || this.isNonDigitsCode)
  }

  focusOnField (index: number): void {
    if (index >= this.codeLength) {
      throw new Error('The index of the focusing input box should be less than the codeLength.')
    }

    this.inputs[index].focus()
  }

  setStateForInput (input: HTMLInputElement, state: InputState): void {
    const index = this.inputs.indexOf(input)

    if (index < 0) {
      return
    }

    this.inputsStates[index] = state
  }

  getStateForInput (input: HTMLInputElement): InputState | undefined {
    const index = this.inputs.indexOf(input)
    return this.inputsStates[index]
  }

  isEmpty (value: any): boolean {
    return value === null || value === undefined || !value.toString().length
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'code-input': CodeInput
  }
}
