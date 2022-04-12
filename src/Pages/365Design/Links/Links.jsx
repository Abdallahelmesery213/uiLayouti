import React, {useEffect} from 'react'
import { Container } from 'reactstrap'
import './links.scss'
import { useDispatch } from 'react-redux'
import {LinkActive} from '../../../store/linkactive'

const Links = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        window.scrollTo(0,0)
        dispatch(LinkActive.setType('links'))
    })
    return (
        <Container className='p-0'>
            <div className='links_header_container'>
                <img className='absolute__imgs' src='https://365design.layouti.com/wp-content/uploads/2021/10/Behance.jpg' alt="" />
                <img className='absolute__imgs' src='https://365design.layouti.com/wp-content/uploads/2021/09/Dribbble-1-300x225.jpg' alt="" />
                <img className='absolute__imgs' src='https://365design.layouti.com/wp-content/uploads/2021/10/Behance1-300x235.jpg' alt="" />
                <img className='absolute__imgs' src='https://365design.layouti.com/wp-content/uploads/2021/10/home-maintenance-services-app.png' alt="" />
                <img className='emoji__imgs' src='https://365design.layouti.com/wp-content/uploads/2021/09/%E2%89%A1%C6%92yy.png' alt="" />
                <img className='emoji__imgs' src='https://365design.layouti.com/wp-content/uploads/2021/09/%E2%89%A1%C6%92ye.png' alt="" />
                
                <div className='links_header text-center mt-5'>
                    <img src="https://365design.layouti.com/wp-content/uploads/2021/10/yaser.png" alt=""/>
                    <h3 className='fs-1 mt-3'>Product Experience Manager @ Publicis Sapient</h3>
                    <p className='fs-4 d-block mt-3'>UI/UX designer creates glad visual identities that please user’s brain & eyes</p>
                </div>
            </div>
            <div className='social_media_links'>
                    <h1 className=' text-center'>Social Media Links</h1>
                    <div className='links'>
                            <a className='social_media_link' href='/*'>CV 2022</a>
                            <a className='social_media_link' href='/*'>Layouti Website</a>
                            <a className='social_media_link' href='/*'>Learn UI Design</a>
                            <a className='social_media_link' href='/*'>Linkedin</a>
                            <a className='social_media_link' href='/*'>Dribbble</a>
                            <a className='social_media_link' href='/*'>Instagram</a>
                            <a className='social_media_link' href='/*'>Facebook</a>
                            <a className='social_media_link' href='/*'>Behance</a>
                            <a className='social_media_link' href='/*'>My blog</a>
                    </div>
            </div>
        </Container>
    )
}

export default Links