import React from "react";
import { Carousel, Row, Col } from "antd";

import PrevArrow from "../../utils/PrevArrow";
import NextArrow from "../../utils/NextArrow";

import Dragons from "../../static/images/television-section/dragons.jpg";
import FastAndFurious from "../../static/images/television-section/fast-and-furious.jpg";
import Trolls from "../../static/images/television-section/trolls.jpg";
import Madagasca from "../../static/images/television-section/madagasca.jpg";
import GoDogGo from "../../static/images/television-section/go-dog-go.jpg";
import ZenkoGo from "../../static/images/television-section/zenko-go.jpg";

const settings = {
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
}

const TelevisionSection = () => {
    return (
        <div>
            <Row gutter={[0, 109]} justify="center">
                <Col><h1 className="section-title" style={{ marginTop: "109px" }}>television</h1></Col>
            </Row>
            <Row gutter={[0, 70]} justify="center">
                <Col span={14}>
                    <Carousel
                        dots={false}
                        slidesToShow={3}
                        arrows
                        {...settings}
                    >
                        <div className="section-items" data-aos="fade-up">
                            <img src={Dragons} alt="Dragons - The nine realms" />
                        </div>
                        <div className="section-items" data-aos="fade-up" data-aos-delay="50">
                            <img src={FastAndFurious} alt="Fast And Furious" />
                        </div>
                        <div className="section-items" data-aos="fade-up" data-aos-delay="100">
                            <img src={Trolls} alt="Trolls TrollsTopia" />
                        </div>
                        <div className="section-items" data-aos="fade-up">
                            <img src={Madagasca} alt="Madagasca: A little wild" />
                        </div>
                        <div className="section-items" data-aos="fade-up">
                            <img src={GoDogGo} alt="Go, Dog.Go!" />
                        </div>
                        <div className="section-items" data-aos="fade-up">
                            <img src={ZenkoGo} alt="Team Zenko go" />
                        </div>
                    </Carousel>
                </Col>
            </Row>
        </div>
    );
};

export default TelevisionSection;