import {Meta, StoryObj} from '@storybook/web-components'
import {html} from 'lit'

import './flex-container'

export default {
    title: 'Components/FlexContainer',
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        minWidth: {description: 'Minimum Width Property for the Flex Container', table: {defaultValue: {summary: 'auto'}}}
    }
} as Meta

export const Default: StoryObj = {
    name: 'Default',
    args:{
        minWidth:'auto'
    },
    render: (args) => {
        return html`
            <flex-container minWidth="${args.minWidth}">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum.
                </p>
            </flex-container>
        `
    }
}
