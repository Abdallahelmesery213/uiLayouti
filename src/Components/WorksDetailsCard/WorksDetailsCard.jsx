import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './style.scss'

const WorksDetailsCard = () => {
    return (
        <div className='works_details_card' style={{backgroundColor: "#ed7964"}}>
            <Container className='p-0'>
                <Row>
                    <Col md="4">
                        <Row><Col>Launch project - 2021</Col></Row>
                        <Row>
                            <Col className="mt-5">
                                <h2 className="works_details_title">
                                    etoyapp - Connect local community to sell, swap, or give away toys
                                </h2>
                            </Col>
                        </Row>
                        <Row>
                            <p className="slogan">exchange . earn . encourage</p>
                        </Row>
                    </Col>
                    <Col md="8">
                        <Row>
                            <Col md="3">
                                <p className="works_info">Type: Experiences</p>
                            </Col>
                            <Col md="3">
                                <p className="works_info">Client: etoy App</p>
                            </Col>
                            <Col>
                                <p className="works_info">Deliverables: UI, UX, Concept, Development, Illustration</p>
                            </Col>
                        </Row>
                        <Row className="mt-5">
                            <Col>
                                <p className='works__desc'>
                                    The idea behind the app is to give an innovative and environmentally friendly app that puts you in touch with other parents in your local area with whom you can swap, take or give up a toy-making another child very happy.
                                </p>
                                <p className='works__desc'>
                                    The app will also teach your child how to share, re-use, and protect the plant, all while saving money and decluttering your home.                                
                                </p>
                                <p className='works__desc'>
                                    This app will make a difference by reducing pollution, raising awareness & teaching kids to be responsible.
                                </p>
                            </Col>
                        </Row>
                        <Row className="people">
                            <h5 className="people__title">People working in the project</h5>
                            <Row className="mt-2"> 
                                <Col>
                                    <h5 className="people__title">UX reseach & design:</h5>
                                    <h5 className="people__title">Dia Nazzal, Hala Abu Al-Failat, and Yaser Nazzal</h5>
                                </Col>
                                <Col  md="3">
                                    <h5 className="people__title">UI design:</h5>
                                    <h5 className="people__title">Yaser Nazzal</h5>
                                </Col>
                                <Col  md="3">
                                    <h5 className="people__title">UX reseach & design:</h5>
                                    <h5 className="people__title">Nedal Al-Zaben & Saad Nabil </h5>
                                </Col>
                            </Row>
                        </Row>
                    </Col>
                </Row>
                <Row className="indepth">
                    <Col md="4">
                        <h3 className="indepth_title">In depth</h3>
                    </Col>
                    <Col md="8">
                        <Row>
                            <Col md="6" className="mb-3">
                                <p className="m-0">01.</p>
                                <h3 className='fs-5'>Being alone together</h3>
                            </Col>
                            <Col md="6">
                                <p className="m-0">02.</p>
                                <h3 className='fs-5'>Being alone together</h3>
                            </Col>
                            <Col md="6">
                                <p className="m-0">03.</p>
                                <h3 className='fs-5'>Being alone together</h3>
                            </Col>
                            <Col md="6">
                                <p className="m-0">04.</p>
                                <h3 className='fs-5'>Being alone together</h3>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default WorksDetailsCard