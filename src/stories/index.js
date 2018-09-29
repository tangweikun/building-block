import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { Welcome } from '@storybook/react/demo'
import { Button } from '../components'
import { SuccessfullyOrderedModal } from './modal-successfully-ordered'
import { InsufficientBalanceModal } from './modal-insufficient-balance'

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
))

storiesOf('Modal', module)
  .add('投注成功', () => <SuccessfullyOrderedModal />)
  .add('余额不足', () => <InsufficientBalanceModal />)

storiesOf('Button', module)
  .add('Default', () => <Button>Default</Button>)
  .add('Primary', () => (
    <Button theme="primary" title="I have title" onClick={action('clicked')}>
      Primary
    </Button>
  ))
  .add('Disabled', () => <Button disabled>Disabled</Button>)
  .add('With custom style', () => (
    <Button style={{ color: 'red', borderColor: 'red', height: '60px' }}>
      With Custom Style
    </Button>
  ))
