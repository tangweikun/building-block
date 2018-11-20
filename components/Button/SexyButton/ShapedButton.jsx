import styled, { css } from 'styled-components'
import { BaseButton } from './BaseButton'

export const ShapedButton = styled(BaseButton)`
  ${props =>
    props.shape === 'baskets' &&
    css`
      border-top: none;
      border-radius: 0.5em / 1em;
    `}

  ${props =>
    props.shape === 'skew' &&
    css`
      border-top: none;
      padding-right: 1.2em;
      padding-left: 0.8em;
      border-radius: 5em 1em / 5em 1em;
    `}

  ${props =>
    props.shape === 'oval' &&
    css`
      padding-left: 0.8em;
      padding-right: 0.8em;
      border-radius: 1.5em / 1em;
    `}

  ${props =>
    props.shape === 'shield' &&
    css`
      border-radius: 0.4em 0.4em 2em 2em / 0.4em 0.4em 3em 3em;
    `}

  ${props =>
    props.shape === 'back' &&
    css`
      border-top-color: rgba(255, 255, 255, 0.5);
      border-radius: 1.6em 1.6em 1em 1em / 4em 4em 1em 1em;
    `}

  ${props =>
    props.shape === 'drop' &&
    css`
      border-top: none;
      border-radius: 2em 5em 2em 0.6em / 2em 4em 2em 0.6em;
    `}
`
