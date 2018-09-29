import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { Welcome } from '@storybook/react/demo'
import { Button } from '../components'

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
))

storiesOf('Button', module)
  .add('default', () => <Button>Default</Button>)
  .add('primary', () => (
    <Button type="primary" title="I have title" onClick={action('clicked')}>
      Primary
    </Button>
  ))
  .add('disabled', () => <Button disabled>Disabled</Button>)
  .add('with custom style', () => (
    <Button style={{ color: 'red', borderColor: 'red', height: '60px' }}>
      With Custom Style
    </Button>
  ))
