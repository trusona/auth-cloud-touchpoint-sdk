import {Meta, StoryObj} from '@storybook/web-components'
import {html} from 'lit'

import './fido-passkey-details-card'

export default {
    title: 'Fido Passkey Details Card',
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
            <fido-passkey-details-card>
            </fido-passkey-details-card>
        `
    }
}
