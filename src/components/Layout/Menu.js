import React from "react";
import { Menu, Icon } from "antd";
import { NavLink } from "react-router-dom";

function MenuComponent() {
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["home"]}>
      <Menu.Item key="home">
        <NavLink to="/">
          <Icon type="home" />
          Home
        </NavLink>
      </Menu.Item>
      <Menu.Item key="products">
        <NavLink to="/products">Products</NavLink>
      </Menu.Item>
    </Menu>
  );
}

export default MenuComponent;
