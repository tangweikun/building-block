import styled from 'styled-components'

export const ToggleSwitch = styled.input.attrs({
  type: 'checkbox',
})`
  --size: ${props => props.size || '20px'};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    border-radius: 50%;
    left: calc(var(--size) * -0.2);
    top: calc(var(--size) * -0.2);
    width: var(--size);
    height: var(--size);
    background: white;
    z-index: 2;
    transition: all 0.4s;
  }

  &::after {
    content: '';
    position: absolute;
    left: calc(var(--size) * -0.2 - 1px);
    top: calc(var(--size) * -0.2 - 1px);
    width: calc(var(--size) * 2 + 2px);
    border-radius: var(--size);
    height: calc(var(--size) + 2px);
    background: #b8b8bb;
    z-index: 1;
    transition: all 0.4s;
  }

  &:checked {
    &::before {
      transform: translateX(var(--size));
    }
  }

  &:checked {
    &::after {
      background: #7983ff;
    }
  }
`
