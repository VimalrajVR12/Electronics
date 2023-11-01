import React from 'react'
import "./progressBarOne.css"

const ProgressBarOne = () => {

  return (
    <div className='ProgressBarOne_container'>
        <div className='ProgressBarOne_outer'>
            <div className='ProgressBarOne_inner'>
                <div className='ProgressBarOne_number'>
                    <h5>4.5</h5>
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
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10px"}}><h6>Design & Build</h6></div>
    </div>
  )
}

export default ProgressBarOne