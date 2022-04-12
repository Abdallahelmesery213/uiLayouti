import React from 'react';
import './PowerCardsLearnui.scss'
import { Container, Row, Col } from 'reactstrap';
import PriceCardsLearnui from '../PriceCardsLearnui/PriceCardsLearnui';


const PowerCardsLearnui = () => {
  return (
    <div className='powerCardsLearnui'>
        <Container>
            <div className='cards-header text-center'>
                <h2>One course with a whole lot of power</h2>
                <p>Pick your preferred package of the UI design course</p>
            </div>
            <Row>
                <Col md={4} sm={12}>
                    <PriceCardsLearnui />
                </Col>
                <Col md={4} sm={12}>
                    <PriceCardsLearnui />
                </Col>
                <Col md={4} sm={12}>
                    <PriceCardsLearnui />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default PowerCardsLearnui;