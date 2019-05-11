import React from "react";
import { Timeline, Empty, Typography } from "antd";
import moment from "moment";

const { Text, Paragraph } = Typography;

function ProductShipping(props) {
  const { shipping } = props;

  if (!shipping || !shipping.length) {
    return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
  }

  return (
    <Timeline>
      {shipping.map(s => (
        <Timeline.Item key={s.shippingId}>
          <Text code>{moment(s.date).format("DD-MM-YYYY")}</Text>
          <Text>{s.name}</Text>
          <Paragraph type="secondary">{s.content}</Paragraph>
        </Timeline.Item>
      ))}
    </Timeline>
  );
}

export default ProductShipping;
