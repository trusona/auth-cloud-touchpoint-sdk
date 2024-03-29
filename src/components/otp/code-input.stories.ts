import {Meta, StoryObj} from '@storybook/web-components'
import {html} from 'lit'

import './code-input'

export default {
    title: 'Components/Code Input',
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        codeLength: {description: 'Number of characters in the code', table: {defaultValue: {summary: '6'}}}
    }
} as Meta

export const Enabled: StoryObj = {
    name: 'Enabled',
    args: {
        codeLength: 6,
    },
    render: (args) => {
        return html`
            <script>
                const resetOTP = () => {
                    const otp = document.querySelector('code-input');
                    otp.reset();
                }

                document.addEventListener(
                        "code-changed",
                        (e) => {
                            // console.log('Auth Code Changed...', e.detail)
                        },
                        false,
                );

                document.addEventListener(
                        "code-completed",
                        (e) => {
                            alert('Auth Code Completed with code: ' + e.detail)
                        },
                        false,
                );
            </script>
            <code-input codeLength="${args.codeLength}"></code-input>
            <button style="display: block;margin-left: auto; margin-right: auto; margin-top: 1.5rem"
                    onclick="resetOTP()" type="button">Reset OTP
            </button>
        `
    }
}


