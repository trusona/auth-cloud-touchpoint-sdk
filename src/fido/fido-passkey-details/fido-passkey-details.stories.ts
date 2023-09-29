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

let passkeyDetails : PasskeyDetails[] = [
    {
        savedText: "Saved with iOS 16.2 on April 11, 2023, 12:01am",
        lastUsedText:"iOS 16.2, April 11, 2023, 3:42pm",
        lastUsedIsMobile: true,
        prevLastUsedText:"MacOS 13.0.1, April 23rd, 2023, 4:21pm",
        prevLastUsedIsMobile:false
    },
    {
        savedText: "Saved with Android 13 on April 11, 2023, 12:01am",
        lastUsedText:"Android 13, April 11th, 2023, 3:42pm",
        lastUsedIsMobile: true
    },
]

export const Default: StoryObj = {
    name: 'Default',
    args:{
        passkeyDetails : passkeyDetails
    },
    render: (args) => {
        return html`
            <fido-passkey-details passkeyDetails="${JSON.stringify(args.passkeyDetails)}">
            </fido-passkey-details>
        `
    }
}
