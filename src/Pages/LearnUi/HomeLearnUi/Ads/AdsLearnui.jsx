import React from 'react';
import './AdsLearnui.scss';
import { Container, Col, Row, Button } from 'reactstrap';

const AdsLearnui = () => {
  return (
    <>
        <Container>
            <div className='bannerLearnui'>
                <Row className='align-items-center'>
                    <Col md={8} sm={12}>
                        <h2>How come you still aren't a member of the Layouti family?! Come on and choose your package</h2>
                    </Col>
                    <Col md={4} sm={12} className='text-end'>
                        <Button color="success"outline>Register Now</Button>
                    </Col>
                </Row>
            </div>
        </Container>
    </>
  )
}

export default AdsLearnui;