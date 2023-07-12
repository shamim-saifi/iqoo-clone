import React from 'react';
import './Discover.css'

const Discover = ({ data }) => {
    return (
        <>
            <h1>Discover</h1>
            <div className='card'>

                {
                    data.map((item, index) => (
                        <div className='cardItem'>
                            <img src={item.img} alt={`img ${index}`} />
                            {/* <span>{item.span}</span> */}
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Discover