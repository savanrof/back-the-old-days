import { Carousel, Col, Row } from "antd";
import React from "react";
import Avatar from "../../static/images/staff-section/avatar-holder.jpg";

const StaffSection = () => {
  return (
    <div className="staff-section">
      <Row gutter={[0, 70]} justify="center">
        <Col>
          <h1 className="section-title">our staff</h1>
        </Col>
      </Row>
      <Row justify="center">
        <Col style={{ width: "100%", height: 700 }}>
          <Carousel slidesToShow={4} swipeToSlide draggable>
            <div className="item">
              <img src={Avatar} />
            </div>

            <div className="item">
              <img src={Avatar} />
            </div>

            <div className="item">
              <img src={Avatar} />
            </div>

            <div className="item">
              <img src={Avatar} />
            </div>

            <div className="item">
              <img src={Avatar} />
            </div>

            <div className="item">
              <img src={Avatar} />
            </div>

            <div className="item">
              <img src={Avatar} />
            </div>

            <div className="item">
              <img src={Avatar} />
            </div>
          </Carousel>
        </Col>
      </Row>
    </div>
  );
};

export default StaffSection;
