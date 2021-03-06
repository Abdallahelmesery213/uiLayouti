import { 
        Container,
        Row,
        Col,
        Input
    } from 'reactstrap'
import './searchbar.scss'
const Searchbar = () => {
    function searchToggle () {
        document.querySelector('.searchbar').classList.toggle('active')
    }
    return (
        <div className={`searchbar`}>
            <Container className='h-100'>
                <Row className='h-100'>
                    <Col xs={1} className="p-0 h-100 d-flex align-items-center">
                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M16.9335 2.91669C9.19224 2.91669 2.91669 9.05363 2.91669 16.6239C2.91669 24.1943 9.19224 30.3312 16.9335 30.3312C20.2444 30.3312 23.2872 29.2086 25.6856 27.3314L30.2416 31.7751L30.3628 31.8772C30.7858 32.1833 31.3854 32.1485 31.7682 31.7732C32.1892 31.3604 32.1883 30.692 31.7662 30.2803L27.2638 25.8888C29.5531 23.4491 30.9503 20.1961 30.9503 16.6239C30.9503 9.05363 24.6748 2.91669 16.9335 2.91669ZM16.9335 5.02797C23.4824 5.02797 28.7914 10.2197 28.7914 16.6239C28.7914 23.0282 23.4824 28.2199 16.9335 28.2199C10.3846 28.2199 5.07564 23.0282 5.07564 16.6239C5.07564 10.2197 10.3846 5.02797 16.9335 5.02797Z" fill="#200E32"/>
                        </svg>

                    </Col>
                    <Col xs={10} className="p-0 h-100 d-flex align-items-center">
                        <Input
                            type='search'
                            className='h-50 border-0 shadow-none fs-4'
                            placeholder='Enter your search here...😉'
                        />
                    </Col>
                    <Col xs={1} className="p-0 h-100 d-flex align-items-center justify-content-end">
                        <button className='close_search' onClick={searchToggle}>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M20.4181 2.50024H9.58189C5.33492 2.50024 2.50064 5.54099 2.50064 9.89524V20.1052C2.50064 24.4636 5.32735 27.5002 9.58189 27.5002H20.4169C24.6727 27.5002 27.5006 24.4636 27.5006 20.1052V9.89524C27.5006 5.53712 24.6729 2.50024 20.4181 2.50024ZM9.58189 4.37524H20.4181C23.6063 4.37524 25.6256 6.54395 25.6256 9.89524V20.1052C25.6256 23.4567 23.6061 25.6252 20.4169 25.6252H9.58189C6.39409 25.6252 4.37564 23.4569 4.37564 20.1052V9.89524C4.37564 6.54821 6.40106 4.37524 9.58189 4.37524ZM11.3384 11.328C11.6713 10.9952 12.1921 10.965 12.5591 11.2374L12.6642 11.3281L14.9989 13.6633L17.3315 11.3307C17.6976 10.9646 18.2912 10.9646 18.6573 11.3307C18.9901 11.6635 19.0204 12.1844 18.7481 12.5514L18.6573 12.6565L16.3246 14.9892L18.6592 17.3244C19.0253 17.6906 19.0253 18.2841 18.6591 18.6502C18.3262 18.983 17.8054 19.0132 17.4384 18.7409L17.3333 18.6501L14.9988 16.3151L12.6673 18.6465C12.3012 19.0126 11.7076 19.0126 11.3415 18.6465C11.0086 18.3137 10.9784 17.7929 11.2507 17.4259L11.3415 17.3207L13.6731 14.9891L11.3383 12.6538C10.9722 12.2877 10.9723 11.6941 11.3384 11.328Z" fill="#200E32"/>
                            </svg>
                        </button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Searchbar