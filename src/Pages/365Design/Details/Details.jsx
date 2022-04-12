import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import ProductDetails from '../../../Components/ProductDetails/ProductDetails'
import InfoCard from '../../../Components/InfoCard/InfoCard'
import './details.scss'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Card from '../../../Components/365HomeCard/Card'
import Masonry from 'react-masonry-css'
import { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Slider365 from '../../../Components/Slider365/Slider365'
import { DesignActions } from '../../../store/Design365'
import axios from 'axios'

const Details = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const params = useParams();
    const designs = useSelector(state => state.design.data)
    const realStore = useSelector(state => state.design.real)
    const catStore = useSelector(state => state.design.cat)
    const allData = useSelector(state => state.design.allData)
    const [next, setNext] = useState(null)
    const [prev, setPrev] = useState(null)
    const [data, setData] = useState(null)
    const [real, setReal] = useState([])
    const breakpointColumnsObj = {
        default: 3,
        600: 1
    };

    useEffect(() => {
        window.scrollTo(0,0)

        if(designs) {
            let des = designs.filter(design => design.id === parseInt(params.id))[0]
            if(des) {
                setData(des);
            }
        }

        if(realStore.length !== 0) {
            let des = realStore.filter(design => design.id === parseInt(params.id))[0]
            if(des) {
                setData(des);
            }
        }

        if(catStore.length !== 0) {
            let des = catStore.filter(design => design.id === parseInt(params.id))[0]
            if(des) {
                setData(des);
            }
        }

        if(allData.length !== 0) {
            if(parseInt(params.id) === 1) {
                setNext(allData[params.id+1])
                setPrev(allData[allData.length-1])
            }else if(parseInt(params.id) === allData.length) {
                setNext(allData[0])
                setPrev(allData[params.id-2])
            }else { 
                setNext(allData[params.id])
                setPrev(allData[params.id-2])
            }
        }
    }, [designs, realStore, catStore,allData, params.id])


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}Design365/relatedProjects/${params.id}`)
        .then(res => {
            setReal(res.data.data);
            dispatch(DesignActions.updateDesignData(res.data.data))
        })
    }, [dispatch, params.id])


    return (
        <div className='position-relative'>
            {data && data.sliders.length === 1? <div className="details__header">
                <img src={data? data.sliders[0].image:null} alt=""/>
            </div>:null} 
            {data && data.sliders.length !== 1? <Slider365 data={data.sliders}/>:null} 
            <Container  className='p-0'>
                <Row className='m-0'>
                    <Col md="7" className='p-0'>
                        <ProductDetails data={data}/>
                    </Col>
                    <Col md="5"  className='p-0'>
                        <InfoCard data={data}/>
                    </Col>
                </Row>
            </Container>
            <div className='arrow_ctrl'>
                <Container className='p-0'>
                    <Row className='m-0'>
                        {prev? <Col className='p-0'>
                                <div className='arrow_content'>
                                    <span className='' onClick={() => navigate(`/365design/details/${prev.id}`)}>
                                        <i className='fas fa-arrow-left'></i>
                                    </span>
                                    <div className='arrow_content_info'>
                                        <p>Previous</p>
                                        <p>{prev.nameEn}</p>
                                    </div>
                                </div>
                            </Col>:null}

                        {next? <Col className='p-0'>
                            <div className='arrow_content right'>
                                <div className='arrow_content_info'>
                                    <p>Next</p>
                                    <p>{next.nameEn}</p>
                                </div>
                                <span className='' onClick={() => navigate(`/365design/details/${next.id}`)}>
                                    <i className='fas fa-arrow-right'></i>
                                </span>
                            </div>
                        </Col>:null}
                    </Row>
                </Container>
            </div>

            {real.length !== 0?<div className='similar_apps'>
                <Container className='p-0'>
                    <div className='similar_apps_title d-flex justify-content-between align-items-center'>
                        <h3 className=''>Related Inspiration Design </h3>
                        <Link to='/*'>View more</Link>
                    </div>
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="my-masonry-grid mt-5"
                        columnClassName="my-masonry-grid_column">
                            {real?real.map(rp => <Card key={rp.id} data={rp}/>):null}
                    </Masonry>
                    
                </Container>
            </div>:null} 
        </div>
    )
}

export default Details