import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { 
        Container,
        Row,
        Col
    } from 'reactstrap'
import './headerone.scss'
import { useSelector } from 'react-redux'

const HeaderOne = () => {
    const [active, setActive] = useState({ui:'', content: ''})
    const linkType = useSelector(state => state.linkactive.type)
    function sideToggle () {
        document.querySelector('.sidebar').classList.toggle('active')
    }
    useEffect(() => {
        let offset = 0
        window.addEventListener('scroll', (e) => {
            if(window.scrollY > offset) {
                document.querySelector('.header_one').classList.add('active') 
            }else{
                document.querySelector('.header_one').classList.remove('active') 
            }
            if(window.scrollY > 200) {
                document.querySelector('.scroll_top').style.display = "flex"
            }else {
                document.querySelector('.scroll_top').style.display = "none"
            }
            offset = window.scrollY
        })
    }, [])
    useEffect(() => {
        switch (linkType) {
            case "ui":
                setActive({ui:'active', content: ''})
                break;
            case "content":
                setActive({ui:'', content: 'active'})
                break;
            default:
                break;
        }
    }, [linkType])
    return (
        <div className={`header_one`}>
            <Container className=' h-100'>
                <Row className='align-items-center justify-content-between h-100'>
                    <Col xs="2" className='p-0'>
                        <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 66H66V0H0V66ZM1.87004 64.13H64.13V1.87003H1.87004V64.13Z" fill="#23262B"/>
                            <path d="M40.7311 41.8022C40.7311 41.6607 40.8018 41.4014 40.9432 41.0242C41.179 40.4113 41.3086 39.8455 41.3322 39.3269C41.3794 38.8083 41.4029 38.2189 41.4029 37.5589L41.4383 35.2604V30.3806C41.4383 29.1783 41.4383 28.2353 41.4383 27.5517C41.4383 26.868 41.4265 26.4319 41.4029 26.2433C41.3558 26.0312 41.2969 25.8072 41.2261 25.5715C41.179 25.3357 41.0965 25.0764 40.9786 24.7935C40.8607 24.5106 40.7664 24.2513 40.6957 24.0156C40.6486 23.7798 40.625 23.5559 40.625 23.3437C40.625 22.943 40.8136 22.6247 41.1908 22.389C41.568 22.1297 42.0512 22 42.6406 22H42.9942C43.7721 22 44.4086 22.1532 44.9037 22.4597C45.4223 22.7426 45.6816 23.1787 45.6816 23.7681C45.6816 23.8859 45.6581 24.0274 45.6109 24.1924C45.5638 24.3338 45.5166 24.4988 45.4695 24.6874C45.3516 25.0411 45.2101 25.489 45.0451 26.0312C44.9273 26.5498 44.8683 28.8129 44.8683 32.8205C44.8683 36.8752 44.9744 39.1501 45.1866 39.6452C45.3752 40.1874 45.7052 40.5174 46.1767 40.6353C46.6717 40.7531 47.4615 40.8121 48.5459 40.8121C49.0881 40.8121 49.536 40.7885 49.8896 40.7414C50.2668 40.6942 50.5968 40.6353 50.8797 40.5645C51.1862 40.4938 51.4573 40.4113 51.693 40.317C51.9287 40.1992 52.1763 40.0931 52.4356 39.9988C52.9778 39.7866 53.3668 39.6805 53.6025 39.6805C54.2861 39.6805 54.628 40.1402 54.628 41.0596V41.4132C54.628 42.1912 54.3922 42.7098 53.9208 42.9691C53.4493 43.2284 52.5888 43.3581 51.3394 43.3581H48.263L47.874 43.3227H47.485C44.4204 43.3227 42.5463 43.2402 41.8626 43.0752C41.1083 42.9337 40.7311 42.5094 40.7311 41.8022Z" fill="#42BF64"/>
                            <path d="M14.4046 22.4243C15.7247 22.4243 16.3848 22.9547 16.3848 24.0156L16.2433 25.1825C16.2198 25.4418 16.1962 25.7365 16.1726 26.0665C16.1726 26.373 16.1726 26.7384 16.1726 27.1627V30.3098C16.1726 32.5022 16.2315 34.2939 16.3494 35.6847C16.4673 37.0756 16.6912 38.1718 17.0213 38.9733C17.3749 39.7748 17.8582 40.3288 18.4711 40.6353C19.1076 40.9182 19.9209 41.0596 20.911 41.0596C22.0661 41.0596 22.9855 40.7649 23.6691 40.1756C24.3764 39.5627 24.8832 38.8083 25.1897 37.9125C25.6612 36.5687 25.8969 33.4216 25.8969 28.4711C25.8969 26.6323 25.8615 25.3829 25.7908 24.7228C25.7437 24.3692 25.7083 24.0863 25.6847 23.8741C25.6612 23.662 25.6494 23.5087 25.6494 23.4144C25.6494 22.6836 26.168 22.3182 27.2053 22.3182H27.6649C28.16 22.3182 28.5725 22.5422 28.9026 22.9901C29.2562 23.4144 29.433 23.8623 29.433 24.3338V24.8289C29.433 25.0175 29.3269 25.4536 29.1147 26.1372C28.8554 26.7973 28.7258 27.4102 28.7258 27.976C28.6786 28.3061 28.6551 28.86 28.6551 29.638C28.6551 30.3924 28.6551 31.406 28.6551 32.679V33.068C28.6551 34.2231 28.6315 35.1897 28.5843 35.9676C28.5608 36.7456 28.49 37.4174 28.3722 37.9832C28.2779 38.549 28.1364 39.044 27.9478 39.4684C27.7592 39.8927 27.4999 40.317 27.1699 40.7414C25.8969 42.4387 23.6338 43.2873 20.3806 43.2873C16.1608 43.2873 13.7327 41.3189 13.0962 37.3821C12.9547 36.3919 12.884 34.9304 12.884 32.9973C12.884 31.0406 12.8605 29.5319 12.8133 28.4711C12.7897 27.4102 12.6483 26.5498 12.389 25.8897C12.2475 25.5597 12.1415 25.2768 12.0707 25.041C12.0236 24.8053 12 24.6167 12 24.4753C12 23.108 12.8015 22.4243 14.4046 22.4243ZM35.2192 43.2873H34.3352C34.1702 43.2873 33.9345 43.2756 33.628 43.252C33.3451 43.2048 33.0504 43.1341 32.744 43.0398C32.4611 42.9455 32.2136 42.8159 32.0014 42.6509C31.7892 42.4858 31.6831 42.2855 31.6831 42.0497C31.6831 41.7432 31.8482 41.26 32.1782 40.5999C32.5554 39.8927 32.7911 39.1501 32.8854 38.3722C32.9326 37.9478 32.9679 37.2406 32.9915 36.2505C33.0386 35.2604 33.0622 33.9638 33.0622 32.3608C33.0622 30.7578 33.0504 29.473 33.0269 28.5064C33.0033 27.5399 32.9679 26.8798 32.9208 26.5262C32.8265 25.819 32.5907 25.1943 32.2136 24.6521C31.8599 24.1099 31.6831 23.662 31.6831 23.3084C31.6831 23.0255 31.801 22.8015 32.0368 22.6365C32.2961 22.4715 32.5907 22.3418 32.9208 22.2475C33.2508 22.1532 33.5809 22.0943 33.9109 22.0707C34.2645 22.0236 34.5356 22 34.7242 22H35.3253C36.0561 22 36.6219 22.1297 37.0227 22.389C37.3763 22.6719 37.5531 22.9547 37.5531 23.2376V23.4498C37.5531 23.5912 37.4234 23.9449 37.1641 24.5106C36.8812 25.0057 36.7044 25.6893 36.6337 26.5616C36.5865 26.9859 36.5394 27.7638 36.4922 28.8954C36.4687 30.0034 36.4569 31.4768 36.4569 33.3155C36.4569 35.1543 36.4569 36.5805 36.4569 37.5942C36.4805 38.6079 36.504 39.209 36.5276 39.3976C36.5983 39.7984 36.7751 40.2699 37.058 40.8121C37.3409 41.3307 37.4823 41.7668 37.4823 42.1204C37.4823 42.4505 37.2584 42.7334 36.8105 42.9691C36.3626 43.1813 35.8322 43.2873 35.2192 43.2873Z" fill="#23262B"/>
                        </svg>
                    </Col>
                    <Col xs={8}>
                        <Row className='navs align-items-center justify-content-between h-100 fs-6 '>
                            <ul className='navbar_one'>
                                <li className='nav_item'>
                                    <Link className={`nav_item_link ${active.ui}`} to='/uiavatar'>UI Generator</Link>
                                </li>
                                <li className='nav_item'>
                                    <Link className={`nav_item_link ${active.content}`} to='/uiavatar/contentgenerator'>Content Generator</Link>
                                </li>
                                <li>
                                    {/* <a className='nav_item_link' href='https://365design.layouti.com/' target='blank'>365 Design</a> */}
                                    <Link className='nav_item_link' to='/365design'>365 Design</Link>
                                </li>
                                <li className='nav_item'>
                                    <Link className={`nav_item_link`} to='/365design/products'>Products</Link>
                                </li>
                                <li className='nav_item'>
                                    {/* <a className='nav_item_link' href='https://365design.layouti.com/layouti-tree/' target='blank'>Links</a> */}
                                    <Link className='nav_item_link' to='/365design/links'>Links</Link>
                                </li>
                                <li className='nav_item nav_item_btn '>
                                    <a className='nav_item_link' href='https://365design.layouti.com/layouti-tree/' target='blank'>Reach out</a>
                                    {/* <Link className='nav_item_link' to='/*'>Reach out</Link> */}
                                </li>
                                <li className='nav_item nav_item_btn '>
                                    <button className='toggle-btn' onClick={sideToggle}>
                                        <svg width="30" height="30" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M3 6V7.66667H23V6H3ZM3 12.6667V14.3333H23V12.6667H3ZM3 19.3333V21H23V19.3333H3Z" fill="black"/>
                                        </svg>
                                    </button>
                                </li>
                            </ul>
                        </Row>
                    </Col>
                    <Col className='toggle_mob p-0'>
                        <button className='toggle-btn' onClick={sideToggle}>
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M3 6V7.66667H23V6H3ZM3 12.6667V14.3333H23V12.6667H3ZM3 19.3333V21H23V19.3333H3Z" fill="black"/>
                            </svg>
                        </button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HeaderOne