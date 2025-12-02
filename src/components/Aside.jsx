import React from 'react'
import arrowdown from '../assets/images/arrow-down.png'
import '../assets/css/aside.css'

const aside = () => {
  return (
    <div>
         {/* Filter Menu  */}
        <div className="filter-menu">
            
            <div className="filter-section">
               
                <div className="filter-option" id="filter-option">
                    <input type="checkbox" id="electronics" name="category"/>
                    <label htmlFor="electronics" >CUSTOMIZABLE</label>
                </div>
            </div>

           
             
        <div className="filter-section">
        <div className="filter-header">
            <span className="filter-title">IDEAL FOR</span>
            <img src={arrowdown} alt="Down Arrow"/>
        </div>
        
        <div className="filter-content">
            <div className="filter-subtitle">All</div>
            
            <a href="#" className="filter-all">Unselect all</a>
            
            <div className="filter-option">
                <input type="checkbox" id="men" name="ideal-for"/>
                <label htmlFor="men">Men</label>
            </div>
            
            <div className="filter-option">
                <input type="checkbox" id="women" name="ideal-for"/>
                <label htmlFor="women">Women</label>
            </div>
            
            <div className="filter-option">
                <input type="checkbox" id="baby-kids" name="ideal-for"/>
                <label htmlFor="baby-kids">Baby & Kids</label>
            </div>
        </div>
        </div>

       <div className="filter-section">
            <div className="filter-header">
                <span className="filter-title">OCCASION</span>
                <img src={arrowdown} alt="Down Arrow"/>
            </div>
            
            <div className="filter-content">
                <div className="filter-subtitle">All</div>
            </div>
        </div>

        <div className="filter-section">
            <div className="filter-header">
                <span className="filter-title">OCCASION</span>
                <img src={arrowdown} alt="Down Arrow"/>
            </div>
            
            <div className="filter-content">
                <div className="filter-subtitle">All</div>
            </div>
        </div>


        <div className="filter-section">
            <div className="filter-header">
                <span className="filter-title">WORK</span>
                <img src={arrowdown} alt="Down Arrow"/>
            </div>
            
            <div className="filter-content">
                <div className="filter-subtitle">All</div>
            </div>
        </div>


        <div className="filter-section">
            <div className="filter-header">
                <span className="filter-title">FABRIC</span>
                <img src={arrowdown} alt="Down Arrow"/>
            </div>
            
            <div className="filter-content">
                <div className="filter-subtitle">All</div>
            </div>
        </div>


        <div className="filter-section">
            <div className="filter-header">
                <span className="filter-title">SEGEMENT</span>
                <img src={arrowdown} alt="Down Arrow"/>
            </div>
            
            <div className="filter-content">
                <div className="filter-subtitle">All</div>
            </div>
        </div>

        <div className="filter-section">
            <div className="filter-header">
                <span className="filter-title">SUITABLE FOR</span>
                <img src={arrowdown} alt="Down Arrow"/>
            </div>
            
            <div className="filter-content">
                <div className="filter-subtitle">All</div>
            </div>
        </div>

        <div className="filter-section">
            <div className="filter-header">
                <span className="filter-title">RAW MATERIALS</span>
                <img src={arrowdown} alt="Down Arrow"/>
            </div>
            
            <div className="filter-content">
                <div className="filter-subtitle">All</div>
            </div>
        </div>

        <div className="filter-section">
            <div className="filter-header">
                <span className="filter-title">PATTERN</span>
                <img src={arrowdown} alt="Down Arrow"/>
            </div>
            
            <div className="filter-content">
                <div className="filter-subtitle">All</div>
            </div>
        </div>      
    </div>
    </div>
  )
}

export default aside
