import React from "react";
import { Breadcrumb, Icon } from "antd";
import { NavLink } from "react-router-dom";

function BreadcrumbsComponent() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <NavLink to="/">
          <Icon type="home" />
        </NavLink>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <NavLink to="/products">Products</NavLink>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadcrumbsComponent;
