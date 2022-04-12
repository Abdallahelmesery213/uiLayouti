import React from 'react'
import { Link } from 'react-router-dom'
import './details.scss'


const ProductDetails = (props) => {
    return (
        <>
            {props.data?<div className='prod__details'>
                <Link className="categ_details_link" to='/365design/category'>{props.data.projectCat.nameEn}</Link>
                <div className='details_body'>
                    {props.data.records.map(rec => {
                        return (
                            <div className="details_body_card" key={rec.id}>
                                {rec.titleEn && rec.titleEn !== "null"?<h2 className='details_body_card_title'>{rec.titleEn}</h2>:null}
                                <p className='details_body_card_desc'> {rec.descriptionEn} </p>
                            </div>
                        )
                    })}
                    
                </div>
                <div className='info_wrap' dangerouslySetInnerHTML={{__html: props.data.infotextEn}} />
                <div className="details_body_img">
                    {props.data.images.map(img => <img src={img.image} key={img.key} alt=''/>)}
                </div>
            </div>:null}
        </>
        
    )
}

export default ProductDetails