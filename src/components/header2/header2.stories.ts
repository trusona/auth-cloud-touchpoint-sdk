import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import './header2'

export default {
  title: 'Header 2',
  parameters: {
    layout: 'centered',
  }
} as Meta

export const Default: StoryObj = {
  name: 'Default',

  render: () => {
    return html`
      <header-2>
        Create or sign in to your account.
      </header-2>`
  }
}
