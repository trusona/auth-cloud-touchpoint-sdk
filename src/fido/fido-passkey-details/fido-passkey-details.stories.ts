import {Meta, StoryObj} from '@storybook/web-components'
import {html} from 'lit'

import './fido-passkey-details'
import PasskeyDetails from "./fido-passkey-details";

export default {
    title: 'Fido Passkey Details',
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        passkeyDetails: {
            description: `Array of PasskeyDetails Objects.
            
                PasskeyDetails {
                    savedText: string,
                    lastUsedText: string
                    lastUsedIsMobile: boolean
                    prevLastUsedText?: string | null
                    prevLastUsedIsMobile?: boolean | null
                }`,
            control: {
                type: 'object'
            }
        },
    }
} as Meta

let passkeyDetails: PasskeyDetails[] = [
    {
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
    }, {
        createdAt: '2023-10-10T17:12:13.183221Z',
        createdOperatingSystem: 'Android 13'
    },
    {
        passkeyActivity: [
            {
                lastUsedAt: '2023-10-03T17:10:13.183221Z',
                operatingSystem: 'Android 10'
            },
            {
                lastUsedAt: '2023-10-01T17:14:13.183221Z',
                operatingSystem: 'Android 10'
            }
        ]
    }
]

export const Default: StoryObj = {
    name: 'Default',
    args: {
        passkeyDetails: passkeyDetails
    },
    render: (args) => {
        return html`
            <fido-passkey-details passkeyDetails="${JSON.stringify(args.passkeyDetails)}">
            </fido-passkey-details>
        `
    }
}
