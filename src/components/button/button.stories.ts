import {Meta, StoryObj} from '@storybook/web-components'
import {html} from 'lit'

import './button'

export default {
    title: 'Auth Button',
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        onClick: {description: 'Callback when button is clicked'},
        isProcessing: {description: 'Add this attribute when user has clicked the button and action is being executed.'},
        isWaitingForInput: {description: 'Add this attribute when user has not entered in a username or completed a valid email.'},
    }
} as Meta

export const Enabled: StoryObj = {
    name: 'Enabled',
    args: {
        isProcessing: false,
        isWaitingForInput: false,
        onClick: () => {
            alert('Button Clicked!')
        }
    },
    render: (args) => {
        return html`
            <auth-button
                    ?isProcessing="${args.isProcessing}"
                    ?isWaitingForInput="${args.isWaitingForInput}"
                    @onClick=${args.onClick}>
                Create Account
            </auth-button>`
    }
}

export const WaitingForInput: StoryObj = {
    name: 'Waiting for input',
    args: {
        isProcessing: false,
        isWaitingForInput: true,
        onClick: () => {
            alert('Button Clicked!')
        }
    },
    render: (args) => {

        return html`
            <auth-button
                    ?isWaitingForInput="${args.isWaitingForInput}"
                    @onClick=${args.onClick}>
                Create Account
            </auth-button>`
    }
}

export const Processing: StoryObj = {
    name: 'Processing',
    args: {
        isProcessing: true,
        isWaitingForInput: false,
        onClick: () => {
            alert('Button Clicked!')
        }
    },
    render: (args) => {
        return html`
            <auth-button
                    ?isProcessing="${args.isProcessing}"
                    @onClick=${args.onClick}>
                Create Account
            </auth-button>`
    }
}

