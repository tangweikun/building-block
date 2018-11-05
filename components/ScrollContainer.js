import React from 'react'
import styled from 'styled-components'

export class ScrollContainer extends React.Component {
  render() {
    return (
      <OuterWrapper style={this.props.outerStyle}>
        <InnerWrapper>{this.props.children}</InnerWrapper>
      </OuterWrapper>
    )
  }
}

const OuterWrapper = styled.div`
  height: 100px;
  width: 100px;
  overflow: hidden;
  box-sizing: content-box;
`

const InnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  padding-bottom: 17px;
  padding-right: 17px; /* Increase/decrease this value for cross-browser compatibility */
  box-sizing: content-box; /* So the width will be 100% + 17px */
`
