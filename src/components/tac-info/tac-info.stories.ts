import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'
import { getConfigs } from '../../../storybook-mock-content/utils'

import './tac-info'

export default {
  title: 'Components/TAC Info',
  parameters: {
    layout: 'centered',
  },
  decorators: [(story) => html`<div style="width:100%; padding:2rem; margin:auto">${story()}</div>`],
} as Meta

export const Default: StoryObj = {
  render: (args, { globals: { journeyConfigBase } }) => {
    const config = getConfigs(journeyConfigBase)
    args.globalStyles = config.global
    return html`
        <tac-info .globalStyles=${args.globalStyles} ></tac-info>
    `
  },
};
