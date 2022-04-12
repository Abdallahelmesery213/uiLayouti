import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import './styles.scss'
import Card from './Card';


const ScopeOfWork = () => {
    return (
        <div>
            <Container className="p-0">
                <Row>
                    <Col>
                        <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                        clickable: true,
                        }}
                        // modules={[Pagination]}
                        className="card-swiper"
                        >
                            <SwiperSlide>
                                <Card />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card />
                            </SwiperSlide>
                        </Swiper>
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}

export default ScopeOfWork