import React from 'react'
import './index.css'

export class Button extends React.PureComponent {
  render() {
    const {
      type = 'default',
      children,
      onClick,
      htmlType = 'button',
      style = {},
      ...otherProps
    } = this.props

    return (
      <button
        {...otherProps}
        className={`btn btn-${type}`}
        type={htmlType}
        style={style}
        onClick={onClick}
      >
        {children}
      </button>
    )
  }
}
