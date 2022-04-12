import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { 
        Container,
        Row,
        Col
    } from 'reactstrap'
import './header365.scss'
import { useSelector } from 'react-redux'
import Category from './Category'

const Header365 = () => {
    const [active, setActive] = useState({design:'', content: '', links: "", product: "", cat: ""})
    const linkType = useSelector(state => state.linkactive.type)
    function searchToggle () {
        document.querySelector('.searchbar').classList.toggle('active')
    }
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
            case "design":
                setActive({design:'active', content: '', links:"", product: ""})
                break;
            case "content":
                setActive({ui:'', content: 'active', links: "", product: ""})
                break;
            case "links":
                setActive({ui:'', content: '', links: "active", product: ""})
                break;
            case "product":
                setActive({ui:'', content: '', links: "", product: "active"})
                break;
            case "cat":
                setActive({ui:'', content: '', links: "", cat: "active", product: ''})
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
                            <path d="M15.9217 27.0212C17.9646 27.0212 18.9861 27.8282 18.9861 29.4421C18.9861 30.1782 18.7718 30.879 18.3432 31.5444L17.6789 32.5425C17.6789 32.6557 17.8646 32.8398 18.2361 33.0946C18.6075 33.3353 18.9433 33.6892 19.2433 34.1564C19.5576 34.6094 19.7147 35.1332 19.7147 35.7278C19.7147 36.3224 19.629 36.8462 19.4576 37.2992C19.2861 37.7523 18.9933 38.1699 18.579 38.5521C18.1504 38.9202 17.6503 39.2033 17.0789 39.4015C16.5074 39.5997 15.9431 39.6988 15.3859 39.6988H15.1073C14.7073 39.6988 14.3216 39.6493 13.9501 39.5502C13.5787 39.4653 13.2501 39.3449 12.9643 39.1892C12.6786 39.0193 12.4429 38.8353 12.2572 38.6371C12.0857 38.4389 12 38.2336 12 38.0212C12 37.5965 12.2 37.3842 12.6 37.3842C12.7 37.3842 12.8429 37.4196 13.0286 37.4903C13.2286 37.547 13.4929 37.6319 13.8215 37.7452C14.4073 37.9858 15.0145 38.1062 15.6431 38.1062C16.2431 38.1062 16.7288 37.8938 17.1003 37.4691C17.4717 37.0444 17.6575 36.5347 17.6575 35.9402C17.6575 35.6429 17.6003 35.381 17.486 35.1544C17.386 34.9279 17.2503 34.7297 17.0789 34.5598C16.9217 34.39 16.7503 34.2484 16.5646 34.1351C16.3931 34.0219 16.236 33.944 16.0931 33.9015L15.2359 33.668C14.9645 33.6113 14.7644 33.5335 14.6359 33.4344C14.5073 33.3353 14.443 33.1725 14.443 32.9459C14.443 32.7761 14.7216 32.5425 15.2788 32.2452C16.436 31.6223 17.0146 30.8295 17.0146 29.8668C17.0146 29.4704 16.8789 29.1589 16.6074 28.9324C16.336 28.6918 15.9717 28.5714 15.5145 28.5714C15.0859 28.5714 14.5787 28.6988 13.993 28.9537C13.4358 29.2227 13.0501 29.3571 12.8358 29.3571C12.55 29.3571 12.4072 29.2014 12.4072 28.89C12.4072 28.536 12.5429 28.2458 12.8143 28.0193C13.0858 27.7786 13.4072 27.5875 13.7787 27.4459C14.1501 27.2902 14.5359 27.184 14.9359 27.1274C15.3359 27.0566 15.6645 27.0212 15.9217 27.0212Z" fill="#42BF64"/>
                            <path d="M27.2317 27C28.4461 27 29.0533 27.2973 29.0533 27.8919C29.0533 28.3166 28.6747 28.5573 27.9175 28.6139C27.5746 28.6422 27.246 28.6847 26.9317 28.7413C26.6174 28.7979 26.3174 28.89 26.0317 29.0174C25.7602 29.1306 25.5031 29.2934 25.2602 29.5058C25.0173 29.704 24.7959 29.9659 24.5959 30.2915C24.3673 30.6454 24.253 30.9923 24.253 31.332C24.253 31.7284 24.4673 31.9266 24.8959 31.9266L26.6531 31.7992C27.1675 31.7992 27.6389 31.8842 28.0675 32.0541C28.5104 32.2239 28.889 32.4646 29.2033 32.7761C29.5176 33.0875 29.7605 33.4627 29.9319 33.9015C30.1033 34.3263 30.1891 34.8076 30.1891 35.3456V35.6004C30.1891 36.1242 30.0819 36.6268 29.8676 37.1081C29.6676 37.5753 29.389 37.9858 29.0319 38.3398C28.689 38.6795 28.2818 38.9556 27.8104 39.168C27.3389 39.3662 26.8389 39.4653 26.3103 39.4653H25.8174C25.3174 39.4653 24.7887 39.3449 24.2316 39.1042C23.7315 38.8777 23.3244 38.5875 23.0101 38.2336C22.7101 37.8655 22.4743 37.4691 22.3029 37.0444C22.1315 36.6055 22.01 36.1596 21.9386 35.7066C21.8814 35.2394 21.8529 34.8005 21.8529 34.39V33.9015C21.8529 33.3919 21.8957 32.8327 21.9814 32.2239C22.0672 31.6152 22.2315 31.0135 22.4743 30.4189C22.7172 29.8243 23.0601 29.2651 23.503 28.7413C23.9458 28.2175 24.5316 27.7928 25.2602 27.4672C25.9317 27.1557 26.5889 27 27.2317 27ZM25.946 38.1699H26.1817C26.4674 38.1699 26.7389 38.1062 26.996 37.9788C27.2532 37.8514 27.4818 37.6815 27.6818 37.4691C27.8818 37.2568 28.0389 37.0019 28.1532 36.7046C28.2818 36.4073 28.3461 36.0888 28.3461 35.749V35.5791L28.3675 35.3031V35.2181L28.3461 35.1332C28.3461 34.3687 28.1532 33.7812 27.7675 33.3707C27.396 32.9459 26.8889 32.7336 26.246 32.7336H26.1817C25.5245 32.7336 24.9816 32.9318 24.553 33.3282C24.1244 33.7104 23.9101 34.1988 23.9101 34.7934V35.4093C23.9101 35.834 23.9673 36.2162 24.0816 36.556C24.1959 36.8958 24.3459 37.186 24.5316 37.4266C24.7316 37.6673 24.953 37.8514 25.1959 37.9788C25.4388 38.1062 25.6888 38.1699 25.946 38.1699Z" fill="#42BF64"/>
                            <path d="M38.1471 35.7278C38.1471 34.0006 37.0184 33.1371 34.7612 33.1371H34.2468C33.9897 33.1371 33.7754 33.1229 33.6039 33.0946C33.4325 33.0521 33.2896 32.9743 33.1753 32.861C33.0753 32.7336 32.9968 32.5637 32.9396 32.3514C32.8968 32.1248 32.8753 31.8205 32.8753 31.4382C32.8753 31.056 32.8968 30.6667 32.9396 30.2703C32.9825 29.8597 33.0325 29.4846 33.0896 29.1448C33.1611 28.7909 33.2325 28.4794 33.3039 28.2104C33.3754 27.9414 33.4468 27.7574 33.5182 27.6583C33.6611 27.4459 33.8897 27.3115 34.204 27.2548C34.5611 27.184 35.0969 27.1486 35.8112 27.1486C36.1827 27.1486 36.5041 27.1486 36.7756 27.1486C37.0613 27.1345 37.3042 27.1274 37.5042 27.1274L38.94 27.0212C39.5257 27.0212 39.8186 27.1911 39.8186 27.5309C39.8186 27.7857 39.7757 27.991 39.69 28.1467C39.6043 28.2883 39.4543 28.4015 39.24 28.4865C39.04 28.5573 38.7685 28.6068 38.4256 28.6351C38.0828 28.6634 37.647 28.6847 37.1184 28.6988C36.0898 28.713 35.4683 28.7838 35.254 28.9112C35.054 29.0245 34.8754 29.258 34.7183 29.612C34.5611 29.9517 34.4826 30.334 34.4826 30.7587C34.4826 30.971 34.4897 31.1409 34.504 31.2683C34.5183 31.3816 34.5611 31.4665 34.6326 31.5232C34.704 31.5656 34.8254 31.594 34.9969 31.6081C35.1826 31.6223 35.4326 31.6293 35.7469 31.6293C36.3755 31.6293 36.9613 31.7143 37.5042 31.8842C38.0471 32.0399 38.5114 32.2806 38.8971 32.6062C39.2971 32.9318 39.6043 33.3423 39.8186 33.8378C40.0472 34.3192 40.1615 34.8784 40.1615 35.5154C40.1615 36.1384 40.0472 36.7046 39.8186 37.2143C39.6043 37.7239 39.3043 38.1628 38.9185 38.5309C38.5328 38.899 38.0756 39.1821 37.547 39.3803C37.0184 39.5785 36.447 39.6776 35.8326 39.6776H35.5326C35.1183 39.6776 34.7183 39.6281 34.3326 39.529C33.9611 39.4299 33.6325 39.3024 33.3468 39.1467C33.0611 38.991 32.8325 38.8069 32.661 38.5946C32.4896 38.3822 32.4039 38.1699 32.4039 37.9575C32.4039 37.5187 32.6039 37.2992 33.0039 37.2992C33.1468 37.2992 33.5254 37.4337 34.1397 37.7027C34.7254 37.9717 35.3183 38.1062 35.9184 38.1062C36.5184 38.1062 37.0399 37.8938 37.4827 37.4691C37.9256 37.0302 38.1471 36.4498 38.1471 35.7278Z" fill="#42BF64"/>
                            <path d="M44.4101 30.4189V30.2066C44.3958 30.1358 44.3887 30.0438 44.3887 29.9305C44.3887 29.8172 44.3887 29.6757 44.3887 29.5058C44.3887 29.1377 44.3101 28.7767 44.153 28.4228C43.9958 28.0264 43.9172 27.814 43.9172 27.7857V27.6371C43.9172 27.3964 44.1101 27.2477 44.4958 27.1911C45.2673 27.0637 46.2745 27 47.5174 27H48.1818C50.1247 27 51.6177 27.545 52.6606 28.6351C53.7178 29.7111 54.2464 31.2046 54.2464 33.1158L54.225 33.3494C54.225 33.8591 54.175 34.4183 54.075 35.027C53.9893 35.6216 53.8035 36.2021 53.5178 36.7683C53.2321 37.3346 52.8249 37.8584 52.2963 38.3398C51.782 38.8211 51.1034 39.2033 50.2605 39.4865C49.5747 39.713 48.6675 39.8263 47.5389 39.8263H47.1103C46.5531 39.8263 46.0602 39.8192 45.6316 39.805C45.203 39.7767 44.8316 39.7342 44.5173 39.6776C44.1458 39.6068 43.9601 39.4582 43.9601 39.2317C43.9601 39.0759 44.0315 38.8494 44.1744 38.5521C44.3173 38.2124 44.3958 37.8655 44.4101 37.5116C44.4387 37.3275 44.453 36.9241 44.453 36.3012C44.453 35.6782 44.453 34.8359 44.453 33.7741V32.0753L44.4101 30.4189ZM51.9749 33.668V33.0309C51.9749 32.4363 51.9034 31.8559 51.7606 31.2896C51.6177 30.7091 51.3891 30.1995 51.0748 29.7606C50.7605 29.3076 50.3533 28.9466 49.8533 28.6776C49.3676 28.3945 48.7818 28.2529 48.0961 28.2529H47.6889C46.9317 28.2529 46.5102 28.4086 46.4245 28.7201C46.3817 28.89 46.3602 29.7677 46.3602 31.3533V34.5386L46.3388 35.112V36.5347L46.3602 36.6834V37.0869L46.3817 37.6602C46.3817 37.9575 46.4745 38.1699 46.6603 38.2973C46.8603 38.4247 47.2603 38.4884 47.8603 38.4884L47.9889 38.4672C48.7032 38.4672 49.3104 38.3398 49.8104 38.0849C50.3248 37.816 50.7391 37.462 51.0534 37.0232C51.382 36.5701 51.6177 36.0534 51.7606 35.473C51.9034 34.8925 51.9749 34.2909 51.9749 33.668Z" fill="#23262B"/>
                        </svg>
                    </Col>
                    <Col xs={8} className="navs">
                        <Row className='navs align-items-center justify-content-between h-100 fs-6 '>
                            <ul className='navbar_one'>
                                <li className='nav_item'>
                                    <Link className={`nav_item_link ${active.design}`} to='/365design'>365 Days</Link>
                                </li>
                                <li className='nav_item cat__parent'>
                                    <Link className={`nav_item_link ${active.cat}`} to='/365design/categories'>Categories</Link>
                                    <div className='cat__container'>
                                        <Category />
                                    </div>
                                </li>
                                
                                <li className='nav_item'>
                                    {/* <a className='nav_item_link' href='https://layouti.com/' target='blank'>Products</a> */}
                                    <Link className={`nav_item_link ${active.product}`} to='/365design/products'>Products</Link>
                                </li>
                                <li className='nav_item'>
                                    <Link className={`nav_item_link ${active.links}`} to='/365design/links'>Links</Link>
                                </li>
                                <li>
                                    <a className='nav_item_link' href='https://365design.layouti.com/' target='blank'>Blog</a>
                                    {/* <Link className='nav_item_link' to='/*'>365 Design</Link> */}
                                </li>
                                <li className='nav_item nav_item_btn '>
                                    <a className='nav_item_link' href='https://365design.layouti.com/layouti-tree/' target='blank'>Reach out</a>
                                    {/* <Link className='nav_item_link' to='/*'>Reach out</Link> */}
                                </li>
                                <li className='nav_item nav_item_btn '>
                                    <button className='toggle-btn' onClick={searchToggle}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M11.6115 2C6.30323 2 2 6.20819 2 11.3993C2 16.5903 6.30323 20.7985 11.6115 20.7985C13.8819 20.7985 15.9684 20.0287 17.613 18.7415L20.7371 21.7886L20.8202 21.8586C21.1102 22.0685 21.5214 22.0446 21.7839 21.7873C22.0726 21.5043 22.072 21.0459 21.7825 20.7636L18.6952 17.7523C20.2649 16.0794 21.2231 13.8487 21.2231 11.3993C21.2231 6.20819 16.9198 2 11.6115 2ZM11.6115 3.44774C16.1022 3.44774 19.7426 7.00776 19.7426 11.3993C19.7426 15.7908 16.1022 19.3508 11.6115 19.3508C7.12086 19.3508 3.48044 15.7908 3.48044 11.3993C3.48044 7.00776 7.12086 3.44774 11.6115 3.44774Z" fill="#200E32"/>
                                        </svg>
                                    </button>
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
                    <Col className='toggle_mob p-0 '>
                        <button className='toggle-btn' onClick={sideToggle}>
                            <svg width="30" height="30" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M3 6V7.66667H23V6H3ZM3 12.6667V14.3333H23V12.6667H3ZM3 19.3333V21H23V19.3333H3Z" fill="black"/>
                            </svg>
                        </button>
                        <button className='toggle-btn' onClick={searchToggle}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.6115 2C6.30323 2 2 6.20819 2 11.3993C2 16.5903 6.30323 20.7985 11.6115 20.7985C13.8819 20.7985 15.9684 20.0287 17.613 18.7415L20.7371 21.7886L20.8202 21.8586C21.1102 22.0685 21.5214 22.0446 21.7839 21.7873C22.0726 21.5043 22.072 21.0459 21.7825 20.7636L18.6952 17.7523C20.2649 16.0794 21.2231 13.8487 21.2231 11.3993C21.2231 6.20819 16.9198 2 11.6115 2ZM11.6115 3.44774C16.1022 3.44774 19.7426 7.00776 19.7426 11.3993C19.7426 15.7908 16.1022 19.3508 11.6115 19.3508C7.12086 19.3508 3.48044 15.7908 3.48044 11.3993C3.48044 7.00776 7.12086 3.44774 11.6115 3.44774Z" fill="#200E32"/>
                            </svg>
                        </button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header365