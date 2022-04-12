import React, {useEffect, useState} from 'react'
import ContentCard from '../../../Components/ContentCards/ContentCard'
import Header from '../../../Components/Header/Header'
import { useDispatch } from 'react-redux'
import {LinkActive} from '../../../store/linkactive'
import {useSelector } from 'react-redux'
import ScrollToTop from '../../../Components/ScrollToTop/ScrollToTop'

const ContentGenerator = () => {
    const dispatch = useDispatch()
    let ui = useSelector(state => state.ui.ui)
    const [headline, setHeadline] = useState([])
    const [paragraphs, setParagraphs] = useState([])


    useEffect(() => {
        dispatch(LinkActive.setType('content'))
        if(ui) {
            setHeadline(ui.headlines)
            setParagraphs(ui.paragraphs)
        }
    }, [dispatch, ui])

    return (
        <>
            <Header type="content"/>
            <ContentCard headline={headline} paragraphs={paragraphs}/>
            <ScrollToTop />
        </>
    )
}

export default ContentGenerator