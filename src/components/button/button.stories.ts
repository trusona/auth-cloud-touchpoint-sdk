import {Meta, StoryObj} from '@storybook/web-components'
import { action } from '@storybook/addon-actions';
import {html} from 'lit'

import './button'


const processingIcon:string = `<span>
        <style>
          @keyframes spin {
            to {
              transform: rotate(360deg)
            }
          }
          .animate-spin {
            animation: spin 1s linear infinite
          }
        </style>
        <svg class="animate-spin" width="26" height="26" viewBox="0 0 26 26" fill="none"
           xmlns="http://www.w3.org/2000/svg">
          <path d="M13 1.75V5.5" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M13 24.25V20.5" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M5.05078 5.04004L7.70078 7.69004" stroke="white" stroke-width="2.5" stroke-linecap="round"
                stroke-linejoin="round"/>
          <path d="M20.9508 20.9501L18.3008 18.3" stroke="white" stroke-width="2.5" stroke-linecap="round"
                stroke-linejoin="round"/>
          <path d="M1.75 13H5.5" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M24.25 13H20.5" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M5.05078 20.9501L7.70078 18.3" stroke="white" stroke-width="2.5" stroke-linecap="round"
                stroke-linejoin="round"/>
          <path d="M20.9508 5.04004L18.3008 7.69004" stroke="white" stroke-width="2.5" stroke-linecap="round"
                stroke-linejoin="round"/>
        </svg>
      </span>`

export default {
    title: 'Components/AuthButton',
    component: 'auth-button',
    tags: ['autodocs'],
    argTypes: {
        onClick: {
            action: 'clicked',
            description: 'Function to call when the button is clicked',
            table: {
                defaultValue: { summary: 'undefined' },
            },
        },
        isProcessing: {
            control: 'boolean',
            description: 'Indicates if the button is in processing state',
            table: {
                defaultValue: { summary: 'false' },
            },
        },
        processingIcon: {
            control: 'text',
            description: 'SVG icon shown when the button is processing',
            table: {
                defaultValue: { summary: 'undefined' },
            },
        },
        isWaitingForInput: {
            control: 'boolean',
            description: 'Disables the button when waiting for user input',
            table: {
                defaultValue: { summary: 'false' },
            },
        },
        inlineStyle: {
            control: 'text',
            description: 'Inline style to apply to the button',
            table: {
                defaultValue: { summary: '""' },
            },
        },
        btnId: {
            control: 'text',
            description: 'ID attribute of the button',
            table: {
                defaultValue: { summary: '""' },
            },
        },
    },
    // @ts-ignore
} as Meta<typeof AuthButton>;

// @ts-ignore
const Template: StoryObj<typeof AuthButton> = {
    render: (args: { onClick: unknown; isProcessing: unknown; processingIcon: unknown; isWaitingForInput: unknown; inlineStyle: unknown; btnId: unknown; }) => html`
    <auth-button
      .onClick=${action('clicked')}
      .isProcessing=${args.isProcessing}
      .processingIcon=${args.processingIcon}
      .isWaitingForInput=${args.isWaitingForInput}
      .inlineStyle=${args.inlineStyle}
      .btnId=${args.btnId}
    >Continue</auth-button>
  `,
    args: {
        isProcessing: false,
        processingIcon: processingIcon,
        isWaitingForInput: false,
        inlineStyle: '',
        btnId: 'authButtonId',
    },
    argTypes: {
        onClick: {
            table: {
                type: { summary: 'function' },
                defaultValue: { summary: 'undefined' },
            },
        },
    },
};

export const Default = Template;



