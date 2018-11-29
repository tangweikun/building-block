import React from 'react'
import { BouncingLoading, DonutSpinner, RotateCircle } from '../components'
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
            <DonutSpinner size="100px" />
            <h4>DonutSpinner</h4>
            <DonutSpinner color="deeppink" />
          </Container>
          <Container>
            <h4>RotateCircle</h4>
            <RotateCircle />
          </Container>
        </Wrapper>
      </React.Fragment>
    )
  }
}
