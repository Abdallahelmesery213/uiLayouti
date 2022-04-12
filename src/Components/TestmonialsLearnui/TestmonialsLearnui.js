import React from 'react';
import './TestmonialsLearnui.scss';
import { Container } from 'reactstrap';
import SwiperTestmonials from './SwiperTestmonials';


const TestmonialsLearnui = () => {
  return (
    <div className='testmonialsLearnui'>
        <Container>
            <div className='header-testmonials text-center mb-5'>
                <h2>Testimonials</h2>
                <p>
                    If you don’t know us, get to know us through our reputation in the field!
                    <br />
                    Some opinions and designs were implemented during previous sessions
                </p>
            </div>
            {/* start swiper */}
            <SwiperTestmonials />
            
        </Container>
    </div>
  )
}

export default TestmonialsLearnui;