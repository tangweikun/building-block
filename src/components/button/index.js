import React from 'react'
import './index.css'

export default class Button extends React.PureComponent {
  render() {
    const {
      type = 'default',
      title = '',
      children,
      onClick,
      htmlType = 'button',
      ...otherProps
    } = this.props

    return (
      <button
        {...otherProps}
        className={`btn btn-${type}`}
        type={htmlType}
        title={title}
        onClick={onClick}
      >
        {children}
      </button>
    )
  }
}
