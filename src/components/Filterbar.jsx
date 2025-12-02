import React from 'react'
import arrowleft from '../assets/images/arrow-left.png'
import arrowdown from '../assets/images/arrow-down.png'
import '../assets/css/filterbar.css'

const Filterbar = () => {
  return (
        <div className="filter-bar">

            <div className="left-group">
                <div className="items-count">3425 ITEMS</div>

                <div className="hide-section">
                    <img src={arrowleft} alt="Hide Icon"/>
                    <span>HIDE FILTER</span>
                </div>
            </div>

            <div className="recommend-section">
                <span>RECOMMENDED</span>
                <img src={arrowdown} alt="Down Arrow"/>
            </div>

        </div>
  )
}

export default Filterbar
