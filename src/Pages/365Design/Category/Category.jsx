import React, { useState } from 'react'
import { Container } from 'reactstrap'
import Card from '../../../Components/365HomeCard/Card'
import Cover from "../../../assets/images/category_cover.jpg"
import './category.scss'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import Masonry from 'react-masonry-css'
import { LinkActive } from '../../../store/linkactive'
import { DesignActions } from '../../../store/Design365'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
const Category = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const catData = useSelector(state => state.design.cat)
    const [data, setData] = useState([])
    const breakpointColumnsObj = {
        default: 3,
        600: 1
    };

    useEffect(() => {
        dispatch(LinkActive.setType("cat"))
    }, [dispatch])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}Design365/getProjectsByCategory/${params.id}`)
        .then(res => {
            dispatch(DesignActions.setCat(res.data.data))
        })
    }, [params.id, dispatch])
    
    useEffect(() => {
        if(catData) {
            setData(catData);
        }
    }, [catData])

    return (
        <div>
            <div className='category_cover '>
                <img  src={Cover} alt="" className='w-100 d-block '/>
            </div>
            <Container className='p-0'>
                <div className='link_tree mt-5 d-flex align-items-center gap-1'>
                    <p >category </p>
                    <p>. {data.length !== 0? data[0].projectCat.nameEn:null} </p>
                </div>
                <div className='mt-5'>
                    <h2 className='categ__name mb-4 fs-2 '>Redesign Tue</h2>
                    <Container className=' card365_cont '>
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column">
                    {data.map(d =>  <Card key={d.id} data={d}/>)}
                    </Masonry>
                </Container>
                </div>
            </Container>
        </div>
    )
}

export default Category