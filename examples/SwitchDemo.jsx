import React from 'react'
import { ToggleSwitch } from '../components'
import { Wrapper, Container } from './Common'

export class SwitchDemo extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2>ToggleSwitch</h2>
        <Wrapper>
          <Container>
            <h4>Default Size</h4>
            <ToggleSwitch />
            <h4>Custom Size</h4>
            <ToggleSwitch size="15px" />
            <h4>Custom Size</h4>
            <ToggleSwitch size="60px" />
          </Container>
        </Wrapper>
      </React.Fragment>
    )
  }
}
