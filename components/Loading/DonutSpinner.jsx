import styled, { keyframes } from 'styled-components'

const dotSpin = keyframes`
  to {
		transform: rotateZ(360deg)
	}
`

export const DonutSpinner = styled.div`
  --size: 30px;
  width: var(--size);
  height: var(--size);
  border: 4px solid rgba(0, 0, 0, 0.1);
  display: inline-block;
  border-radius: 50%;
  border-left-color: #7983ff;
  animation: ${dotSpin} 1s infinite linear;
`
