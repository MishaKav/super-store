import React from "react";
import Menu from "./Menu";
import { Layout } from "antd";
import { Detector } from "react-detect-offline";

function HeaderComponent() {
  const color = "red";
  const onlineMenu = (
    <Layout.Header>
      <img
        src="https://via.placeholder.com/120x30/3b4d5a/ffffff/?text=Store"
        alt="Super Store Logo"
      />
      <Menu />
    </Layout.Header>
  );

  const offlineMenu = (
    <Layout.Header style={{ background: color }}>
      <img
        src="https://via.placeholder.com/120x30/3b4d5a/ffffff/?text=Store"
        alt="Super Store Logo"
      />
      <Menu color={color} />
    </Layout.Header>
  );

  return (
    <Detector
      render={({ online }) => <>{online ? onlineMenu : offlineMenu}</>}
    />
  );
}

export default HeaderComponent;
