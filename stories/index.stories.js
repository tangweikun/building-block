import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Button, Welcome } from '@storybook/react/demo'
import { Foo, Bar, Tooltip } from '../components'

storiesOf('Tooltip', module).add('to Storybook', () => (
  <div style={{ margin: '100px' }}>
    <Tooltip title="我是提示">鼠标移动到这来</Tooltip>
  </div>
))

storiesOf('Button', module)
  .add('foo', () => <Foo />)
  .add('bar', () => <Bar />)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
