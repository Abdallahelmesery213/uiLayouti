import React, { useEffect, useState } from 'react'
import UiCards from '../../../Components/UiCards/UiCards'
import Header from '../../../Components/Header/Header'
import { useDispatch, useSelector } from 'react-redux'
import {LinkActive} from '../../../store/linkactive'
import MetaTags from 'react-meta-tags'
import ScrollToTop from '../../../Components/ScrollToTop/ScrollToTop'

const UIGenerator = () => {
    const dispatch = useDispatch()
    let ui = useSelector(state => state.ui.ui)
    const [all, setAll] = useState([])
    const [male, setMale] = useState([])
    const [female, setFemale] = useState([])

    useEffect(() => {
        dispatch(LinkActive.setType('ui'))
        if(ui) {
            setAll(ui.allPersons)
            setMale(ui.malePersons)
            setFemale(ui.femalePersons)
        }
    }, [dispatch, ui])

    return (
        <>
            <MetaTags>
                <title>UI Avatar | Layouti</title>
            </MetaTags>
            <Header type="ui"/>
            <UiCards male={male} female={female} all={all}/>
            <ScrollToTop />
        </>
    )
}

export default UIGenerator