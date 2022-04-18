import { LeftOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useCallback, useMemo, useState } from "react";
import { AiOutlineNotification, AiOutlineVideoCamera } from "react-icons/ai";
import { BsCashCoin } from "react-icons/bs";
import {
  MdOutlineImportantDevices,
  MdOutlinePriceChange,
  MdRule,
} from "react-icons/md";
import { RiContactsLine, RiGalleryLine } from "react-icons/ri";
import { SiReasonstudios } from "react-icons/si";
import "./sidebar.scss";

const menuItem = [
  {
    title: "Giới thiệu",
    icon: "",
  },
  {
    title: "Dịch vụ media marketing",
    icon: <AiOutlineNotification />,
  },
  {
    title: "Dịch vụ  (các gói chụp ảnh) ",
    icon: <AiOutlineVideoCamera />,
    children: [
      "Chụp hình cưới",
      "Chụp hình gia đình",
      "Chụp hình quảng cáo",
      " Chụp hình profile chuyên nguyện",
      "Ảnh nghệ thuật",
      "Chụp hình sự kiện",
      "wedding planner & event",
    ],
  },
  {
    title: "Cho thuê studio",
    icon: <SiReasonstudios />,
    children: ["Studio Thái Nguyên", "Studio Hà Nội"],
  },
  {
    title: "Cho thuê thiết bị",
    icon: "",
    children: ["Chân dụng", "Máy ảnh", "Lens"],
  },
  {
    title: "Cho thuê nghệ sỹ",
    icon: <MdOutlineImportantDevices />,
    children: ["Tóc Tiên", "Đinh Mạnh Ninh"],
  },
  {
    title: "Báo giá",
    icon: <MdOutlinePriceChange />,
    children: [
      "Báo giá album cưới - Trọn gói",
      "Báo giá chụp hình cưới",
      "Báo giá chụp hình couple cặp đôi",
      "Chụp hình áo dài nghệ thuật",
    ],
  },
  {
    title: "Các bộ sưu tập",
    icon: <RiGalleryLine color="white" />,
    children: [
      "ẢNH CƯỚI",
      "ẢNH GIA ĐÌNH",
      "ẢNH NGHỆ THUẬT",
      " ẢNH QUẢNG CÁO",
      "VÁY CƯỚI",
      "ẢNH THÔI NÔI- SINH NHẬT",
      "ẢNH GIA TIÊN – MÂM QUẢ",
    ],
  },
  {
    title: "Điều khoản",
    icon: <MdRule />,
  },
  {
    title: "Khuyến mại",
    icon: <BsCashCoin />,
  },
  {
    title: "Liên hệ",
    icon: <RiContactsLine />,
  },
];

const LayoutSideBar = (props) => {
  const [isCollapse, setIsCollapse] = useState(false);
  const renderMenu = useMemo(() => {
    return (
      <>
        {menuItem.map((menu, index) => {
          return menu.children ? (
            <Menu.SubMenu
              icon={menu.icon || undefined}
              key={index}
              title={menu.title}
            >
              {menu.children.map((subItem, subIndex) => {
                return (
                  <Menu.Item key={`${index}-${subIndex}`}>{subItem}</Menu.Item>
                );
              })}
            </Menu.SubMenu>
          ) : (
            <Menu.Item icon={menu.icon || undefined} key={index}>
              {menu.title}
            </Menu.Item>
          );
        })}
      </>
    );
  }, []);

  const handleToggleCollapse = useCallback(() => {
    setIsCollapse(!isCollapse);
  }, [isCollapse]);
  return (
    <Layout.Sider
      collapsible
      collapsed={isCollapse}
      width={256}
      className="layout-sidebar"
    >
      <Menu className="side-bar-menu" theme="dark" mode="inline">
        <div className="togge-slider-btn" onClick={handleToggleCollapse}>
          <LeftOutlined />
        </div>
        {renderMenu}
      </Menu>
    </Layout.Sider>
  );
};

export default LayoutSideBar;
