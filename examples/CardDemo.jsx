import React from 'react'
import { InfoCard, CardGroup } from '../components'
import { Wrapper, Container } from './Common'

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
          <Container>
            <h4>Single CardGroup</h4>
            <CardGroup>
              <InfoCard mainText="Basic Card" subText="basic card" />
            </CardGroup>
          </Container>
          <Container>
            <h4>Single CardGroup</h4>
            <CardGroup>
              <InfoCard mainText="Basic Card" subText="basic card" />
              <InfoCard mainText="Basic Card" subText="basic card" />
            </CardGroup>
          </Container>

          <Container>
            <h4>Multiple CardGroup</h4>
            <CardGroup>
              <InfoCard
                mainText="With tips"
                subText="with tips"
                withTips
                tipsText="我是提示文案"
              />
              <InfoCard
                mainText="With tips"
                subText="with tips"
                withTips
                tipsText="我是提示文案"
              />
            </CardGroup>
            <CardGroup>
              <InfoCard mainText="Basic Card" subText="basic card" />
              <InfoCard mainText="Basic Card" subText="basic card" />
              <InfoCard mainText="Basic Card" subText="basic card" />
            </CardGroup>
          </Container>
        </Wrapper>
      </React.Fragment>
    )
  }
}
