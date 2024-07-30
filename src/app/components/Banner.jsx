import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <div className="h-[90vh]">
    <div className="cropped-image"></div>
    <div className="bannerMiniContainer">
      <p className="text text-5xl font-bold text-white w-[25rem] mb-5">
        Moving people, and the world.</p>
        <div className="py-5 bg-white w-[25rem] flex space-x-7 justify-around">
          <p>Daily</p>
          <p>Rental</p>
          <p>OUtstation</p>
        </div>
    </div>

    
    </div>
  )
}

export default Banner