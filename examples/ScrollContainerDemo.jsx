import React from 'react'
import styled from 'styled-components'
import { ScrollContainer } from '../components'

export class ScrollContainerDemo extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2>ScrollContainer</h2>
        <Wrapper>
          <Container>
            <h4>Default</h4>
            <ScrollContainer>
              `ScrollContainer`的默认长宽为`100px`，可以通过`outerStyle`来改变容器的宽高和样式
            </ScrollContainer>
          </Container>

          <Container>
            <h4>With outerStyle</h4>
            <ScrollContainer
              outerStyle={{
                border: '4px solid purple',
                paddingLeft: '6px',
                width: '120px',
                height: '80px',
              }}
            >
              `ScrollContainer`的默认长宽为`100px`，可以通过`outerStyle`来改变容器的宽高和样式
            </ScrollContainer>
          </Container>

          <Container>
            <h4>With Multiple block</h4>
            <ScrollContainer
              outerStyle={{
                border: '4px solid purple',
                paddingLeft: '6px',
                width: '160px',
                height: '160px',
              }}
            >
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(x => (
                <div key={x}>包含多个块级元素</div>
              ))}
            </ScrollContainer>
          </Container>
        </Wrapper>
      </React.Fragment>
    )
  }
}

const Wrapper = styled.div`
  display: flex;
`

const Container = styled.div`
  min-width: 300px;
`
