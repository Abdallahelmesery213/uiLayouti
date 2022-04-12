import React from 'react'
import Masonry from 'react-masonry-css'

import Card from '../Card'
const Headlines = (props) => {
    const breakpointColumnsObj = {
        default: 3,
        600: 1
    };
    return (
            <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
                {props.data.map((d, i) => <Card key={i} data={d}/>)}
            </Masonry>
    )
}

export default Headlines