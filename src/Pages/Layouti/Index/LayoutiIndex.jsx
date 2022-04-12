import React from 'react'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../../Components/Footer/Footer'
import LayoutiHeader from '../../../Components/LayoutiHeader/LayoutiHeader'
import ScrollTop from '../../../Components/ScrollTop/ScrollTop'
import SideBar from '../../../Components/SideBar/SideBar'
import Cursor from '../../../Cursor';
const LayoutiIndex = () => {
    useEffect(() => {
        document.querySelector("body").style.padding = "0px" 
    })
    return (
        <>
            <LayoutiHeader />
            <SideBar />
            <Cursor />
            <Outlet />
            <ScrollTop />
            {/* <Footer /> */}
        </>
    )
}

export default LayoutiIndex