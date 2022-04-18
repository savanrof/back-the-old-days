import {
  FacebookFilled,
  InstagramOutlined,
  MenuOutlined,
  TwitterOutlined,
  YoutubeFilled,
} from "@ant-design/icons";
import React from "react";
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
            <a href="#">
              <TwitterOutlined />
            </a>
            <a href="#">
              <FacebookFilled />
            </a>
            <a href="#">
              <YoutubeFilled />
            </a>
            <a href="#">
              <InstagramOutlined />
            </a>
          </li>
          <li className="header-nav-item">MultiMedia</li>
          <li className="header-nav-item">Photography</li>
          <li className="header-nav-item">KOL</li>
          <li className="header-nav-item">
            <MenuOutlined id="menu-button" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AppHeader;
