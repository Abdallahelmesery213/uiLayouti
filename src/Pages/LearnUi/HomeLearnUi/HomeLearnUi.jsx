import React, { useState }from 'react';
import './HomeLearnUi.scss';
import { Container, Col, Row, FormGroup, Label,Input,Form, Button } from 'reactstrap';
import UserInterfaceLearnUi from '../../../Components/UserInterfaceLearnUi/UserInterfaceLearnUi';
import Card from '../../../Components/365HomeCard/Card'
import Masonry from 'react-masonry-css'
import TestmonialsLearnui from '../../../Components/TestmonialsLearnui/TestmonialsLearnui';
import PowerCardsLearnui from '../../../Components/PowerCardsLearnui/PowerCardsLearnui';
import Steps3Learnui from '../../../Components/Steps3Learnui/Steps3Learnui';
import QuestionsLearnui from '../../../Components/QuestionsLearnui/QuestionsLearnui';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import AdsLearnui from './Ads/AdsLearnui';

const HomeLearnUi = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const breakpointColumnsObj = {
        default: 3,
        600: 1
    };
    const [value, setValue] = useState()
    return (
        <>
        <div className='content-learnui'>
            <div className='background-overlay-learnui'></div>
            <div className='content-ui'>
                <Container>
                    <Row>
                        <Col md='7' sm='12' >
                            <div className='text'>
                                <h2>How to Practice UI Design in just 2 Months</h2>
                                <h4>The Course Available in Arabic Only</h4>
                                <p>Learn UI design principles, Content/Elements principles, functional design, handoff to developers, and how to design a successful product.</p>
                                <div className='icons-content'>
                                    <Row>
                                        <Col md='4' sm='12'>
                                            <i className="fas fa-user"></i>
                                            <span className='ms-2'>Created by <a href='/*'>Yaser Nazzal</a> </span>
                                        </Col>
                                        <Col md='4' sm='12'>
                                            <i className="fas fa-clock"></i>
                                            <span className='ms-2'>Started in November </span>
                                        </Col>
                                        <Col md='4' sm='12'>
                                            <i className="fas fa-regular fa-headphones"></i>
                                            <span className='ms-2'>Arabic </span>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col md='5' sm='12'>
                            <div className='form'>
                                <div className='headerForm'>
                                    <h2>Register to the UI Course Design</h2>
                                </div>
                                <Form onSubmit={handleSubmit}>
                                    <FormGroup>
                                        <Label for="fullName">
                                            Full name <span className='star-form'>*</span>
                                        </Label>
                                        <div className='borderForm'>
                                            <Input
                                                id="fullName"
                                                name="fullName"
                                                placeholder="e.g. Yaser Nazzal"
                                                type="text"
                                            />
                                        </div>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="email">
                                            Email address <span className='star-form'>*</span>
                                        </Label>
                                        <div className='borderForm'>
                                            <Input
                                                id="email"
                                                name="email"
                                                placeholder="e.g. Hello@layout.com"
                                                type="email"
                                            />
                                        </div>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="mobile-number">
                                            Mobile number <span className='star-form'>*</span>
                                        </Label>
                                        <div className='mobileBorder'>
                                            <PhoneInput
                                                defaultCountry="AE"
                                                id='mobile-number'
                                                placeholder="eg. +971522372878"
                                                value={value}
                                                onChange={setValue}
                                            />
                                        </div>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="Select">
                                        Packaging course
                                        </Label>
                                        <div className='borderForm'>
                                            <Input
                                                id="Select"
                                                name="select"
                                                type="select"
                                                >
                                                <option>
                                                    Select
                                                </option>
                                                <option>
                                                    UX Design ($100) 10H
                                                </option>
                                                <option>
                                                    UI Design ($300) 20H
                                                </option>
                                            </Input>
                                        </div>
                                     </FormGroup>
                                     <Button  color="success" className='register' type='submit'>
                                        Register Now
                                    </Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                    
                </Container>
            </div>
            
        </div>
        {/* end content-learn-ui */}
        <UserInterfaceLearnUi />
        <div className='highlight'>
            <Container className='p-0'>
                <h2 className='text-center'>Highlights of our UI Design Work</h2>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid mt-5"
                    columnClassName="my-masonry-grid_column">
                    <Card /> 
                    <Card /> 
                    <Card /> 
                </Masonry>
            </Container>
        </div>
        {/* end highlight */}
        <TestmonialsLearnui />
        <PowerCardsLearnui />
        <Steps3Learnui />
        <QuestionsLearnui />
        <AdsLearnui />
        </>
    )
}

export default HomeLearnUi;