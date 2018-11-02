import React from 'react'
import styled from 'styled-components'

// TODO: 允许设置不同Hint的大小(small/normal/large)

export class Tooltip extends React.PureComponent {
  state = { visibility: 'hidden' }

  showHint = () => this.setState({ visibility: 'visible' })

  hideHint = () => this.setState({ visibility: 'hidden' })

  render() {
    const {
      title,
      hintWidth = 160,
      triangleSize = 10,
      hintHeight = 40,
    } = this.props
    const hintTop = -(hintHeight + triangleSize)

    return (
      <TooltipWrapper onMouseEnter={this.showHint} onMouseLeave={this.hideHint}>
        <Hint
          width={hintWidth}
          height={hintHeight}
          top={hintTop}
          visibility={this.state.visibility}
        >
          {title}
          <Triangle triangleSize={triangleSize} />
        </Hint>
        {this.props.children}
      </TooltipWrapper>
    )
  }
}

const TooltipWrapper = styled.div`
  position: relative;
  text-align: center;
`

const Hint = styled.div`
  font-size: 12px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #212529;
  border-radius: 4px;
  box-shadow: 4px 4px 30px 0 rgba(0, 0, 0, 0.2);
  width: ${props => props.width + 'px'};
  left: calc(50% - ${props => props.width / 2 + 'px'});
  height: ${props => props.height + 'px'};
  top: ${props => props.top + 'px'};
  visibility: ${props => props.visibility};
`

const Triangle = styled.div`
  position: absolute;
  border-style: solid;
  border-color: #212529 transparent transparent transparent;
  bottom: ${props => -2 * props.triangleSize + 'px'};
  border-width: ${props => props.triangleSize + 'px'};
`
