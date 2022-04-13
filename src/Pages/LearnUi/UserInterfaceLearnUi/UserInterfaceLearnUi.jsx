import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import InterfaceImg from '../../../assets/images/user-interface-design.PNG';
import InterfaceImg2 from"../../../assets/images/user-interface-design2.PNG";
import "./style.scss";

const UserInterfaceLearnUi = () => {
  return (
    <div className='userInterface-content'>
        <div className='row1'>
            <Container>
                <Row>
                    <Col md={6} sm={12}>
                        <img src={InterfaceImg} alt="InterfaceImg" className='img-fluid'/>
                    </Col>
                    <Col md={6} sm={12}>
                        <div className='text'>
                            <h2>Who can attend this user interface design course?</h2>
                            <p>This course is directed to everyone who is in need of knowledge in the field of UI design, as it will help you in the following:</p>
                            <ul className='text-start'>
                                <li>
                                    <span className='check-icon'>
                                        <i className="fas fa-regular fa-check"></i>
                                    </span>
                                    <span className='prag'>Know the UI design guidelines and principles</span>
                                </li>
                                <li>
                                    <span className='check-icon'>
                                        <i className="fas fa-regular fa-check"></i>
                                    </span>
                                    <span className='prag'>Design for web and mobile based on UI design standards
                                    </span>
                                </li>
                                <li>
                                    <span className='check-icon'>
                                        <i className="fas fa-regular fa-check"></i>
                                    </span>
                                    <span className='prag'>Create a successful design that meets the customer’s needs</span>
                                </li>
                                <li>
                                    <span className='check-icon'>
                                        <i className="fas fa-regular fa-check"></i>
                                    </span>
                                    <span className='prag'>Present your work inside your portfolio</span>
                                </li>
                                <li>
                                    <span className='check-icon'>
                                        <i className="fas fa-regular fa-check"></i>
                                    </span>
                                    <span className='prag'>Know how to communicate with clients</span>
                                </li>
                                <li>
                                    <span className='check-icon'>
                                        <i className="fas fa-regular fa-check"></i>
                                    </span>
                                    <span className='prag'>Know how to handover designs to developers</span>
                                </li>
                                
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className='row2'>
            <Container>
                <Row>
                    <Col md={6} sm={12}>
                        <div className='text'>
                            <h2>What we offer in the user interface design course</h2>
                            
                            <ul>
                                <li>
                                    <span className='check-icon'>
                                        <i className="fas fa-regular fa-check"></i>
                                    </span>
                                    <span className='prag'>Introduction to the UI design principles</span>
                                </li>
                                <li>
                                    <span className='check-icon'>
                                        <i className="fas fa-regular fa-check"></i>
                                    </span>
                                    <span className='prag'>Numerous case studies to facilitate the UI implementation
                                    </span>
                                </li>
                                <li>
                                    <span className='check-icon'>
                                        <i className="fas fa-regular fa-check"></i>
                                    </span>
                                    <span className='prag'>Materials, free & paid tools, and kits</span>
                                </li>
                                <li>
                                    <span className='check-icon'>
                                        <i className="fas fa-regular fa-check"></i>
                                    </span>
                                    <span className='prag'>Quick quizzes in the session</span>
                                </li>
                                <li>
                                    <span className='check-icon'>
                                        <i className="fas fa-regular fa-check"></i>
                                    </span>
                                    <span className='prag'>Practical tasks using Sketch, Figma, and Adobe XD</span>
                                </li>
                                
                            </ul>
                        </div>
                    </Col>
                    <Col md={6} sm={12}>
                        <img src={InterfaceImg2} alt="InterfaceImg2" className='img-fluid'/>
                    </Col>
                </Row>
            </Container>
        </div>
        
    </div>
  )
}

export default UserInterfaceLearnUi;