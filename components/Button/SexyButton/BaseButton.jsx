import styled, { css } from 'styled-components'

export const BaseButton = styled.button`
  padding: 0.5em 0.6em 0.4em;
  margin: 0.5em;
  display: inline-block;
  position: relative;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.4s ease-in-out;
  user-select: none;
  font-weight: bold;
  text-shadow: rgba(255, 255, 255, 0.5) 0 1px;
  background-image: radial-gradient(
    rgba(255, 255, 255, 0.7) 0,
    rgba(255, 255, 255, 0.5) 50%,
    rgba(255, 255, 255, 0) 100%
  );

  border: none;
  font: 24px/1em 'Droid Sans', sans-serif;
  border-top: 1px solid rgba(255, 255, 255, 0.8);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  color: hsl(0, 0%, 40%);
  background-color: hsl(0, 0%, 75%);
  box-shadow: inset rgba(255, 254, 255, 0.6) 0 0.3em 0.3em,
    inset rgba(0, 0, 0, 0.15) 0 -0.1em 0.3em, hsl(0, 0%, 60%) 0 0.1em 3px,
    hsl(0, 0%, 45%) 0 0.3em 1px, rgba(0, 0, 0, 0.2) 0 0.5em 5px;

  &:hover {
    background-color: hsl(0, 0%, 83%);
  }

  &:focus {
    outline: none;
    color: rgba(254, 255, 255, 0.9) !important;
    text-shadow: rgba(0, 0, 0, 0.2) 0 1px 2px;
  }

  &:active {
    box-shadow: inset rgba(255, 255, 255, 0.6) 0 0.3em 0.3em,
      inset rgba(0, 0, 0, 0.2) 0 -0.1em 0.3em, rgba(0, 0, 0, 0.4) 0 0.1em 1px,
      rgba(0, 0, 0, 0.2) 0 0.2em 6px;
    transform: translateY(0.2em);
  }

  &::before {
    font: 1.2em/0 sans-serif;
    content: attr(data-icon);
    margin-right: 6px;
  }

  ${props =>
    props.iconCentered &&
    css`
      &::before {
        display: block;
        height: 0.75em;
        line-height: 0.75em;
        margin: 0;
      }
    `}

  ${props =>
    props.xl &&
    css`
      font-size: 32px;
    `}
`
