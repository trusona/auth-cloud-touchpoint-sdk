import {Meta, StoryObj} from '@storybook/web-components'
import {html} from 'lit'

import './fido-check-email'

export default {
    title: 'Fido/Fido Check Email',
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
            <fido-check-email email="${args.email}">
            </fido-check-email>
        `
    }
}
