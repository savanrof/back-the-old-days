import React from "react";
import { Carousel, Row, Col } from "antd";

import PrevArrow from "../../utils/PrevArrow";
import NextArrow from "../../utils/NextArrow";

import PussInBootsImg from "../../static/images/movies-section/puss-in-boots-the-last-wish-key-art.jpg";
import TheBadGuysImg from "../../static/images/movies-section/the-bad-guys-key-art.jpg";
import BossBaby2Img from "../../static/images/movies-section/boss-baby-2-pc-keyart.jpg";
import AbominableImg from "../../static/images/movies-section/abominable-keyart.jpg";
import TrollsWorldTourImg from "../../static/images/movies-section/twt-key-art-no-text.jpg";
import Croods2Img from "../../static/images/movies-section/croods-2-key-art-v3.jpg";

const settings = {
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
}

const MoviesSection = () => {
    return (
        <div>
            <Row gutter={[0, 70]} justify="center">
                <Col ><h1 className="section-title">movies</h1></Col>
            </Row>
            <Row gutter={[0, 68]} justify="center">
                <Col span={14}>
                    <Carousel
                        dots={false}
                        slidesToShow={3}
                        arrows
                        {...settings}
                    >
                        <div className="section-items" data-aos="fade-up">
                            <div className="overlay">
                                <span>see more</span>
                            </div>
                            <img src={PussInBootsImg} alt="Puss In Boots" />
                            <div className="details">
                                <p className="title">Puss in Boots: The Last Wish</p>
                                <p className="subhead">In Theaters September 23, 2022</p>
                            </div>
                        </div>
                        <div className="section-items" data-aos="fade-up" data-aos-delay="50">
                        <div className="overlay">
                                <span>see more</span>
                            </div>
                            <img src={TheBadGuysImg} alt="The Bad Guys" />
                            <div className="details">
                                <p className="title">Puss in Boots: The Last Wish</p>
                                <p className="subhead">In Theaters September 23, 2022</p>
                            </div>
                        </div>
                        <div className="section-items" data-aos="fade-up" data-aos-delay="100">
                        <div className="overlay">
                                <span>see more</span>
                            </div>
                            <img src={BossBaby2Img} alt="Boss Baby 2" />
                            <div className="details">
                                <p className="title">Puss in Boots: The Last Wish</p>
                                <p className="subhead">In Theaters September 23, 2022</p>
                            </div>
                        </div>
                        <div className="section-items" data-aos="fade-up">
                        <div className="overlay">
                                <span>see more</span>
                            </div>
                            <img src={AbominableImg} alt="Abominable" />
                            <div className="details">
                                <p className="title">Puss in Boots: The Last Wish</p>
                                <p className="subhead">In Theaters September 23, 2022</p>
                            </div>
                        </div>
                        <div className="section-items" data-aos="fade-up">
                        <div className="overlay">
                                <span>see more</span>
                            </div>
                            <img src={TrollsWorldTourImg} alt="Trolls World Tour" />
                            <div className="details">
                                <p className="title">Puss in Boots: The Last Wish</p>
                                <p className="subhead">In Theaters September 23, 2022</p>
                            </div>
                        </div>
                        <div className="section-items" data-aos="fade-up">
                        <div className="overlay">
                                <span>see more</span>
                            </div>
                            <img src={Croods2Img} alt="Croods" />
                            <div className="details">
                                <p className="title">Puss in Boots: The Last Wish</p>
                                <p className="subhead">In Theaters September 23, 2022</p>
                            </div>
                        </div>
                    </Carousel>
                </Col>
            </Row>
        </div>
    )
}

export default MoviesSection;