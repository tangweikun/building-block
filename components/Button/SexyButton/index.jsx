import React from 'react'
import { ThemedButton } from './ThemedButton'

// TODO: 是否可以使用装饰者模式来重构
export const SexyButton = props => (
  <ThemedButton {...props}>{props.children}</ThemedButton>
)
