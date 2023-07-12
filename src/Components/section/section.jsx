import React from 'react'
import './Section.css'
import { BiShoppingBag } from "react-icons/bi";

const Section = ({ midImg }) => {
    return (
        <div className='section'>
            <div id='mainPhoto'>
                <img  src={midImg.Phoneimg} alt="midone" />
            </div>
            <div id="photo">
                <img src={midImg.Nameimg} alt="nameImg" />
                <p>{midImg.span}</p>
                <button><BiShoppingBag />Shop Now</button>
            </div>

        </div>
    )
}

export default Section