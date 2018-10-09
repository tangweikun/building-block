import React from 'react'
import './index.css'
import LOADING_IMG from 'assets/loading.gif'

export const Loading = () => (
  <div className="loading-wrapper">
    <img src={LOADING_IMG} alt="loading" />
  </div>
)
