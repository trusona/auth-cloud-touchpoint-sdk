import {Meta, StoryObj} from '@storybook/web-components'
import {html} from 'lit'

import './start-touchpoint'

export default {
    title: 'Touchpoints/Start Touchpoint',
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        started: {
            description: 'Property to indicate if the Flow has been Start, is TRUE this will set the button to the processing state',
            table: {defaultValue: {summary: 'false'}}
        },
        waitingForInput: {
            description: 'Property for Button to be enabled',
            table: {defaultValue: {summary: 'true'}}
        },
        isEmailInput: {
            description: 'Component Property to indicate if the Input is an Email',
            table: {defaultValue: {summary: 'false'}}
        },
        inputAutofocus: {
            description: 'Set the Input Element the Autofocus property',
            table: {defaultValue: {summary: 'false'}}
        },
        inputRequired: {
            description: 'Set the Input Element the Required property',
            table: {defaultValue: {summary: 'false'}}
        },
        inputDisabled: {
            description: 'Set the Input Element the Disabled property',
            table: {defaultValue: {summary: 'false'}}
        },
        inputId: {
            description: 'Input Element Id',
            table: {defaultValue: {summary: 'username'}}
        },
        inputName: {
            description: 'Input Element Name',
            table: {defaultValue: {summary: 'username'}}
        },
        inputType: {
            description: 'Input Element Type',
            table: {defaultValue: {summary: 'username'}}
        },
        inputAutocomplete: {
            description: 'Auto Complete Tags',
            table: {defaultValue: {summary: 'username webauthn'}}
        },
        login: {
            description: 'Login Model Object',
            table: {type: 'Object'}
        },
        globalStyles: {
            description: 'Global Styles as custom CSS styling for components',
            table: {type: 'Object'}
        },
        signInWithBiometricPrompt: {
            description: 'Sign In with Biometric Object',
            table: {type: 'Object'}
        },
        signInAnotherWay: {
            description: 'Callback when the Sign In Another Way Button is clicked',
            table: {type: 'Function'}
        },
        performContinue: {
            description: 'Callback when the Continue button is clicked.',
            table: {type: 'Function'}
        },
    }
} as Meta

export const Default: StoryObj = {
    name: 'Default',
    args: {
        inputDisabled: false,
        inputRequired: true,
        isEmailInput: false,
        started: false,
        waitingForInput: false,
        inputAutofocus:true,
        inputId: 'username',
        inputName: 'username',
        inputType: 'username',
        inputAutocomplete: 'username webauthn',
        login: {},
        globalStyles: {},
        signInWithBiometricPrompt: {},
        performContinue: () => {
            alert('Button Clicked!')
        }
    },
    render: (args) => {
        return html`
            <start-touchpoint inputId="${args.inputId}"
                              inputName="${args.inputName}"
                              inputType="${args.inputType}"
                              inputAutocomplete="${args.inputAutocomplete}"
                              ?started="${args.started}"
                              ?waitingForInput="${args.waitingForInput}"
                              isEmailInput="${args.isEmailInput}"
                              inputRequired="${args.inputRequired}"
                              inputDisabled="${args.inputDisabled}"
                              inputAutofocus="${args.inputAutofocus}"
                              performContinue="${() => args.performContinue()}"
                              login="${args.login}"
                              globalStyles="${args.globalStyles}"
                              signInWithBiometricPrompt="${args.signInWithBiometricPrompt}"
            />
        `
    }
}
export const Email: StoryObj = {
    name: 'Email',
    render: () => {
        return html`
            <start-touchpoint inputId="email_touchpoint"
                              inputName="email_touchpoint"
                              inputType="email"
                              isEmailInput="true"
                              inputRequired="true"
                              inputDisabled="false"
                              performContinue="${() => alert('Button Clicked!')}"/>
        `
    }
}

export const Username: StoryObj = {
    name: 'Username',
    render: () => {
        return html`
            <start-touchpoint inputId="username_touchpoint"
                              inputName="username_touchpoint"
                              signInWithBiometricPrompt='{ "usernameFieldHint" : "Username", "usernameControlText" : "Username" }'
                              inputRequired="true"
                              inputDisabled="false"
                              performContinue="${() => alert('Button Clicked!')}"/>
        `
    }
}
