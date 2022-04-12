import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import './slider365.scss'
// import required modules
import { Pagination, Autoplay } from "swiper";

const Slider365 = (props) => {
    return (
        <>
        <Swiper
            pagination={{
            dynamicBullets: false,
            }}
            modules={[Autoplay, Pagination]}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            loop={true}
            className="mySwiper365"
        >
            {props.data.map(img => <SwiperSlide key={img.key}><img src={img.image} alt=''/></SwiperSlide>)}
        </Swiper>
    </>
    )
}

export default Slider365