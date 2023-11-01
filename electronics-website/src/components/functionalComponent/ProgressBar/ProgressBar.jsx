import React from 'react'
import "./progressBar.css"

const ProgressBar = () => {
  return (
    <div className='ProgressBar_container'>
        <div className='ProgressBar_outer'>
            <div className='ProgressBar_inner'>
                <div className='ProgressBar_number'>
                    <h5>4.3</h5>
                </div>
            </div>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
            <defs>
                <linearGradient className="GradientColor">
                <stop offset="0%" stop-color="#e91e63" />
                <stop offset="100%" stop-color="#673ab7" />
                </linearGradient>
            </defs>
            <circle cx="80" cy="80" r="70" stroke-linecap="round" />;
        </svg>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10px"}}><h6>Bass</h6></div>
    </div>
  )
}

export default ProgressBar