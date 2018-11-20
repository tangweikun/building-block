import React from 'react'
import { SexyButton } from '../components'
import { Wrapper, Container } from './Common'

export class ButtonDemo extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2>Button</h2>
        <Wrapper>
          <Container>
            <h4>Basic</h4>
            <SexyButton>Button</SexyButton>
            <SexyButton data-icon="✆" theme="blue" shape="brackets">
              Call
            </SexyButton>
            <SexyButton data-icon="✰" theme="pink" shape="skew">
              Stars
            </SexyButton>
            <SexyButton data-icon="✍" theme="green">
              Blog
            </SexyButton>
            <SexyButton data-icon="☺" theme="pink" shape="oval" iconCentered />
            <SexyButton
              data-icon="✪"
              theme="origin"
              shape="shield"
              xl
              iconCentered
            />
            <SexyButton
              data-icon=""
              theme="blue"
              shape="back"
              xl
              iconCentered
            />
            <SexyButton
              data-icon="✔"
              theme="origin"
              shape="drop"
              iconCentered
            />
          </Container>
        </Wrapper>
      </React.Fragment>
    )
  }
}
