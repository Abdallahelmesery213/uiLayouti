import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { 
        Container,
        Row,
        Col
    } from 'reactstrap'
import './headerone.scss'
import { useSelector } from 'react-redux'

const LayoutiHeader = () => {
    const [active, setActive] = useState({ui:'', content: ''})
    const linkType = useSelector(state => state.linkactive.type)
    function sideToggle () {
        document.querySelector('.sidebar').classList.toggle('active')
    }
    useEffect(() => {
        let offset = 0
        window.addEventListener('scroll', (e) => {
            if(window.scrollY > offset) {
                document.querySelector('.header_layouti').classList.add('active') 
            }else{
                document.querySelector('.header_layouti').classList.remove('active') 
            }

            if(window.scrollY > 20) {
                document.querySelector('.header_layouti').classList.add('white') 
            }else {
                document.querySelector('.header_layouti').classList.remove('white') 
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
        <div className={`header_layouti`}>
            <Container className=' h-100'>
                <Row className='align-items-center justify-content-between h-100'>
                    <Col xs="2" className='p-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" viewBox="0 0 66 66" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 66H66V0H0V66ZM1.87004 64.13H64.13V1.87003H1.87004V64.13Z" fill="#23262B"/>
                            <path d="M37.6204 29.3698V28.8197C37.5104 26.9498 37.2904 24.8597 37.0703 23.0998C36.9604 22.3298 36.7403 21.5597 36.4103 21.0098C36.0803 20.4598 35.7503 20.2397 35.2004 20.2397C34.6504 20.2397 34.2104 20.4598 33.8804 20.8997C33.6604 21.2297 33.4403 21.5597 33.3304 21.8897C32.4503 23.8697 32.2304 25.9598 32.1203 28.4897C32.1203 29.2598 32.0104 30.0298 32.0104 30.5798C31.9004 32.0098 31.9004 33.1097 31.9004 35.0897C32.0104 37.3997 32.2304 39.2698 32.3404 40.3697L32.4503 40.8098C32.5604 42.0197 32.8904 42.8998 33.3304 43.7798C33.7703 44.3297 34.3204 44.6597 34.8704 44.6597H34.9804C35.5304 44.6597 36.0803 44.2198 36.4103 43.6697C36.6304 43.3397 36.7403 43.0097 36.8504 42.6797C36.8504 42.3497 36.9604 42.0197 37.0703 41.6897C37.2904 40.6997 37.4003 39.5998 37.4003 38.4998C37.6204 35.4197 37.6204 34.2098 37.6204 33.3298C37.7303 31.5698 37.7303 31.0198 37.6204 29.3698Z" fill="#42BF64"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M13.0045 43.6292C13.0361 43.6443 13.0646 43.6579 13.0891 43.6701C13.3091 43.78 13.4191 43.8901 13.4191 44.0001C13.5291 44.11 13.5291 44.2201 13.4191 44.3301C13.3091 44.44 13.0891 44.5501 12.8691 44.5501H12.6491C10.9991 44.44 10.0091 43.3401 9.89914 41.14V35.4201V33.6601C9.78906 32.0101 9.78906 29.8101 9.78906 29.3701V28.7101V27.94V19.69V18.5901V17.6001C9.78906 17.1601 9.89914 16.9401 10.1191 16.8301C10.3391 16.72 10.5591 16.72 10.7791 16.8301C10.9991 16.9401 11.1091 17.1601 11.1091 17.4901V29.4801C11.2191 30.58 11.2191 32.3401 11.2191 33.55C11.3291 34.4301 11.3291 35.2 11.3291 35.9701C11.4391 37.6201 11.4391 39.0501 11.4391 40.7001C11.4391 41.5801 11.6591 42.3501 12.0991 42.9001C12.2947 43.2912 12.751 43.5085 13.0045 43.6292ZM52.9216 43.8819C52.9455 43.8904 52.9724 43.8904 53.0192 43.8904L53.4591 44.1104C53.3491 44.4404 53.2391 44.6603 52.9091 44.6603H52.6892C50.9291 44.5504 50.0492 43.4504 49.9391 41.2504V33.7703V30.1403C49.8291 28.8203 49.8291 27.6104 49.8291 26.4004V21.5603H49.7192C49.6091 21.5603 49.2791 21.5603 49.1691 21.4504C49.0592 21.3404 49.0591 21.1204 49.0591 20.9003C49.0591 20.4604 49.2791 20.2403 49.7192 20.2403V19.8004V18.7004V17.7104C49.7192 17.4904 49.9391 17.0504 50.1591 16.9403H50.2691H50.4891C50.5991 16.9403 51.0392 17.0504 51.0392 17.7104V20.2403H51.8091C52.2491 20.2403 52.4691 20.5703 52.4691 20.9003C52.4691 21.1204 52.4691 21.5603 51.8091 21.5603H51.0392V22.6604C51.0392 23.9122 51.0715 25.0025 51.1011 26.0013V26.0014V26.0016L51.1011 26.0018C51.1261 26.8459 51.1491 27.6247 51.1491 28.3804V32.1203V35.6404C51.2591 37.1804 51.2591 38.9404 51.2591 40.9204C51.2591 41.8004 51.4791 42.5704 51.9191 43.1204C52.1391 43.5604 52.6891 43.7804 52.7991 43.7804C52.8623 43.8436 52.8892 43.8705 52.9216 43.8819ZM29.3691 23.4303C29.3691 22.4403 29.3691 21.6704 29.2591 20.9004C29.2591 20.4603 28.9291 20.1303 28.5991 20.1303C28.3791 20.1303 28.0491 20.2404 27.9391 20.5704C27.9391 20.6992 27.9013 20.8281 27.8701 20.9349C27.848 21.0104 27.8291 21.0748 27.8291 21.1203V21.2304V24.3104V26.6204V30.6903V36.1904V37.0704V38.6103V39.3804V40.1504C27.7192 41.3603 27.4992 41.8003 27.1692 42.4601L27.1691 42.4604C26.8391 43.0104 26.0691 43.1204 25.7391 43.0104C25.2991 42.9003 25.0791 42.5703 24.9691 42.2403C24.8591 41.2503 24.8591 40.2603 24.8591 39.4904C24.8591 38.5004 24.8591 37.9503 24.7491 37.5104V36.8504V36.1904V33.1104V31.0203V29.7003V23.8704V23.3204C24.7491 22.5504 24.7491 21.5604 24.5291 20.9004C24.1991 20.1303 23.5391 19.9104 22.5491 19.9104C22.2192 19.9104 22.1092 20.0203 21.9992 20.1302L21.9991 20.1303C21.8891 20.2404 21.7791 20.4603 21.7791 20.6804C21.7791 21.0104 21.9991 21.3404 22.3291 21.3404C23.2091 21.3404 23.4291 21.4503 23.4291 21.8904V22.7703V23.8704C23.4291 27.1704 23.4291 29.2604 23.5391 31.3503V37.4004V40.4804C23.5391 41.2503 23.5391 42.1304 23.7591 42.7904C23.9791 43.6704 24.6391 44.3304 25.5191 44.3304C26.3991 44.4404 27.2791 44.1104 27.8291 43.5603L27.9391 43.4504V47.7404C27.9391 47.9604 27.9391 48.2904 28.0491 48.6204C28.1591 48.8403 28.3791 48.9504 28.5991 48.9504C28.7091 48.9504 28.9291 48.9504 29.0391 48.8403C29.3691 48.6204 29.3691 48.1803 29.2591 47.7404L29.3691 23.4303ZM55.3291 21.7801C55.7691 21.7801 56.0991 21.4501 56.0991 21.0102C56.0991 20.5701 55.7691 20.2401 55.3291 20.2401C54.8891 20.2401 54.5591 20.5701 54.5591 21.0102C54.5591 21.4501 54.8891 21.7801 55.3291 21.7801ZM46.7492 20.9004C46.8591 21.6704 46.8591 22.5504 46.8591 23.4303V43.3404C46.9691 43.7804 46.9691 44.2203 46.6391 44.4404C46.5291 44.5503 46.3091 44.5503 46.1991 44.5503C45.8691 44.5503 45.6491 44.4404 45.5391 44.2203C45.4292 44.1104 45.4292 43.7804 45.4292 43.4504L45.3191 43.5603C44.7692 44.1104 43.8891 44.4404 43.0091 44.3304C42.1292 44.3304 41.4692 43.6704 41.2491 42.7904C41.0291 42.1304 41.0291 41.2503 41.0291 40.4804V37.4004V31.3503C40.9191 29.2604 40.9191 27.1704 40.9191 23.8704V22.7703V21.8904C40.9191 21.4503 40.6991 21.3404 39.8192 21.3404C39.4892 21.3404 39.2691 21.0104 39.2691 20.6804C39.2691 20.4603 39.3791 20.2404 39.4892 20.1303C39.5991 20.0204 39.7091 19.9104 40.0391 19.9104C41.0291 19.9104 41.6891 20.1303 42.0191 20.9004C42.2391 21.5604 42.2391 22.5504 42.2391 23.3204V23.8704V29.7003V31.0203V33.1104V36.1904V36.8504V37.5104C42.3491 37.9503 42.3491 38.5004 42.3491 39.4904C42.3491 40.2603 42.3491 41.2503 42.4592 42.2403C42.5691 42.5703 42.7892 42.9003 43.2291 43.0104C43.5591 43.1204 44.3291 43.0104 44.6591 42.4604L44.6592 42.4602C44.9892 41.8003 45.2092 41.3603 45.3191 40.1504V39.3804V38.6103V37.0704V36.1904V30.6903V26.6204V24.3104V21.2304V21.1203C45.3191 21.0748 45.338 21.0104 45.3601 20.9349C45.3914 20.8281 45.4292 20.6992 45.4292 20.5704C45.5391 20.2404 45.8691 20.1303 46.0892 20.1303C46.4192 20.1303 46.7492 20.4603 46.7492 20.9004ZM20.7891 43.4501C20.3491 43.4501 20.2391 43.0102 20.1291 42.3502C20.0191 41.5802 19.9091 40.7002 19.9091 39.9302V28.7102V27.5002V24.9702V22.3302C19.9091 21.0102 19.0291 20.1302 17.8191 20.1302H16.1691C15.7291 20.1302 15.5091 20.4602 15.5091 20.7902C15.5091 21.0102 15.5091 21.2302 15.6191 21.3402C15.7291 21.4502 15.9491 21.4502 16.1691 21.4502H17.2691C17.9291 21.4502 18.2591 21.5602 18.3691 21.6702C18.4791 21.7802 18.4791 21.8902 18.4791 22.0002C18.5891 22.7702 18.5891 23.5402 18.5891 24.2002C18.6628 24.9375 18.6377 25.7242 18.6131 26.4941V26.4941V26.4941V26.4941C18.6011 26.8729 18.5891 27.2475 18.5891 27.6102V30.4702V34.2101V34.4302H18.3691C16.3891 34.5401 15.0691 35.7502 14.6291 37.8402C14.4091 38.9402 14.4091 40.4802 14.5191 41.5802V41.6902L14.5323 41.7693C14.6385 42.4114 14.7609 43.1507 15.2891 43.8902C15.6191 44.4401 16.0591 44.6602 16.6091 44.6602C16.7191 44.6602 16.8016 44.6327 16.8841 44.6052C16.9666 44.5777 17.0491 44.5502 17.1591 44.5502C17.2141 44.5502 17.2416 44.5227 17.2691 44.4952C17.2966 44.4677 17.3241 44.4401 17.3791 44.4401C17.9666 44.1464 18.2926 43.5912 18.5899 43.0849C18.6266 43.0224 18.6628 42.9606 18.6991 42.9002L18.9191 42.3502C18.9191 42.4791 18.9568 42.6079 18.9881 42.7147C19.0102 42.7902 19.0291 42.8546 19.0291 42.9002C19.2491 43.6702 19.6891 44.4401 20.5691 44.5502C20.8991 44.5502 21.3391 44.5502 21.3391 44.0002C21.4491 43.6702 21.0091 43.4501 20.7891 43.4501ZM57.9692 43.6702C57.9224 43.6702 57.8955 43.6702 57.8716 43.6617C57.8392 43.6503 57.8124 43.6234 57.7491 43.5602C57.6392 43.5602 57.0891 43.3402 56.8691 42.9002C56.4291 42.3502 56.2091 41.5802 56.2091 40.7002C56.2091 38.9402 56.2091 37.0702 56.0991 35.2001C56.0991 34.2786 56.0724 33.357 56.0453 32.4222V32.4221C56.0175 31.4602 55.9892 30.4843 55.9892 29.4802V23.5402C55.9892 22.8802 55.5491 22.7702 55.4391 22.7702H55.2191H55.1091C54.8891 22.8802 54.6692 23.3201 54.6692 23.5402V24.9701V26.4002V27.8302V28.6001V29.2601C54.6692 29.7002 54.6692 31.9001 54.7791 33.5501V35.3102V41.0302C54.8891 43.2302 55.8791 44.3302 57.5291 44.4401H57.7491C58.0791 44.4401 58.1891 44.2202 58.2992 43.8902C58.4091 43.8902 58.1891 43.7801 57.9692 43.6702Z" fill="#23262B"/>
                        </svg>
                    </Col>
                    <Col xs={8}>
                        <Row className='navs align-items-center justify-content-between h-100 fs-6 '>
                            <ul className='navbar_one'>
                                <li className='nav_item'>
                                    {/* <Link className={`nav_item_link ${active.ui}`} to='/uiavatar'>UI Generator</Link> */}
                                </li>
                                <li className='nav_item'>
                                    {/* <Link className={`nav_item_link ${active.content}`} to='/uiavatar/contentgenerator'>Content Generator</Link> */}
                                </li>
                                <li>
                                    {/* <a className='nav_item_link' href='https://365design.layouti.com/' target='blank'>365 Design</a> */}
                                    {/* <Link className='nav_item_link' to='/365design'>365 Design</Link> */}
                                </li>
                                <li className='nav_item'>
                                    {/* <Link className={`nav_item_link`} to='/365design/products'>Products</Link> */}
                                </li>
                                <li className='nav_item'>
                                    {/* <a className='nav_item_link' href='https://365design.layouti.com/layouti-tree/' target='blank'>Links</a> */}
                                    {/* <Link className='nav_item_link' to='/365design/links'>Links</Link> */}
                                </li>
                                <li className='nav_item nav_item_btn '>
                                    {/* <a className='nav_item_link' href='https://365design.layouti.com/layouti-tree/' target='blank'>Reach out</a> */}
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

export default LayoutiHeader