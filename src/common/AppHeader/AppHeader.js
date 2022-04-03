import React from "react";
import { Menu } from "antd";
import logo from "../../static/images/logo/ichi-logo.jpg";

import "./AppHeader.css";

const AppHeader = () => {
    return (
        <div className=".container-fluid">
            <div className="header">
                <div className="logo">
                    
                </div>
                <Menu
                    mode="horizontal"
                >
                    <Menu.Item key="products">Sản phẩm</Menu.Item>
                    <Menu.Item key="services">Dịch vụ</Menu.Item>
                    <Menu.Item key="aboutUs">About us</Menu.Item>
                </Menu>
            </div>
        </div>
    )
};

export default AppHeader