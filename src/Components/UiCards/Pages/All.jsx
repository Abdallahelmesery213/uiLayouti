import React from 'react'
import Card from '../Card'
import Masonry from 'react-masonry-css'

const All = (props) => {
    const breakpointColumnsObj = {
        default: 4,
        600: 1
    };
    return (
        <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
                {props.data.map((person, i) => <Card key={i} person={person}/>)}
        </Masonry>
    )
}

export default All