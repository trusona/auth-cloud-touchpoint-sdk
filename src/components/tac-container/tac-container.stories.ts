import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'
import { getConfigs } from '../../../storybook-mock-content/utils'

import './tac-container'

export default {
  title: 'TAC Container',
  parameters: {
    layout: 'centered',
  }
} as Meta

export const Default: StoryObj = {
  render: (args, { globals: { journeyConfigBase } }) => {
    const config = getConfigs(journeyConfigBase)
    args.globalStyles = config.global
    return html`
        <tac-container .globalStyles=${args.globalStyles}><h4>Column 1</h4></tac-container>
    `
  },
};
