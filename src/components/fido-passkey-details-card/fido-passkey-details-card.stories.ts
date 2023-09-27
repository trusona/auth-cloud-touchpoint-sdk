import {Meta, StoryObj} from '@storybook/web-components'
import {html} from 'lit'

import './fido-passkey-details-card'

export default {
    title: 'Fido Passkey Details Card',
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        savedText: {
            description: "Text to indicate the Created Date"
        },
        lastUsedText: {
            description: "Text to indicate the Last Used Date"
        },
        lastUsedIsMobile: {
            description: "Boolean to indicate if the Last Usage was on Mobile",
            table: {defaultValue: {summary: 'false'}}
        },
        prevLastUsedText: {
            description: "[Optional] Text to indicate the Previous Last Used Date"
        },
        prevLastUsedIsMobile: {
            description: "[Optional] Boolean to indicate if the Previous Last Usage was on Mobile",
            table: {defaultValue: {summary: 'false'}}
        }
    }
} as Meta

export const Default: StoryObj = {
    name: 'Default',
    args:{
        savedText: "Saved with iOS 16.2 on April 11, 2023, 12:01am",
        lastUsedText:"iOS 16.2, April 11, 2023, 3:42pm",
        lastUsedIsMobile: true,
        prevLastUsedText:"MacOS 13.0.1, April 23rd, 2023, 4:21pm",
        prevLastUsedIsMobile:false
    },
    render: (args) => {
        return html`
            <fido-passkey-details-card
                    savedText="${args.savedText}"
                    lastUsedText="${args.lastUsedText}"
                    lastUsedIsMobile="${args.lastUsedIsMobile}"
                    prevLastUsedText="${args.prevLastUsedText}"
                    prevLastUsedIsMobile="${args.prevLastUsedIsMobile}"
            >
            </fido-passkey-details-card>
        `
    }
}
