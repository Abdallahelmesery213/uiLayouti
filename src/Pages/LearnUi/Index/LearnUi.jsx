import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../../Components/Footer/Footer'
import HeaderLearn from '../../../Components/HeaderLearn/HeaderLearn'
import ScrollTop from '../../../Components/ScrollTop/ScrollTop'
import SideBar from '../../../Components/SideBar/SideBar'
import Cursor from '../../../Cursor'

const LearnUi = () => {
    return (
        <>
            <Cursor />
            <HeaderLearn />
            <SideBar />
            <Outlet />
            <ScrollTop />
            <Footer />
        </>
    )
}

export default LearnUi