import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
to {
	transform: rotateY(1080deg)
}
`

export const RotateCircle = styled.div`
  border-radius: 50%;
  margin: 0 auto;
  animation: ${rotate} 1s ease-in-out infinite;

  --size: ${props => props.size || '40px'};
	--bg: ${props => props.bg || 'deeppink'}
  width: var(--size);
  height: var(--size);
  background: var(--bg);
`
