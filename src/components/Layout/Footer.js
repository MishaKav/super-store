import React from "react";
import { Layout, Row } from "antd";

function FooterComponent() {
  return (
    <Layout.Footer>
      <Row type="flex" justify="center">
        Tikal Super Store by &nbsp;
        <a
          href="https://github.com/MishaKav/super-store"
          rel="noopener noreferrer"
          target="_blank"
        >
          Misha Kav
        </a>
      </Row>
    </Layout.Footer>
  );
}

export default FooterComponent;
