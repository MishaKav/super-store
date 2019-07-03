import React from "react";
import { Menu, Icon, Button } from "antd";
import { NavLink } from "react-router-dom";
import Auth from "../../Auth/Auth";

function MenuComponent(props) {
  const { color } = props;

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["home"]}
      style={{ background: color }}
    >
      <Menu.Item key="home">
        <NavLink to="/">
          <Icon type="home" />
          Home
        </NavLink>
      </Menu.Item>

      {Auth.isAuthenticated() && (
        <Menu.Item key="products">
          <NavLink to="/products">Products</NavLink>
        </Menu.Item>
      )}

      {Auth.isAuthenticated() && (
        <Menu.Item key="profile">
          <NavLink to="/profile">Profile</NavLink>
        </Menu.Item>
      )}
      <Menu.Item style={{ float: "right" }}>
        {!Auth.isAuthenticated() && (
          <Button type="primary" onClick={() => Auth.login()}>
            Login
          </Button>
        )}

        {Auth.isAuthenticated() && (
          <Button type="primary" onClick={() => Auth.logout()}>
            Logout
          </Button>
        )}
      </Menu.Item>
    </Menu>
  );
}

export default MenuComponent;
