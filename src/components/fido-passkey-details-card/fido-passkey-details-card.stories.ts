import {Meta, StoryObj} from '@storybook/web-components'
import {html} from 'lit'

import './fido-passkey-details-card'
import {PasskeyDetails} from "./fido-passkey-details-card";

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


let passkeyDetails: PasskeyDetails = {
    createdAt: '2023-10-12T17:12:13.183221Z',
    createdOperatingSystem: 'Mac OS',
    passkeyActivity: [
        {
            lastUsedAt: '2023-10-13T17:12:13.183221Z',
            operatingSystem: 'Android 14'
        },
        {
            lastUsedAt: '2023-10-14T17:12:13.183221Z',
            operatingSystem: 'Android 14'
        }
    ]
}

export const Default: StoryObj = {
    name: 'Default',
    args: {
        passkeyDetails: passkeyDetails
    },
    render: (args) => {
        return html`
            <fido-passkey-details-card passkeyDetails="${JSON.stringify(args.passkeyDetails)}">
            </fido-passkey-details-card>
        `
    }
}
