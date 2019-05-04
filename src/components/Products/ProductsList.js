import React from "react";
import { Row, Col, Empty } from "antd";
import Product from "./Product";

function ProductsList(props) {
  const { products } = props;

  if (!products) {
    return null;
  }

  if (!products.length) {
    return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
  }

  return (
    <Row gutter={16}>
      {products.map(p => {
        return (
          <Col span={6} key={p.productId} style={{ margin: "5px 0" }}>
            <Product {...p} />
          </Col>
        );
      })}
    </Row>
  );
}

export default ProductsList;
