import React from 'react'
import './infocard.scss'

const InfoCard = (props) => {
    return (
        <>
            {props.data? <div className='info_card sticky-lg-top'>
                <div className="info_card_head">
                    <p className='info_card_head_date'><i className="fas fa-calendar-alt"></i> <span>{props.data.date}</span></p>
                    <h2 className='info_card_head_title'>{props.data.nameEn}</h2>
                    <p className='info_card_head_cearor'>{props.data.createdByEn}</p>
                </div>
                <div className="info_card_av">
                    <p>{props.data.availabilityEn}</p>
                </div>
                <div className="info_card_desc">
                    <p>
                        {props.data.descEn}
                    </p>
                </div>
                <div className="info_card_btns">
                    <button className='get_in_touch'>Get in touch</button>
                    {props.data.status === 1? <a className='download' href={props.data.link} target="blank">Download</a>:<a  href={props.data.link} target="blank" className='download d-flex justify-content-between align-items-center p-3'><span>Checkout</span><span className='fw-bolder'>${props.data.price}</span></a>}
                </div>
            </div>:null}
        </>
        
    )
}

export default InfoCard