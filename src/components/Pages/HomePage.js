import React from "react";
import { Typography, Row } from "antd";

const { Title, Text } = Typography;

function HomePage() {
  return (
    <Row type="flex" justify="center" align="middle">
      <Title>
        Welcome to <Text>Super Store</Text>
      </Title> 
    </Row>
  );
}

export default HomePage;
