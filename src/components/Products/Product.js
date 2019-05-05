import React from "react";
import { Card, Empty, Statistic } from "antd";
import { withRouter } from "react-router-dom";

function Product(props) {
  const {
    productId,
    name,
    image,
    inStock,
    price,
    shortDescription,
    history
  } = props;

  if (!productId) {
    return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
  }

  return (
    <>
      <Card
        hoverable
        onClick={() => history.push(`/products/${productId}`)}
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
        <Card.Meta description={shortDescription} />
      </Card>
    </>
  );
}

export default withRouter(Product);
