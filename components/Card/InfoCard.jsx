import React from 'react'
import styled, { css } from 'styled-components'
import { Tooltip } from '../Tooltip'

// TODO:
const INFO_ICON = (
  <svg width="14px" height="14px" viewBox="86 296 20 20" version="1.1">
    <g
      stroke="none"
      strokeWidth="1"
      fill="rgb(199, 201, 204)"
      fillRule="evenodd"
      transform="translate(86.000000, 296.000000)"
    >
      <path
        d="M9,15 L11,15 L11,9 L9,9 L9,15 L9,15 Z M10,0 C4.5,0 0,4.5 0,10 C0,15.5 4.5,20 10,20 C15.5,20 20,15.5 20,10 C20,4.5 15.5,0 10,0 L10,0 Z M10,18 C5.6,18 2,14.4 2,10 C2,5.6 5.6,2 10,2 C14.4,2 18,5.6 18,10 C18,14.4 14.4,18 10,18 L10,18 Z M9,7 L11,7 L11,5 L9,5 L9,7 L9,7 Z"
        fill=""
      />
    </g>
  </svg>
)

export class InfoCard extends React.Component {
  render() {
    const { withTips, tipsText } = this.props

    return (
      <InfoCardWrapper>
        <MainText>{this.props.mainText}</MainText>
        <SubText>{this.props.subText}</SubText>
        {withTips && (
          <Info>
            <Tooltip title={tipsText}>
              <Icon>{INFO_ICON}</Icon>
            </Tooltip>
          </Info>
        )}
      </InfoCardWrapper>
    )
  }
}

const Icon = styled.div`
  width: 20px;
  height: 20px;
`

const Info = styled.div`
  position: absolute;
  right: 5px;
  top: 5px;
`

const MainText = styled.div`
  font-size: 1.6em;
  color: #495057;
  margin-bottom: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const SubText = styled.div`
  font-size: 12px;
  color: #adb5bd;
  user-select: none;
  text-align: center;
`

const InfoCardWrapper = styled.div`
  position: relative;
  font-size: 12px;
  flex: 1;
  padding: 15px;
  margin: 10px 0;
  display: inline-flex;
  flex-direction: column;
  user-select: none;
  min-width: 100px;
  text-align: center;
  background: #fff;
  box-shadow: 1px 1px 8px 0 rgba(0, 0, 0, 0.1);

  ${props =>
    !props.isLastChild &&
    css`
      border-right: 1px solid #dee2e6;
    `};
`

const Group = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #dee2e6;
`
