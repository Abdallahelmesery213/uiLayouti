import React from "react";
import './header.scss'
import Img1 from '../../assets/images/bunner.png'
import Img1small from '../../assets/images/bunnersmall.png'
import Img2 from '../../assets/images/bunner2.png'
import Img2small from '../../assets/images/bunner2small.png'
import Img3 from '../../assets/images/365cover.png'
import Img3small from '../../assets/images/365coversmall.png'
import { Container } from "reactstrap";

const Header = (props) => {
    return (
        <div className="header mt-5 mb-5">
            {props.type === "365"?<Container>
                <p className="header_title">
                    365 Days of <span>Layouti</span> Design Challenge
                </p>
                <p className="header_description">
                    Creating a new design experience every day for 365 days by <u>Layouti</u> Design. Also available on <u>Dribbble</u>, <u>Instagram</u> and <u>Facebook</u>
                </p>
            </Container>:<Container>
                <p className="header_title">
                    Avatars for UI Design Mockups in <span>Layouti</span> Design
                </p>
                <p className="header_description">
                    UI Avatar compiles a variety of free avatar placeholder sources
                    that you can use in your design mockups by copying and pasting
                </p>
            </Container>
            }
            
            <div className="header_image ">
                {props.type === "ui"?<picture>
                                        <source media="(max-width:600px)" srcSet={Img1small} />
                                        <img src={Img1} alt="Flowers" style={{width: "100%"}}/>
                                    </picture>:
                    props.type === "content"?<picture>
                                                <source media="(max-width:600px)" srcSet={Img2small} />
                                                <img src={Img2} alt="Flowers" style={{width: "100%"}}/>
                                            </picture>:
                    props.type === "365"?<picture>
                    <source media="(max-width:600px)" srcSet={Img3small} />
                        <img src={Img3} alt="Flowers" style={{width: "100%"}}/>
                    </picture>:null
                }
            </div>
            {props.type === "365"?<p className="header_desc">
            Design Goods for Sketch, Figma & Adobe XD
            </p>:<p className="header_desc">
                Now is the time to consider the design process rather than the dummy content. We'll take care of it.
            </p>
            }
        </div>
    );
};

export default Header;
