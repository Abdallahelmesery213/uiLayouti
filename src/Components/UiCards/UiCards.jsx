import React, { useState } from 'react'
import { Container, Row, Col, Nav,
    NavItem,
    NavLink, TabContent,
    TabPane, } from 'reactstrap'
import './uicards.scss'
import classnames from 'classnames'
import All from './Pages/All'
import Male from './Pages/Male'
import Female from './Pages/Female'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { avatarActions } from '../../store/UiAvatarSlice'
import {InfinitySpin } from 'react-loader-spinner'

const UiCards = (props) => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [verticalActiveTab, setverticalActiveTab] = useState("1");
    const toggleVertical = tab => {
        if (verticalActiveTab !== tab) {
            setverticalActiveTab(tab);
        }
    };
    
    function getMoreData(id) {
        const gender = id === "1"?"all":id === "2"?"male":"female"
        setLoading(true)
        axios.post(`${process.env.REACT_APP_API}contents-paginate`, {gender})
        .then(res => {
            id === "1"?dispatch(avatarActions.setAll(res.data.data)):
            id === "2"?dispatch(avatarActions.setMale(res.data.data)):
            dispatch(avatarActions.setFemale(res.data.data))
            setLoading(false)
        })
    }

    return (
        <Container>
            <Row>
            <Col md="12" className=' p-0'>
                    <Nav pills className="flex-row tabs_cont gap-3  justify-content-center flex-nowrap navs_aside">
                    <NavItem  className="nav_tap">
                        <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                            "": true,
                            active: verticalActiveTab === "1",
                            "tab_link":true
                        })}
                        onClick={() => {
                            toggleVertical("1");
                        }}
                        >
                            All ({props.all?props.all.length: 0})
                        </NavLink>
                    </NavItem>

                    <NavItem  className="nav_tap">
                        <NavLink
                        style={{ cursor: "pointer", borderRadius: 0}}
                        className={classnames({
                            "": true,
                            active: verticalActiveTab === "2",
                            "tab_link":true
                        })}
                        onClick={() => {
                            toggleVertical("2");
                        }}
                        >
                            Male ({props.male?props.male.length: 0})
                        </NavLink>
                    </NavItem>

                    <NavItem className='nav_tap'>
                        <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                            "": true,
                            active: verticalActiveTab === "3",
                            "tab_link":true
                        })}
                        onClick={() => {
                            toggleVertical("3");
                        }}
                        >
                            Female ({props.female?props.female.length: 0})
                        </NavLink>
                    </NavItem>
                    </Nav>
                </Col>
                <Col md="12  mt-md-4 mt-1 p-0">
                    <TabContent
                    activeTab={verticalActiveTab}
                    className="text-muted table__content mt-4 mt-md-0"
                    >
                        <TabPane tabId="1">
                            <All data={props.all}/>
                        </TabPane>
                        <TabPane tabId="2">
                            <Male data={props.male}/>
                        </TabPane>
                        <TabPane tabId="3">
                            <Female data={props.female}/>
                        </TabPane>
                        </TabContent>
                </Col>
            </Row>
            {loading?<div className='spin'><InfinitySpin color="#3aaa35" width='150' height="45"/></div>:
                <button className='load_more' onClick={() => getMoreData(verticalActiveTab)}>
                    Load More
                </button>
            }
            
        </Container>
    )
}

export default UiCards