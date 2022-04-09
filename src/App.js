import React from 'react';
import "antd/dist/antd.css";
import './App.css';
import Home from "./component/pages/home/Home";
import AppHeader from './common/AppHeader/AppHeader';

import { Layout,  } from "antd";
import AppFooter from './common/AppFooter/AppFooter';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <Home />
      </Content>
      <Footer>
        <AppFooter/>
      </Footer>
    </Layout>

  );
}

export default App;
