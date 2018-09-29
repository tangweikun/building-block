import React from 'react'
import './index.css'

export class Button extends React.PureComponent {
  render() {
    const { theme = 'default', children, ...otherProps } = this.props

    return (
      <button {...otherProps} className={`btn btn-${theme}`}>
        {children}
      </button>
    )
  }
}
