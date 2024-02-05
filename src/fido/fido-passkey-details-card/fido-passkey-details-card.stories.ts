import {Meta, StoryObj} from '@storybook/web-components'
import {html} from 'lit'

import './fido-passkey-details-card'
import {PasskeyActivity} from "@trusona/webauthn";

export default {
    title: 'Fido/Fido Passkey Details Card',
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        passkeyActivities: {
            description: `Array of PasskeyActivity Objects from Trusona WebAuthN SDK:
            
            PasskeyActivity {
                credentialActivityType: CredentialActivityType
                credentialId: string
                userIdentifier: string
                userAgent: string
                ipAddress: string
                operatingSystem: string
                createdAt: Date
                credentialFlags: Map< CredentialFlag, boolean >
            }`,
            control: {
                type: 'object'
            }
        }
    }
} as Meta

let passkeyActivities: Array<PasskeyActivity> = [
    {
        'id': '7eb8dc64-14d8-4906-ae59-c44b8cdd7d0f',
        'credentialId': '4d2af8e5-6095-4dc5-ab37-a139e469deee',
        'userIdentifier': 'test_kev_124',
        'userAgent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Mobile Safari/537.36',
        'createdAt': '2023-10-12T16:47:47.116681Z',
        'ipAddress': '186.176.45.128',
        'operatingSystem': 'Android 10',
        'credentialActivityType': 'REGISTRATION',
        'credentialFlags': {
            'USER_PRESENT': true,
            'BACKUP_STATE': true,
            'EXTENSION_DATA': false,
            'BACKUP_ELIGIBILITY': true,
            'USER_VERIFIED': true
        }
    },
    {
        'id': 'c7514fc4-fc1c-45eb-8a30-d2b62fa3a5aa',
        'credentialId': '4d2af8e5-6095-4dc5-ab37-a139e469deee',
        'userIdentifier': 'test_kev_124',
        'userAgent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36',
        'createdAt': '2023-10-12T17:12:13.183221Z',
        'ipAddress': '186.176.45.128',
        'operatingSystem': 'Mac OS X 10.15',
        'credentialActivityType': 'ASSERTION',
        'credentialFlags': {
            'USER_PRESENT': true,
            'BACKUP_STATE': true,
            'EXTENSION_DATA': false,
            'BACKUP_ELIGIBILITY': true,
            'USER_VERIFIED': true
        }
    }
]

export const Default: StoryObj = {
    name: 'Default',
    args: {
        passkeyActivities: passkeyActivities
    },
    render: (args) => {
        return html`
            <fido-passkey-details-card passkeyActivities="${JSON.stringify(args.passkeyActivities)}">
            </fido-passkey-details-card>
        `
    }
}
