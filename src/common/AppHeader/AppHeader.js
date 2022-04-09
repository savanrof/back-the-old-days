import React from "react";
import { Menu } from "antd";
import logo from "../../static/images/logo/ichi-logo.jpg";

import { 
    TwitterOutlined, 
    FacebookFilled, 
    YoutubeFilled, 
    InstagramOutlined,
    MenuOutlined
} from "@ant-design/icons";

import "./AppHeader.css";

const AppHeader = () => {
    return ( 
        <div className=".container-fluid">
            <nav className="header-nav">
                <div>
                    <p className="logo">ichi entertainment</p>
                </div>
                <ul>
                    <li className="contact-nav">
                        <a href="#"><TwitterOutlined /></a>
                        <a href="#"><FacebookFilled /></a>
                        <a href="#"><YoutubeFilled /></a>
                        <a href="#"><InstagramOutlined /></a>
                    </li>
                    <li className="header-nav-item">
                        movies
                    </li>
                    <li className="header-nav-item">
                        tv
                    </li>
                    <li className="header-nav-item">
                        explore
                    </li>
                    <li className="header-nav-item">
                        <MenuOutlined id="menu-button" />
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default AppHeader