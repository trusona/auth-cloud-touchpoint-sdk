import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import './header1'

export default {
  title: 'Components/Header 1',
  parameters: {
    layout: 'centered',
  }
} as Meta

export const Default: StoryObj = {
  name: 'Default',

  render: () => {
    return html`
      <header-1>
        Create or sign in to your account.
      </header-1>`
  }
}
