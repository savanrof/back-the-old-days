import { Layout } from "antd";
import "antd/dist/antd.css";
import React from "react";
import "./App.css";
import AppFooter from "./common/AppFooter/AppFooter";
import AppHeader from "./common/AppHeader/AppHeader";
import Home from "./component/pages/home/Home";
import LayoutSideBar from "./component/sidebar";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Layout>
        <Content>
          <Home />
        </Content>
        <LayoutSideBar />
      </Layout>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default App;
