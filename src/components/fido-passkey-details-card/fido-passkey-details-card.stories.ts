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
        passkeyDetails: {
            description: `PasskeyDetails Object:
            
                PasskeyDetails {
                    createdAt: string,
                    isSync: boolean,
                    createdOperatingSystem: string,
                    passkeyActivity: Array< PasskeyActivity >
                }
                
                PasskeyActivity {
                    lastUsedAt: string,
                    operatingSystem: string
                }`,
            control: {
                type: 'object'
            }
        }
    }
} as Meta


let passkeyDetails: PasskeyDetails = {
    createdAt: '2023-10-12T17:12:13.183221Z',
    isSync: true,
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
