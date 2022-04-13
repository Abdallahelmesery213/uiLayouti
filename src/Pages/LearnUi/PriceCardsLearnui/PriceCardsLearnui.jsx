import React from 'react';
import './PriceCardsLearnui.scss';

const PriceCardsLearnui = () => {
  return (
    <>
        <div className='cards'>
            <div className='header-cards'>
                <div className='icon-star'>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <h2>UI Design</h2>
                <div className='price'>
                    <span className='dolar'>$300</span> <span className='hours'>/ 20H</span>
                </div>
            </div>
            <ul className='lists'>
                <li>
                    <span className='icon-check'>
                        <i className="fas fa-check me-3"></i>
                    </span>
                    <span className='prag'>Introduction</span>
                </li>
                <li>
                    <span className='icon-check'>
                        <i className="fas fa-check me-3"></i>
                    </span>
                    <span className='prag'>UI vs. UX</span>
                </li>
                <li className='remove'>
                    <span className='icon-check'>
                        <i className="fas fa-check me-3"></i>
                    </span>
                    <span className='prag'>persons</span>
                </li>
                <li className='remove'>
                    <span className='icon-check'>
                        <i className="fas fa-check me-3"></i>
                    </span>
                    <span className='prag'>Information Architecture</span>
                </li>
                <li className='remove'>
                    <span className='icon-check'>
                        <i className="fas fa-check me-3"></i>
                    </span>
                    <span className='prag'>User Flows</span>
                </li>
                <li className='remove'>
                    <span className='icon-check'>
                        <i className="fas fa-check me-3"></i>
                    </span>
                    <span className='prag'>Wireframe</span>
                </li>
                <li>
                    <span className='icon-check'>
                        <i className="fas fa-check me-3"></i>
                    </span>
                    <span className='prag'>UI design principles</span>
                </li>
                <li>
                    <span className='icon-check'>
                        <i className="fas fa-check me-3"></i>
                    </span>
                    <span className='prag'>Content/Elements</span>
                </li>
                <li>
                    <span className='icon-check'>
                        <i className="fas fa-check me-3"></i>
                    </span>
                    <span className='prag'>Functional design</span>
                </li>
                <li>
                    <span className='icon-check'>
                        <i className="fas fa-check me-3"></i>
                    </span>
                    <span className='prag'>Helping developers</span>
                </li>
                <li>
                    <span className='icon-check'>
                        <i className="fas fa-check me-3"></i>
                    </span>
                    <span className='prag'>Designed for your success</span>
                </li>
                <hr className='line-list' />
                <li className='listBorder'>
                    All the following materials are not available from this package
                </li>
                <li className='remove'>
                    <span className='icon-check'>
                        <i className="fas fa-check me-3"></i>
                    </span>
                    <span className='prag'>Free Design system kit</span>
                </li>
                <li className='remove'>
                    <span className='icon-check'>
                        <i className="fas fa-check me-3"></i>
                    </span>
                    <span className='prag'>Free Icons kit</span>
                </li>
                <li className='remove'>
                    <span className='icon-check'>
                        <i className="fas fa-check me-3"></i>
                    </span>
                    <span className='prag'>Free Eng & Arb font kit</span>
                </li>
                <li className='remove'>
                    <span className='icon-check'>
                        <i className="fas fa-check me-3"></i>
                    </span>
                    <span className='prag'>Free Color palette kit</span>
                </li>
                <li className='remove'>
                    <span className='icon-check'>
                        <i className="fas fa-check me-3"></i>
                    </span>
                    <span className='prag'>Free Persona kit</span>
                </li>
                <li className='remove'>
                    <span className='icon-check'>
                        <i className="fas fa-check me-3"></i>
                    </span>
                    <span className='prag'>Free Wireframe kit</span>
                </li>
                <li className='remove'>
                    <span className='icon-check'>
                        <i className="fas fa-check me-3"></i>
                    </span>
                    <span className='prag'>Internship with Layouti team</span>
                </li>
                <hr className='line-list' />

                <button className='register-button'>Register Now for $300</button>

            </ul>
        </div>
    </>
  )
}

export default PriceCardsLearnui