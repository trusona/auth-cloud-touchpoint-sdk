import {Meta, StoryObj} from '@storybook/web-components'
import {html} from 'lit'

import './fido-create-passkey'

export default {
    title: 'Fido Create Passkey',
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
    render: (args) => {
        return html`
            <fido-create-passkey>
            </fido-create-passkey>
        `
    }
}
