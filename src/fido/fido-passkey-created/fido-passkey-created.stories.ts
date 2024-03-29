import {Meta, StoryObj} from '@storybook/web-components'
import {html} from 'lit'

import './fido-passkey-created'

export default {
    title: 'Fido/Fido Passkey Created',
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
            <fido-passkey-created>
            </fido-passkey-created>
        `
    }
}
