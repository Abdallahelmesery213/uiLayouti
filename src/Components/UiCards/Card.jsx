import React, { useEffect, useState } from 'react'
import { copyImageToClipboard } from 'copy-image-clipboard'
import copy from 'copy-to-clipboard';

const Card = (props) => {
    const [data, setData] = useState(null)
    function copyImg(link) {
        let alert = document.querySelector('.alert_message')
        copyImageToClipboard(link)
        .then(() => {
            alert.innerHTML = "Copied Image"
            alert.classList.toggle('active')
            setTimeout(() => {
                alert.classList.toggle('active')
            }, 1000)
            console.log('Image Copied')
        })
    }
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
        setData(props.person)
    }, [props.person])
    return (
        <>
            {data?<div  className="ui__card">
                <div className='ui_card'>   
                    <img className='person_img' src={data.image} onClick={(e) => copyImg(e.target.src)}  alt=''/>
                    <div className='ui_card_body'>
                        <p onClick={(e) => copyText(e, "Copied Name")}>{data.name}</p>
                        <p onClick={(e) => copyText(e, "Copied Position")}>{data.position}</p>
                        <p onClick={(e) => copyText(e, "Copied Email")}>{data.email}</p>
                        <p onClick={(e) => copyText(e, "Copied Country")}>{data.country}</p>
                        <p onClick={(e) => copyText(e, "Copied Phone")}>{data.phone}</p>
                        <p onClick={(e) => copyText(e, "Copied Address")}>{data.address}</p>
                        <p onClick={(e) => copyText(e, "Copied Date")}>{data.date}</p>
                        <p onClick={(e) => copyText(e, "Copied Age")}>{data.age} Years Old</p>
                    </div>
                </div>
            </div>:null}
        </>
        
    )
}

export default Card