import React, { useState } from "react";
import { Row, Col, Form, Input, Button } from "antd";
import Trolls from "../../static/images/stay-in-touch-section/signup-trolls.jpg";

const StayInTouch = () => {
    const [form] = Form.useForm();

    const onSubmit = (values) => {
        console.log(values);
    };

    return (
        <div className="stay-in-touch-section">
            <Row>
                <Col span={8} offset={3}>
                    <div data-aos="fade-up">
                        <div className="stay-in-touch-title">
                            <h2>stay in touch</h2>
                            <p>Register today for the DreamWorks Animation newsletter to receive all the latest information about our upcoming films and projects.</p>
                        </div>
                        <div className="stay-in-touch-form"  >
                            <p>Enter your contact infor</p>
                            <Form
                                form={form}
                                onFinish={onSubmit}
                                labelCol={{ span: 8 }}
                                wrapperCol={{ span: 16 }}
                                labelAlign="left"
                            >
                                <Form.Item
                                    label="Email"
                                    name="email"
                                    rules={[
                                        {
                                            type: 'email',
                                            message: 'Your input is not valid Email'
                                        },
                                        {
                                            required: true,
                                            message: 'Please input your Email'
                                        }
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    label="Phone number"
                                    name="phoneNumber"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Phone number'
                                        },
                                        {
                                            pattern: /^0(\d{9})/,
                                            message: 'Your input is not valid Phone number'
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit">Submit</Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </Col>
                <Col span={8} offset={1}>
                    <div data-aos="fade-up" data-aos-delay="50">
                        <img id="stay-in-touch-img" src={Trolls} alt="Stay in touch" />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default StayInTouch;