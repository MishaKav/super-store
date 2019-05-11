import React from "react";
import { Card, Empty, Statistic, Typography } from "antd";
import { withRouter } from "react-router-dom";

const { Text } = Typography;

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

  const cardTitle = (
    <Text onClick={() => history.push(`/products/${productId}/description`)}>
      {name}
    </Text>
  );

  return (
    <>
      <Card
        hoverable
        title={cardTitle}
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
