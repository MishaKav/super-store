import React, { useEffect } from "react";
import { Typography, Row, Spin } from "antd";
import Auth from "../Auth/Auth";

const { Title, Text } = Typography;

function CallbackPage(props) {
  useEffect(() => {
    // Handle authentication if expected values are in the URL.
    if (/access_token|id_token|error/.test(props.location.hash)) {
      Auth.handleAuthentication();
    } else {
      throw new Error("Invalid callback URL.");
    }
  }, [props.location.hash]);

  return (
    <Spin spinning={true}>
      <Row type="flex" justify="center" align="middle">
        <Title>
          Welcome to <Text>CallbackPage</Text>
        </Title>
      </Row>
    </Spin>
  );
}

export default CallbackPage;
