import React, { useRef } from "react";
import { Carousel, Row, Col } from "antd";

import Campus from "../../static/images/about-section/about-creative-haven.jpg";
import Movies from "../../static/images/about-section/about-movies.jpg";
import Tv from "../../static/images/about-section/about-tv.jpg";
import Tech from "../../static/images/about-section/about-tech.jpg";

const AboutSection = () => {

    const sliderRef = useRef();

    return (
        <div>
            <div className="about-section">
                <Row>
                    <Col span={24}>
                        <h1 className="about-title">about dreamworks</h1>
                    </Col>
                </Row>
                <Row justify="center">
                    <Col>
                        <nav>
                            <ul>
                                <li>
                                    <button className="about-trigger-button" 
                                    onClick={() => {
                                        sliderRef.current?.goTo(2)
                                    }}>
                                            CAMPUS</button>
                                </li>
                                <li>
                                    <button className="about-trigger-button" 
                                    onClick={() => {
                                        sliderRef.current?.goTo(3)
                                    }}>
                                        MOVIES</button>
                                </li>
                                <li>
                                    <button className="about-trigger-button" 
                                    onClick={() => {
                                        sliderRef.current?.goTo(4)
                                    }}>
                                            TV</button>
                                </li>
                                <li>
                                    <button className="about-trigger-button" 
                                    onClick={() => {
                                        sliderRef.current?.goTo(5)
                                    }}>
                                            TECH</button>
                                </li>
                            </ul>
                        </nav>
                    </Col>
                </Row>

                <Row>
                    <Col span={24}>
                    <Carousel
                        slidesToShow={3}
                        infinite={false}
                        dots={false}
                        initialSlide={3}
                        centerMode
                        ref={ref => {
                            sliderRef.current = ref;
                          }}
                        // ref={sliderRef}
                        // {...sectionAboutSettings}
                    >
                        <div className="about-section-item-carousel"></div>
                        <div className="about-section-item-carousel"></div>
                        <div className="about-section-item-carousel" data-aos="fade-up">
                            <img src={Campus} alt="About Campus"/>
                        </div>
                        <div className="about-section-item-carousel" data-aos="fade-up" data-aos-delay="50">
                            <img src={Movies} alt="About Movies"/>
                        </div>
                        <div className="about-section-item-carousel" data-aos="fade-up" data-aos-delay="100">
                            <img src={Tv} alt="About TV"/>
                        </div>
                        <div className="about-section-item-carousel" data-aos="fade-up">
                            <img src={Tech} alt="About Tech"/>
                        </div>
                        <div className="about-section-item-carousel"></div>
                        <div className="about-section-item-carousel"></div>
                    </Carousel>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default AboutSection;