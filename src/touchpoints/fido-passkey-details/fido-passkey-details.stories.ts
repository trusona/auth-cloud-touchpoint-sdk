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

    }
} as Meta


export const Default: StoryObj = {
    name: 'Default',
    args:{
        passkeyDetails : [
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
    },
    render: (args) => {
        return html`
            <fido-passkey-details passkeyDetails="${JSON.stringify(args.passkeyDetails)}">
            </fido-passkey-details>
        `
    }
}
