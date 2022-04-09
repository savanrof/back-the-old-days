import React, { useState, useEffect, useRef } from "react";

import { Carousel, Row, Col } from "antd";
import ReactPlayer from 'react-player';
import AOS from "aos";
import "aos/dist/aos.css";

import MoviesSection from "../../sections/MoviesSection";
import TelevisionSection from "../../sections/TelevisionSection";
import AboutSection from "../../sections/AboutSection";

import "./Home.css";
import StayInTouch from "../../sections/StayInTouch";


const contentStyle = {
    height: '100%',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    fontSize: '100px'
}

const Home = () => {
    const [videoDuration, setVideoDuration] = useState([]);

    const getDuration = (value) => {
        console.log(value)
    }

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div>
            <Row span={24} >
                <Col span={24}>
                    <Carousel
                        autoplay
                        autoplaySpeed={2000}

                    // afterChange={handleAfterCarouselIndexChange}
                    // autoplaySpeed={4000}
                    >
                        {/* <div>
                    <ReactPlayer
                        url={video1}
                        volume={0}
                        playing={true}
                        width="100%"
                        height="872px"
                        onDuration={(value) => {
                            console.log(value)
                        }}
                    />
                </div>
                <div>
                    <ReactPlayer
                        url={video2}
                        volume={0}
                        playing={indexOneChange}
                        width="100%"
                        height="872px"
                    />
                </div> */}
                        <div className="dumb-div">
                            <h3 style={contentStyle}>1</h3>
                        </div>
                        <div className="dumb-div">
                            <h3 style={contentStyle}>2</h3>
                        </div>
                        <div className="dumb-div">
                            <h3 style={contentStyle}>3</h3>
                        </div>
                        <div className="dumb-div">
                            <h3 style={contentStyle}>4</h3>
                        </div>
                    </Carousel>
                </Col>
            </Row>

            {/* MOVIES SECTION */}
            <MoviesSection/>

            {/* TELEVISION SECTION */}
            <TelevisionSection/>

            {/* ABOUT SECTION */}
            <AboutSection/>
            
            {/* STAY IN TOUCH SECTION */}
            <StayInTouch/>
        </div>
    )
}

export default Home;