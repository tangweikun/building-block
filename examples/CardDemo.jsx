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
            <InfoCard subText="basic card">Basic Card</InfoCard>
          </Container>
          <Container>
            <h4>With tips</h4>
            <InfoCard subText="with tips" withTips tipsText="我是提示文案">
              With tips
            </InfoCard>
          </Container>
          <Container>
            <h4>Single CardGroup</h4>
            <CardGroup>
              <InfoCard subText="basic card">Basic Card</InfoCard>
            </CardGroup>
          </Container>
          <Container>
            <h4>Single CardGroup</h4>
            <CardGroup>
              <InfoCard subText="basic card">Basic Card</InfoCard>
              <InfoCard subText="basic card">Basic Card</InfoCard>
            </CardGroup>
          </Container>

          <Container>
            <h4>Multiple CardGroup</h4>
            <CardGroup>
              <InfoCard subText="with tips" withTips tipsText="我是提示文案">
                <div>With tips</div>
                <div>With tips</div>
              </InfoCard>
              <InfoCard subText="with tips" withTips tipsText="我是提示文案">
                With tips
              </InfoCard>
            </CardGroup>
            <CardGroup>
              <InfoCard subText="basic card">Basic Card</InfoCard>
              <InfoCard subText="basic card">Basic Card</InfoCard>
              <InfoCard subText="basic card">Basic Card</InfoCard>
            </CardGroup>
          </Container>
        </Wrapper>
      </React.Fragment>
    )
  }
}
