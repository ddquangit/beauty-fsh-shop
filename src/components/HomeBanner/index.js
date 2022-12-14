import React from 'react'
import { Carousel } from "react-bootstrap";

import BackgroundImage1 from "../../assets/images/slider_1.jpg";
import BackgroundImage2 from "../../assets/images/slider_2.jpg";
import BackgroundImage3 from "../../assets/images/slider_3.jpg";

function HomBanner() {

    const handleClickOnShop = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 900, behavior: 'smooth' });
    }

    return (
        <>
            <Carousel indicators={false}>
                <Carousel.Item>
                    <div
                        className="d-block w-100 main_slider"
                        style={{
                            backgroundImage: `url(${BackgroundImage1})`,
                        }}
                    >
                        <div className="container fill_height">
                            <div className="row align-items-center fill_height">
                                <div className="col">
                                    <div className="main_slider_content" data-aos="fade-right">
                                        <h6>Spring / Summer Collection 2022</h6>
                                        <h1>Get up to 30% Off New Arrivals</h1>
                                        <div className="red_button shop_now_button">
                                            <a onClick={handleClickOnShop} href="#">shop now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div
                        className="d-block w-100 main_slider"
                        style={{
                            backgroundImage: `url(${BackgroundImage2})`,
                        }}
                    >
                        <div className="container fill_height">
                            <div className="row align-items-center fill_height">
                                <div className="col">
                                    <div className="main_slider_content" data-aos="fade-right">
                                        <h6>Spring / Summer Collection 2022</h6>
                                        <h1>Get up to 30% Off New Arrivals</h1>
                                        <div className="red_button shop_now_button">
                                            <a onClick={handleClickOnShop} href="#">shop now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div
                        className="d-block w-100 main_slider"
                        style={{
                            backgroundImage: `url(${BackgroundImage3})`,
                        }}
                    >
                        <div className="container fill_height">
                            <div className="row align-items-center fill_height">
                                <div className="col">
                                    <div className="main_slider_content" data-aos="fade-right">
                                        <h6>Spring / Summer Collection 2022</h6>
                                        <h1>Get up to 30% Off New Arrivals</h1>
                                        <div className="red_button shop_now_button">
                                            <a onClick={handleClickOnShop} href="#">shop now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default HomBanner