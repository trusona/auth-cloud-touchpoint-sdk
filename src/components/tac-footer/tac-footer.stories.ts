import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'
import { getConfigs } from '../../../storybook-mock-content/utils'

import './tac-footer'

export default {
  title: 'TAC Footer',
  parameters: {
    layout: 'centered',
  },
  decorators: [(story) => html`<div style="margin:0;width:50vw; height:100vh">${story()}</div>`],
} as Meta

export const Default: StoryObj = {
  render: (args, { globals: { journeyConfigBase } }) => {
    const config = getConfigs(journeyConfigBase)
    args.globalStyles = config.global
    return html`
        <tac-footer .globalStyles=${args.globalStyles} ></tac-footer>
    `
  },
};
