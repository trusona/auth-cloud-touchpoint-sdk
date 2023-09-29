import {Meta, StoryObj} from '@storybook/web-components'
import {html} from 'lit'

import './fido-account-created'

export default {
    title: 'Fido Account Created',
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
            <fido-account-created>
            </fido-account-created>
        `
    }
}
