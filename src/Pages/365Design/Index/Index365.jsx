import React, {useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../../Components/Footer/Footer'
import Header365 from '../../../Components/Header365/Header365';
import ScrollTop from '../../../Components/ScrollTop/ScrollTop'
import Searchbar from '../../../Components/SearchBar/Searchbar';
import Cursor from '../../../Cursor';
import SideBar from '../../../Components/SideBar/SideBar'
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { DesignActions } from '../../../store/Design365';
const Index365 = () => {
    const dispatch =  useDispatch()

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}Design365`)
        .then(res => {
            dispatch(DesignActions.setDesignData(res.data.data))
        })
    }, [dispatch])
    return (
        <>
            <Header365 />
            <Searchbar />
            <SideBar />
            <Cursor />
            <Outlet />
            <ScrollTop />
            <Footer />
        </>
    )
}

export default Index365