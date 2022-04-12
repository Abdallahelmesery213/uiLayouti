import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Col, Row } from 'reactstrap'
import './header365.scss'
const Category = () => {
    const categ = useSelector(state => state.main.category)
    const navigate = useNavigate()
    const [cat, setCateg] = useState(null)
    useEffect(() => {
        if(categ) {
            setCateg(categ)
        }
    }, [categ])
    return (
        <Row className='category__content'>
            <Col className='category__ads' xs={4}>
                <div className='category__ads__card'>
                    <img src='https://assets.website-files.com/618b0aafa4afde65f2fe38fe/6195c044d4f210d3b48c9d6b_menu_icon_1.jpg' alt=''/>
                    <h3>
                        Learn About Stacking
                    </h3>
                    <p>
                        Learn what Stacking is, how it works, and start earning BTC rewards
                    </p>
                </div>
            </Col>
            <Col xs={8}>
                <Row>
                    {cat? cat.map(c =><Col xs={6} key={c.id} className="p-0" onClick={() => navigate(`/365design/category/${c.id}`)}>
                        <div className='category__card mb-3'>
                            <h3>
                                {c.nameEn}
                            </h3>
                            <p>
                                Learn what Stacking is, how it works, and start earning BTC rewards
                            </p>
                        </div>
                    </Col> ): null}
                </Row>
            </Col>
        </Row>
    )
}

export default Category