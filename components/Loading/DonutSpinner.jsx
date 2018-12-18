import styled, { keyframes } from 'styled-components'

const dotSpin = keyframes`
  to {
		transform: rotateZ(360deg)
	}
`

export const DonutSpinner = styled.div`
  border-radius: 50%;
  animation: ${dotSpin} 1s infinite linear;
  margin: 0 auto;

  --size: ${props => props.size || '40px'};
  --color: ${props => props.color || '#7983ff'};
  border: calc(var(--size) / 12) solid rgba(0, 0, 0, 0.1);
  width: var(--size);
  height: var(--size);
  border-left-color: var(--color);
  border-right-color: var(--color);
`
