import React from 'react'
import { Tooltip } from '../components'
import { Wrapper, Container } from './Common'

export class TooltipDemo extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2>Tooltip</h2>
        <Wrapper>
          <Container>
            <h4>Basic</h4>
            <Tooltip title="我是提示">鼠标移动到这来</Tooltip>
          </Container>
        </Wrapper>
      </React.Fragment>
    )
  }
}
