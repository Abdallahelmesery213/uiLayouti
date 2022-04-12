import React from 'react'
import CardParag from '../CardParag'
import Masonry from 'react-masonry-css'


const Paragraphs = (props) => {
    const breakpointColumnsObj = {
        default: 3,
        600: 1
    };
    return (
            <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
                {props.data.map((d, i) => <CardParag key={i} data={d}/>)}
            </Masonry>
    )
}

export default Paragraphs