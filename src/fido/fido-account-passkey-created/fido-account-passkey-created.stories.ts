import {Meta, StoryObj} from '@storybook/web-components'
import {html} from 'lit'

import './fido-account-passkey-created'

export default {
    title: 'Fido/Fido Account Passkey Created',
    parameters: {
        layout: 'centered',
    },
    argTypes: {

    }
} as Meta

export const Default: StoryObj = {
    name: 'Default',
    args:{

    },
    render: () => {
        return html`
            <fido-account-passkey-created>
            </fido-account-passkey-created>
        `
    }
}
