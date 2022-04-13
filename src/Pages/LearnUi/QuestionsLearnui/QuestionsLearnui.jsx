import React from 'react';
import './QuestionsLearnui.scss';
import {Container} from 'reactstrap';
import {Accordion} from 'react-bootstrap';

const QuestionsLearnui = () => {
  return (
    <div className='questionsLearnui'>
        <Container>
            <div className='questions-header text-center'>
                <h2>Frequently Asked Questions from Our Community</h2>
                <p>We cut through today’s complexity and use whatever technology it takes to get you where want to be.</p>
            </div>

            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header> How long does the course take? </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            There are two packages with 20 hours and 30 hours. Each of them will be divided into 2 times per week. The timing will be 2 hours from 10:00 PM to 12:00 AM Dubai time.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <hr className='hr-accordin' />

                <Accordion.Item eventKey="1">
                    <Accordion.Header>Can i split the payment in 2 months?</Accordion.Header>
                    <Accordion.Body>
                        Yes of course! You can split the payment in two months.  Half of the cost will be paid directly before starting the course, and the other half after finishing the whole course.
                    </Accordion.Body>
                </Accordion.Item>
                <hr className='hr-accordin' />
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Do you provide a certificate after taking the course?</Accordion.Header>
                    <Accordion.Body>
                        Students will take a certificate from Layouti Design group. However, our goal is to graduate with understanding, not just with a certificate.
                    </Accordion.Body>
                </Accordion.Item>
                <hr className='hr-accordin' />
                <Accordion.Item eventKey="3">
                    <Accordion.Header>How many students are in the course?</Accordion.Header>
                    <Accordion.Body>
                        The number of students is a maximum of 15.
                    </Accordion.Body>
                </Accordion.Item>
                <hr className='hr-accordin' />
                <Accordion.Item eventKey="4">
                    <Accordion.Header>When will the course start?</Accordion.Header>
                    <Accordion.Body>
                        It will start in November 2021.
                    </Accordion.Body>
                </Accordion.Item>
                <hr className='hr-accordin' />
                <Accordion.Item eventKey="5">
                    <Accordion.Header>
                        What is the difference between your online course and other online courses such as Udemy or Coursera?
                    </Accordion.Header>
                    <Accordion.Body>
                    Udemy, Coursera, and other educational platforms provide respectable curricula, but no one stands by you when implementing and this is a problem that I actually faced with my students.
                    <br />
                    In our course, we focus greatly on the executive part through tasks carried out in and outside the session, in addition to the quick quizzes that take place during the session so as not to be lazy.
                    <br />
                    Most of the training courses are boring despite the small-time! This is because it is devoid of activities. This is what we focus on in the course that you receive the information with pleasure until it is firmly rooted in your brain. Finally, we provide internships in the Layouti design group for the most regular and interactive people.
                    </Accordion.Body>
                </Accordion.Item>
                <hr className='hr-accordin' />
            </Accordion>

        </Container>
    </div>
  )
}

export default QuestionsLearnui