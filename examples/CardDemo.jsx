import React from 'react'
import styled from 'styled-components'
import { InfoCard } from '../components'

export class CardDemo extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2>InfoCard</h2>
        <Wrapper>
          <Container>
            <h4>Basic</h4>
            <InfoCard mainText="Basic Card" subText="basic card" />
          </Container>
          <Container>
            <h4>With tips</h4>
            <InfoCard
              mainText="With tips"
              subText="with tips"
              withTips
              tipsText="我是提示文案"
            />
          </Container>
        </Wrapper>
      </React.Fragment>
    )
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Container = styled.div`
  min-width: 240px;
`
