import React from 'react'
import './index.css'

export const NoData = ({ logo, texts = [] }) => (
  <div className="no-data-wrapper">
    <img src={logo} alt="no-data-order-list" />
    {texts.map((value, index) => (
      <div key={`${value}-${index}`}>{value}</div>
    ))}
  </div>
)
