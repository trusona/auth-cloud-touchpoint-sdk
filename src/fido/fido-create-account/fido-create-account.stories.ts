import {Meta, StoryObj} from '@storybook/web-components'
import {html} from 'lit'

import './fido-create-account'

export default {
    title: 'Fido Create Account',
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        email: {
            description: `User's email`
        }
    }
} as Meta

export const Default: StoryObj = {
    name: 'Default',
    args: {
        email: "test@test.com"
    },
    render: (args) => {
        return html`
            <fido-create-account email="${args.email}">
            </fido-create-account>
        `
    }
}
