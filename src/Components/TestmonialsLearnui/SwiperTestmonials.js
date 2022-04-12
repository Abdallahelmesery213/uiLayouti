import React from 'react';
import {  Col, Row } from 'reactstrap';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode , Pagination, Autoplay } from "swiper";
import './SwiperTestmonials.scss';


const SwiperTestmonials = () => {
  return (
    <>
    <Swiper
        // slidesPerView={2}
        // spaceBetween={30}
        breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
        }}
        freeMode={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, FreeMode, Autoplay]}
        className="mySwiper"
    >
        <SwiperSlide>
            <div className='slide'>
                <div className='description'>
                    <div className='icon-quote'>
                        <i className="fas fa-quote-left"></i>
                    </div>
                    <p>
                        I really appreciate your effort and time with changing my way of thinking which was awesome <img src='https://s.w.org/images/core/emoji/13.1.0/svg/1f44f-1f3fc.svg' width={18} height={18} alt='imoj-hand' className='img-fluid' />  second I felt that I went levels ups by letting me practicing and doing tasks and every point you gave was accurate and useful I never felt disappointed or unhappy and I never regret taking this UI course with you and I really high recommend with your course because you are talented and great teacher <img src='https://s.w.org/images/core/emoji/13.1.0/svg/1f44d-1f3fb.svg' width={18} height={18} alt='imoj-like' /> Thank you for everything <img src='https://s.w.org/images/core/emoji/13.1.0/svg/1f60a.svg' width={18} height={18} alt='emoj-smile' className='img-fluid'/>
                    </p>
                </div>
                <div className='info'>
                    <Row>
                        <Col md={2}>
                            <img src='https://learnui.layouti.com/wp-content/uploads/2021/10/1623447598592-150x150.jpeg' alt='info1' className='img-fluid' />
                        </Col>
                        <Col md={10}>
                            <h6>Sereen Abu alrous </h6>
                            <p>UI/UX Designer</p>
                        </Col>
                    </Row>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='slide'>
                <div className='description'>
                    <div className='icon-quote'>
                        <i className="fas fa-quote-left"></i>
                    </div>
                    <p>
                        It will not be the last course that I attend with Mr. Yaser. He is a brilliant designer in his field and on a humanitarian level who always loves to support his students. He provided us with interesting and useful course content. Thank you Mr. Yaer
                    </p>
                </div>
                <div className='info'>
                    <Row>
                        <Col md={2}>
                            <img src='https://learnui.layouti.com/wp-content/uploads/2021/10/1663239693718534_c5_300x300-150x150.jpeg' alt='info1' className='img-fluid' />
                        </Col>
                        <Col md={10}>
                            <h6>Ahmad Saleh</h6>
                            <p>UI/UX Designer</p>
                        </Col>
                    </Row>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='slide'>
                <div className='description'>
                    <div className='icon-quote'>
                        <i className="fas fa-quote-left"></i>
                    </div>
                    <p>
                        The duration of the course is sufficient, the materials are very useful and different, the content of the course focuses more on practicality. I benefited a lot from the course and Mr. Yaser helped me a lot in my portfolio. I would like to thank him for his effort and support for all of us.
                    </p>
                </div>
                <div className='info'>
                    <Row>
                        <Col md={2}>
                            <img src='https://learnui.layouti.com/wp-content/uploads/2021/10/download-150x150.jpeg' alt='info3' className='img-fluid' width={150} height={150} />
                        </Col>
                        <Col md={10}>
                            <h6>Mustafa Nabil</h6>
                            <p>UI/UX Designer</p>
                        </Col>
                    </Row>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default SwiperTestmonials