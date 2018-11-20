import React from 'react'
import styled from 'styled-components'
import { StyledButton } from './StyledButton'
import './index.module.css'

export class SexyButton extends React.Component {
  render() {
    const { theme = 'silver' } = this.props
    const Button = ThemedButton(theme)

    return (
      <Button className={this.props.shape} {...this.props}>
        {this.props.children}
      </Button>
    )
  }
}

const ThemedButton = theme =>
  ({
    silver: StyledButton,
    blue: BlueButton,
    pink: PinkButton,
    green: GreenButton,
    origin: OrangeButton,
  }[theme])

const BlueButton = styled(StyledButton)`
  color: hsl(208, 50%, 40%) !important;
  background-color: hsl(208, 100%, 75%);
  box-shadow: inset rgba(255, 254, 255, 0.6) 0 0.3em 0.3em,
    inset rgba(0, 0, 0, 0.15) 0 -0.1em 0.3em, hsl(208, 50%, 55%) 0 0.1em 3px,
    hsl(208, 50%, 40%) 0 0.3em 1px, rgba(0, 0, 0, 0.2) 0 0.5em 5px;

  &:hover {
    background-color: hsl(208, 100%, 83%);
  }
`

const PinkButton = styled(StyledButton)`
  color: hsl(340, 100%, 30%) !important;
  background-color: hsl(340, 100%, 75%);
  box-shadow: inset rgba(255, 254, 255, 0.6) 0 0.3em 0.3em,
    inset rgba(0, 0, 0, 0.15) 0 -0.1em 0.3em, hsl(340, 70%, 50%) 0 0.1em 3px,
    hsl(340, 80%, 40%) 0 0.3em 1px, rgba(0, 0, 0, 0.2) 0 0.5em 5px;

  &:hover {
    background-color: hsl(340, 100%, 83%);
  }
`

const GreenButton = styled(StyledButton)`
  color: hsl(88, 70%, 30%) !important;
  background-color: hsl(88, 70%, 60%);
  box-shadow: inset rgba(255, 254, 255, 0.6) 0 0.3em 0.3em,
    inset rgba(0, 0, 0, 0.15) 0 -0.1em 0.3em, hsl(88, 70%, 40%) 0 0.1em 3px,
    hsl(88, 70%, 30%) 0 0.3em 1px, rgba(0, 0, 0, 0.2) 0 0.5em 5px;

  &:hover {
    background-color: hsl(88, 70%, 75%);
  }
`

const OrangeButton = styled(StyledButton)`
  color: hsl(39, 100%, 30%) !important;
  background-color: hsl(39, 100%, 50%);
  box-shadow: inset rgba(255, 254, 255, 0.6) 0 0.3em 0.3em,
    inset rgba(0, 0, 0, 0.15) 0 -0.1em 0.3em,
    /* inner shadow */ hsl(39, 100%, 40%) 0 0.1em 3px,
    hsl(39, 100%, 30%) 0 0.3em 1px,
    /* color border */ rgba(0, 0, 0, 0.2) 0 0.5em 5px;

  &:hover {
    background-color: hsl(39, 100%, 65%);
  }
`
