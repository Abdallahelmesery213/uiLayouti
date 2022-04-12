import React, { useState } from 'react'
import { Container, Row, Col, Nav,
    NavItem,
    NavLink, TabContent,
    TabPane, } from 'reactstrap'
import './uicards.scss'
import classnames from 'classnames'
import Paragraphs from './Pages/Paragraphs'
import Headlines from './Pages/Headlines'
import { useDispatch } from 'react-redux'
import { avatarActions } from '../../store/UiAvatarSlice'
import {InfinitySpin } from 'react-loader-spinner'
import axios from 'axios'

const ContentCard = (props) => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [verticalActiveTab, setverticalActiveTab] = useState("1");
    const toggleVertical = tab => {
        if (verticalActiveTab !== tab) {
            setverticalActiveTab(tab);
        }
    };

    function getMoreData(id) {
        const type = id === "1"?1:2
        setLoading(true)
        axios.post(`${process.env.REACT_APP_API}contents-paginate`, {type})
        .then(res => {
            id === "1"?dispatch(avatarActions.setHeadline(res.data.data)):
            dispatch(avatarActions.setParagraphs(res.data.data))
            setLoading(false)
        })
    }

    return (
        <Container>
            <Row >
            <Col md="12" className='  p-0'>
                    <Nav pills className="flex-row tabs_cont  gap-3 flex-nowrap justify-content-center navs_aside">
                    <NavItem  className="nav_tap_to">
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
                            Headlines ({props.headline?props.headline.length: 0})
                        </NavLink>
                    </NavItem>

                    <NavItem  className="nav_tap_to">
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
                            Paragraphs ({props.paragraphs?props.paragraphs.length: 0})
                        </NavLink>
                    </NavItem>
                    </Nav>
                </Col>
                <Col md="12  p-0 mt-4">
                    <TabContent
                    activeTab={verticalActiveTab}
                    className="text-muted table__content mt-1 mt-md-0"
                    >
                        <TabPane tabId="1">
                            <Headlines data={props.headline}/>
                        </TabPane>
                        <TabPane tabId="2">
                            <Paragraphs data={props.paragraphs}/>
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

export default ContentCard