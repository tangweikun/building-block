import React from 'react'
import { storiesOf } from '@storybook/react'
import { TooltipDemo, ScrollContainerDemo } from '../examples'

storiesOf('Tooltip', module).add('basic', () => <TooltipDemo />)

storiesOf('ScrollContainer', module).add('basic', () => <ScrollContainerDemo />)
