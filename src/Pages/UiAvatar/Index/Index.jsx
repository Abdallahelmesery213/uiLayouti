import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../../Components/Footer/Footer'
import HeaderOne from '../../../Components/HeaderOne/HeaderOne'
import ScrollTop from '../../../Components/ScrollTop/ScrollTop'
import SideBar from '../../../Components/SideBar/SideBar'
import Cursor from '../../../Cursor';
import Alert from '../../../Components/Alert/Alert'
import { useDispatch } from 'react-redux'
import { avatarActions } from '../../../store/UiAvatarSlice'
import axios from 'axios'
const Index = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}contents`)
        .then((res) => {
            dispatch(avatarActions.setData(res.data.data))
        })
    }, [dispatch])

    return (
        <>
            <Cursor />
            <HeaderOne />
            <Alert />
            <SideBar />
            <Outlet />
            <ScrollTop />
            <Footer />
        </>
    )
}

export default Index