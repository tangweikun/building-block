import React from 'react'
import styled, { keyframes } from 'styled-components'

export const BouncingLoading = () => (
  <Wrapper>
    {[0, 1, 2].map(x => (
      <Ball key={x} />
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
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  margin: 0.2rem;
  background: #8385aa;
  position: relative;
  animation: ${bouncing} 0.6s alternate infinite;

  &:nth-child(2) {
    animation-delay: 0.2s;
  }

  &:nth-child(3) {
    animation-delay: 0.4s;
  }
`
