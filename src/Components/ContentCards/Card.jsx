import React, { useEffect, useState } from 'react'
import { copyImageToClipboard } from 'copy-image-clipboard'
import copy from 'copy-to-clipboard';

const Card = (props) => {
    const [data, setData] = useState()


    function copyImg(link) {
        let alert = document.querySelector('.alert_message')
        copyImageToClipboard(link)
        .then(() => {
            alert.innerText = "Copied Image"
            alert.classList.toggle('active')
            setTimeout(() => {
                alert.classList.toggle('active')
            }, 1000)
        })
    }

    function copyText(e, type) {
        let alert = document.querySelector('.alert_message')
        copy(e.target.innerText)
        alert.innerText = type
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
                <img className='cover_img' src={data.image} onClick={(e) => copyImg(e.target.src)} alt=''/>
                <div className='content_card_body'>
                    <p className='date' onClick={(e) => copyText(e, "Copied Date")}>{data.date}</p>
                    <p className='desc' onClick={(e) => copyText(e, "Copied Paragraph")}>
                        {data.titleEn}
                    </p>
                </div>
            </div>
            </div>:null}
        </>
    )
}

export default Card