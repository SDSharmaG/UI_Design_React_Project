import React from 'react'
import '../assets/css/strip.css'
import stripicon from '../assets/images/stripicon.png'

const strip = () => {
  return (
<div className="strip">
            <div className ="strip-item">
                <img src={stripicon} alt="Icon 1"/>
                <span>Lorem ipsum dolor</span>
            </div>
            <div className="strip-item">
               <img src={stripicon} alt="Icon 2"/>
                <span>Lorem ipsum dolor</span>
            </div>
            <div className="strip-item">
                <img src={stripicon} alt="Icon 3"/>
                <span>Lorem ipsum dolor</span>
            </div>
        </div>
  )
}

export default strip
