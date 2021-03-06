import React from 'react'
import { ScrollContainer } from '../components'
import { Wrapper, Container, Block, InlineBlock } from './Common'

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
                width: '40px',
                height: '200px',
              }}
            >
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(x => (
                <Block key={x} />
              ))}
            </ScrollContainer>
          </Container>

          <Container>
            <h4>With noWrap</h4>
            <ScrollContainer
              noWrap
              outerStyle={{
                border: '4px solid purple',
                width: '200px',
                height: '40px',
                whiteSpace: 'no-wrap',
              }}
            >
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(x => (
                <InlineBlock key={x} />
              ))}
            </ScrollContainer>
          </Container>
        </Wrapper>
      </React.Fragment>
    )
  }
}
