import React from "react";
import { Card,  Empty,  Statistic } from "antd";

function Product(props) {
  const { productId, name, image, inStock, price, shortDescription } = props;

  if (!productId) {
    return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
  }

  return (
    <>
      <Card
        title={name}
        cover={<img alt={name} src={image} />}
        style={{ minHeight: 490 }}
        actions={[
          <Statistic
            title="Price"
            value={price}
            valueStyle={{ color: "#3f8600" }}
          />,
          <Statistic title="Availbale" value={inStock} />
        ]}
      >
        <Card.Meta description={shortDescription} />
      </Card>
    </>
  );
}

export default Product;
