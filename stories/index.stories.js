import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  TooltipDemo,
  ScrollContainerDemo,
  CardDemo,
  ButtonDemo,
  LoadingDemo,
} from '../examples'

storiesOf('Button', module).add('SexyButton', () => <ButtonDemo />)

storiesOf('Loading', module).add('BouncingLoading', () => <LoadingDemo />)

storiesOf('Tooltip', module).add('basic', () => <TooltipDemo />)

storiesOf('ScrollContainer', module).add('basic', () => <ScrollContainerDemo />)

storiesOf('Card', module).add('basic', () => <CardDemo />)
