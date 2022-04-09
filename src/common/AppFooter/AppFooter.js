import React from "react";
import { Row, Col } from "antd";

import { 
    TwitterOutlined, 
    FacebookFilled, 
    YoutubeFilled, 
    InstagramOutlined
} from "@ant-design/icons";

import "./AppFooter.css";

const AppFooter = () => {
    return (
        <footer id="footer" data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="200"
        data-aos-offset="0">
            <Row justify="center">
                <Col>
                    <a href="#">
                        <p className="logo">
                            ICHI ENTERTAINMENT
                        </p>
                    </a>
                </Col>
            </Row>
            <Row gutter={[0, 34]} justify="center">
                <Col>
                    <nav className="footer-nav">
                        <a href="#">
                            <p>home</p>
                        </a>
                        <a href="#">
                            <p>movies</p>
                        </a>
                        <a href="#">
                            <p>tv shows</p>
                        </a>
                        <a href="#">
                            <p>about</p>
                        </a>
                        <a href="#">
                            <p>careers</p>
                        </a>
                        <a href="#">
                            <p>culture</p>
                        </a>
                        <a href="#">
                            <p>classics</p>
                        </a>
                    </nav>
                </Col>
            </Row>
            <Row justify="center">
                <Col>
                    <p className="dumb-upper-text">follow ichi entertainment</p>
                </Col>
            </Row>
            <Row justify="center">
                <Col>
                    <nav className="contact-footer-nav">
                        <a href="#"><TwitterOutlined /></a>
                        <a href="#"><FacebookFilled /></a>
                        <a href="#"><YoutubeFilled /></a>
                        <a href="#"><InstagramOutlined /></a>
                    </nav>
                </Col>
            </Row>
        </footer>
    );
};

export default AppFooter;