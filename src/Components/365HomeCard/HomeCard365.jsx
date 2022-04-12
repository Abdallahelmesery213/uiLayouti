import React, {useEffect, useState} from 'react'
import { Container } from 'reactstrap'
import Card from './Card'
import Masonry from 'react-masonry-css'
import { useSelector, useDispatch } from 'react-redux'
import {InfinitySpin } from 'react-loader-spinner'
import axios from 'axios'
import { DesignActions } from '../../store/Design365'
const HomeCard365 = () => {
  const dispatch = useDispatch()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const designs = useSelector(state => state.design.data)
  const next = useSelector(state => state.design.next)
  const [page, setPage] = useState(2);
  const breakpointColumnsObj = {
    default: 3,
    600: 1
  };

  function getMoreData() {
    setLoading(true)
    axios.get(`${process.env.REACT_APP_API}Design365-paginate/${page}`)
    .then(res => {
      dispatch(DesignActions.setDesignData(res.data.data))
      setPage(page+1)
      setLoading(false)
    })
}

  useEffect(() => {
    if(designs.length !== 0) {
      setData(designs);
    }
  }, [designs])

  return (
      <Container className=' card365_cont '>
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
          {data.map(d =>  <Card key={d.id} data={d}/>)}
        </Masonry>
        {next === 1?<>{loading?<div className='spin'><InfinitySpin color="#3aaa35" width='150' height="45"/></div>:
            <button className='load_more' onClick={getMoreData}>
                Load More
            </button>
        }</>:null}
      </Container>
  )
}

export default HomeCard365