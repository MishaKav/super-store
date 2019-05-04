import React from "react";
import Menu from "./Menu";
import { Layout } from "antd";

function HeaderComponent() {
  return (
    <Layout.Header>
      <img
        src="https://via.placeholder.com/120x30/3b4d5a/ffffff/?text=Store"
        alt="Super Store Logo"
      />
      <Menu />
    </Layout.Header>
  );
}

export default HeaderComponent;
