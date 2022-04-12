import React from 'react'
import { Col, Row } from 'reactstrap'
import './card.scss'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { DesignActions } from '../../store/Design365'
import styled, { keyframes } from 'styled-components';
import { bounceInLeft

} from 'react-animations';
const Animate = styled.div`animation: 2s ${keyframes `${bounceInLeft}`} infinite`;

const Card = (props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    function link (id) {
        axios.post(`${process.env.REACT_APP_API}Design365/projects/like`, {projectId: id})
        .then(res => {
        })
        dispatch(DesignActions.updateDesignLikes(id))
    }
    return (
        <>
            {props.data?<Col className='card_365 '  lg={4}  xs={1}>
                <Row className='card_365_head m-0'>
                    <Col xs={10} className='p-0'>
                        <p className='m-0 name'>
                            {props.data.nameEn}
                        </p>
                    </Col>
                    <Col xs={2} className='p-0'>
                        <p className='price m-0'>
                            {props.data.price?`$${props.data.price}`:null}
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col className='p-0 mt-4 position-relative' onClick={() => navigate(`/365design/details/${props.data.id}`)}>
                        <img src={props.data.thumbnail} alt="" className='w-100 p-2'/>
                        <span className='img__arrow'><Animate className='img__arrow__ico' ><i className='fas fa-arrow-right'></i></Animate></span>
                    </Col>
                </Row>
                <Row className='card_365_foot m-0'>
                    <Col className='p-0'>
                        <div className='d-flex h-100 align-items-center gap-1' >
                            {props.data.isFavourite?<span className='fav_span' onClick={() => link(props.data.id)}>
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M2.40485 11.8296C1.17389 8.00575 2.81155 3.99744 6.48314 2.81535C8.24043 2.25009 10.142 2.4535 11.733 3.35629L11.9964 3.51435L12.2645 3.35541C13.773 2.50136 15.5624 2.27315 17.2463 2.73629L17.512 2.81541C21.1847 3.99786 22.8291 8.00807 21.5937 11.8452C20.9743 13.6302 19.9584 15.2485 18.6174 16.5824C16.7927 18.3546 14.7812 19.9195 12.6219 21.2473L12.3926 21.3898C12.1598 21.5345 11.8656 21.5369 11.6305 21.3962L11.3849 21.2492C9.22257 19.9195 7.21104 18.3546 5.38007 16.5763C4.04537 15.2485 3.0295 13.6302 2.40485 11.8296ZM15.9541 5.48388C15.5694 5.36108 15.1578 5.57318 15.0349 5.95763C14.912 6.34209 15.1243 6.75331 15.509 6.87612C16.2653 7.1175 16.8045 7.79818 16.872 8.6011C16.9058 9.00327 17.2596 9.3019 17.6621 9.26809C18.0646 9.23428 18.3634 8.88085 18.3296 8.47867C18.2127 7.08873 17.2756 5.90566 15.9541 5.48388Z" fill="#200E32"/>
                                </svg>
                            </span>:<span className='fav_span' onClick={() => link(props.data.id)}>
                                <svg  width="22" height="22" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.55068 2.41032C2.40719 3.42238 1.00509 6.85415 2.05899 10.128C2.5938 11.6696 3.46355 13.0552 4.60627 14.1919C6.17389 15.7144 7.89608 17.0543 9.7474 18.1927L9.95764 18.3186C10.159 18.4391 10.4109 18.437 10.6102 18.3131L10.8064 18.1911C12.6552 17.0543 14.3774 15.7144 15.9396 14.1972C17.0877 13.0552 17.9575 11.6696 18.4878 10.1414C19.5455 6.85614 18.1377 3.42274 14.9932 2.41037L14.7657 2.34263C13.324 1.94611 11.792 2.14149 10.5005 2.8727L10.271 3.00878L10.0454 2.87346C8.68324 2.10052 7.05521 1.92637 5.55068 2.41032ZM9.73866 4.15596L9.90709 4.27677C10.1291 4.43579 10.4287 4.43263 10.6473 4.26896C11.7861 3.41649 13.2597 3.16842 14.6098 3.60152C17.0461 4.3859 18.1548 7.08977 17.3001 9.74476C16.8365 11.0802 16.0692 12.3026 15.0614 13.3051L14.6094 13.7346C13.3914 14.8665 12.0742 15.8911 10.6757 16.7941L10.2751 17.046L10.3974 17.1231C8.63065 16.0366 6.98104 14.7532 5.48452 13.2999C4.48216 12.3026 3.71479 11.0802 3.24673 9.73137C2.39571 7.08724 3.49963 4.38528 5.93463 3.60132C7.22039 3.18774 8.62215 3.39279 9.73866 4.15596ZM13.5877 5.55122C13.2582 5.44607 12.9059 5.62767 12.8006 5.95683C12.6954 6.28598 12.8771 6.63805 13.2066 6.7432C13.8541 6.94986 14.3157 7.53263 14.3735 8.22007C14.4025 8.5644 14.7053 8.82006 15.0499 8.79112C15.3945 8.76217 15.6504 8.45958 15.6214 8.11525C15.5213 6.92523 14.719 5.91232 13.5877 5.55122Z" fill="#23262B"/>
                                </svg>
                            </span>}
                            <p className='mb-1 fs-5'>{props.data.countFavourite}</p>
                        </div>
                    </Col>
                    <Col className='p-0 d-flex justify-content-end align-items-center h-100'>
                        <Link to={`/365design/details/${props.data.id}`} className='details_link'>View details</Link>
                    </Col>
                </Row>
            </Col>:null}
        </>
        
    )
}

export default Card