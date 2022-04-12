import React from 'react'
import './scrolltop.scss'

const ScrollTop = () => {

    function scrollTop () {
        window.scrollTo(0,0) 
    }


    return (
        <button className='scroll_top' onClick={scrollTop}>
            <span>
                <i className="fas fa-arrow-up"></i>
            </span>
        </button>
    )
}

export default ScrollTop