import React from 'react'
import styled from 'styled-components'

export class Foo extends React.Component {
  render() {
    return <div>555</div>
  }
}

export const Bar = styled.div`
  height: 100px;
  width: 100px;
  background: red;
`

export * from './Tooltip'
