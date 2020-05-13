import React, { useState } from "react";
import ScoreAgainstChart from "../components/ScoreAgainstChart.jsx";
import "antd/dist/antd.css";
import "../index.css";

import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function Dashboard(props) {
  const [leftRail, setLeftRail] = useState(false);
  const [showScoreAgainstChart, showSetScoreAgainstChart] = useState(true);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={leftRail}
        onCollapse={(collapse) => setLeftRail(collapse)}
      >
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item
            key="1"
            icon={<PieChartOutlined />}
            onClick={() => showSetScoreAgainstChart(true)}
          >
            Option 1
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<DesktopOutlined />}
            onClick={() => showSetScoreAgainstChart(false)}
          >
            Option 2
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />} />
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {showScoreAgainstChart && <ScoreAgainstChart />}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          NFL Viz created by Eamonn Keane
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Dashboard;
