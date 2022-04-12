import React, { useEffect, useState } from 'react'
import copy from 'copy-to-clipboard';


const CardParag = (props) => {
    const [data, setData] = useState()

    function copyText(e, type) {
        let alert = document.querySelector('.alert_message')
        copy(e.target.innerText)
        alert.innerHTML = type
        alert.classList.toggle('active')
        setTimeout(() => {
            alert.classList.toggle('active')
        }, 1000)
    }
    useEffect(() => {
        setData(props.data)
    }, [props.data])
    return (
        <>
            {data?<div className='content_card_cont'>
                <div className='content_card'>
                    <div className='content_card_body'>
                        <p className='date' onClick={(e) => copyText(e, "Copied Date")}>{data.date}</p>
                        <p className='desc_title' onClick={(e) => copyText(e, "Copied Title")}>
                            {data.titleEn}
                        </p>
                        <p className='long_desc' onClick={(e) => copyText(e, "Copied Paragraph")}>
                            {data.descEn}
                        </p>
                    </div>
                </div>
            </div>:null}
        </>
    )
}

export default CardParag