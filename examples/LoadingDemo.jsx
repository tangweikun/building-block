import React from 'react'
import { BouncingLoading, DonutSpinner } from '../components'
import { Wrapper, Container } from './Common'

export class LoadingDemo extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2>BouncingLoading</h2>
        <Wrapper>
          <Container>
            <h4>BouncingLoading</h4>
            <BouncingLoading />
          </Container>
          <Container>
            <h4>DonutSpinner</h4>
            <DonutSpinner />
          </Container>
        </Wrapper>
      </React.Fragment>
    )
  }
}
