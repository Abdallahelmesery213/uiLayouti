import React,  {useEffect} from 'react'
import { Container } from 'reactstrap'
import './products.scss'
import { useDispatch } from 'react-redux'
import {LinkActive} from '../../../store/linkactive'


const Products = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        window.scrollTo(0,0)
        dispatch(LinkActive.setType('product'))
    })
    return (
        <Container className='p-0'>
            <div className="prod_img_wrap">
                <img className='img_prod' src="https://365design.layouti.com/wp-content/uploads/2021/10/Layouti-Design-Wireframe-Kit-Dark-1.png" alt=""/>
                <img className='img_prod' src="https://365design.layouti.com/wp-content/uploads/2021/10/Screen-Shot-2019-06-11-at-12.04.png" alt=""/>
                <img className='img_prod' src="https://365design.layouti.com/wp-content/uploads/2021/10/Screen-Shot-2019-06-11-at-12.04-1a.png" alt=""/>
                <img className='img_prod' src="https://365design.layouti.com/wp-content/uploads/2021/10/Screen-Shot-2019-06-11-at-12..png" alt=""/>
            </div>
        </Container>
    )
}

export default Products