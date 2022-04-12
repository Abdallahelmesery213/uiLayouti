import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import HomeCard365 from '../../../Components/365HomeCard/HomeCard365'
import Header from '../../../Components/Header/Header'
import {LinkActive} from '../../../store/linkactive'
const Home365 = () => {
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(LinkActive.setType('design'))
      window.scrollTo(0,0)
    }, [dispatch])

  return (
    <div>
      <Header type="365" />
      <HomeCard365 />
    </div>
  )
}

export default Home365