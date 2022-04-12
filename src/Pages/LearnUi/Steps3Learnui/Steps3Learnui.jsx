import React from 'react';
import { Container } from 'reactstrap';
import CardStepsLearnui from '../CardStepsLearnui/CardStepsLearnui';
import './Steps3Learnui.scss';

const Steps3Learnui = () => {
  return (
    <div className='steps'>
        <Container>
          <div className='steps-header text-center'>
            <h2>Only 3 steps to reach us</h2>
            <p>Get Free UI sessions, tutorials & live videos as a starting point of your UI career path</p>
          </div>
                
          <CardStepsLearnui />
                
        </Container>
    </div>
  )
}

export default Steps3Learnui