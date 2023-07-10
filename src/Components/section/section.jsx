import React from 'react'
import './Section.css'

const Section = ({ midImg }) => {
    return (
        <div className='section'>
            <div id='mainPhoto'>
                <img src={midImg.Phoneimg} alt="midone" />
            </div>
            <div>
                <img src={midImg.Nameimg} alt="nameImg" />
                <p>{midImg.span}</p>
            </div>

        </div>
    )
}

export default Section