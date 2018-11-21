import styled, { css } from 'styled-components'
import { ShapedButton } from './ShapedButton.jsx'

export const ThemedButton = styled(ShapedButton)`
  ${props =>
    props.theme === 'pink' &&
    css`
      color: hsl(340, 100%, 30%) !important;
      background-color: hsl(340, 100%, 75%);
      box-shadow: inset rgba(255, 254, 255, 0.6) 0 0.3em 0.3em,
        inset rgba(0, 0, 0, 0.15) 0 -0.1em 0.3em, hsl(340, 70%, 50%) 0 0.1em 3px,
        hsl(340, 80%, 40%) 0 0.3em 1px, rgba(0, 0, 0, 0.2) 0 0.5em 5px;

      &:hover {
        background-color: hsl(340, 100%, 83%);
      }
    `}

  ${props =>
    props.theme === 'blue' &&
    css`
      color: hsl(208, 50%, 40%) !important;
      background-color: hsl(208, 100%, 75%);
      box-shadow: inset rgba(255, 254, 255, 0.6) 0 0.3em 0.3em,
        inset rgba(0, 0, 0, 0.15) 0 -0.1em 0.3em, hsl(208, 50%, 55%) 0 0.1em 3px,
        hsl(208, 50%, 40%) 0 0.3em 1px, rgba(0, 0, 0, 0.2) 0 0.5em 5px;

      &:hover {
        background-color: hsl(208, 100%, 83%);
      }
    `}

  ${props =>
    props.theme === 'green' &&
    css`
      color: hsl(88, 70%, 30%) !important;
      background-color: hsl(88, 70%, 60%);
      box-shadow: inset rgba(255, 254, 255, 0.6) 0 0.3em 0.3em,
        inset rgba(0, 0, 0, 0.15) 0 -0.1em 0.3em, hsl(88, 70%, 40%) 0 0.1em 3px,
        hsl(88, 70%, 30%) 0 0.3em 1px, rgba(0, 0, 0, 0.2) 0 0.5em 5px;

      &:hover {
        background-color: hsl(88, 70%, 75%);
      }
    `}


  ${props =>
    props.theme === 'origin' &&
    css`
      color: hsl(39, 100%, 30%) !important;
      background-color: hsl(39, 100%, 50%);
      box-shadow: inset rgba(255, 254, 255, 0.6) 0 0.3em 0.3em,
        inset rgba(0, 0, 0, 0.15) 0 -0.1em 0.3em, hsl(39, 100%, 40%) 0 0.1em 3px,
        hsl(39, 100%, 30%) 0 0.3em 1px, rgba(0, 0, 0, 0.2) 0 0.5em 5px;

      &:hover {
        background-color: hsl(39, 100%, 65%);
      }
    `}
`
