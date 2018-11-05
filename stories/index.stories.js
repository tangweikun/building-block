import React from 'react'
import { storiesOf } from '@storybook/react'
import { TooltipDemo, ScrollContainerDemo, CardDemo } from '../examples'

storiesOf('Tooltip', module).add('basic', () => <TooltipDemo />)

storiesOf('ScrollContainer', module).add('basic', () => <ScrollContainerDemo />)

storiesOf('Card', module).add('basic', () => <CardDemo />)
