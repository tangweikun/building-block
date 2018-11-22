import React from 'react'
import { BouncingLoading } from '../components'
import { Wrapper, Container } from './Common'

export class LoadingDemo extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2>BouncingLoading</h2>
        <Wrapper>
          <Container>
            <h4>Basic</h4>
            <BouncingLoading />
          </Container>
        </Wrapper>
      </React.Fragment>
    )
  }
}
