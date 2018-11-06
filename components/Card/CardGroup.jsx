import React from 'react'
import styled from 'styled-components'

export const CardGroup = props => <Group>{props.children}</Group>

const Group = styled.div`
  display: flex;
  flex-direction: row;
  background: #fff;

  &:not(:last-child) {
    border-bottom: 1px solid #dee2e6;
  }
`
