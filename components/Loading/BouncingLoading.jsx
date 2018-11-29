import React from 'react'
import styled, { keyframes } from 'styled-components'

export const BouncingLoading = props => (
  <Wrapper>
    {[0, 1, 2].map(x => (
      <Ball size={props.size} key={x} />
    ))}
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

const bouncing = keyframes`
  to {
		opacity: 0.1;
		transform: translateY(-100%)
	}
`

export const Ball = styled.div`
  border-radius: 50%;
  margin: 0.2rem;
  position: relative;
  animation: ${bouncing} 0.6s alternate infinite;

  --size: ${props => props.size || '1rem'};
  --bg: ${props => props.bg || '#8385aa'}
  width: var(--size);
  height: var(--size);
  background: var(--bg);

  &:nth-child(2) {
    animation-delay: 0.2s;
  }

  &:nth-child(3) {
    animation-delay: 0.4s;
  }
`
