import React from "react";
import { Card, Empty, Statistic } from "antd";
import { Redirect, NavLink } from "react-router-dom";

function Product(props) {
  const { productId, name, image, inStock, price, shortDescription } = props;

  if (!productId) {
    return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
  }

  return (
    <>
      <Card
        hoverable
        onClick={() => <Redirect to={`/products/${productId}`} />}
        title={name}
        cover={<img alt={name} src={image} />}
        actions={[
          <Statistic
            title="Price"
            value={price}
            valueStyle={{ color: "#3f8600" }}
          />,
          <Statistic title="Availbale" value={inStock} />
        ]}
      >
        <NavLink to={`/products/${productId}`}>{name}</NavLink>
        <Card.Meta description={shortDescription} />
      </Card>
    </>
  );
}

export default Product;
