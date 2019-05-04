import React from "react";
import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductsPage from "./Products/ProductsPage";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Breadcrumbs from "./Layout/Breadcrumbs";
import "antd/dist/antd.css";
import "./App.css";

function App() {
  const { Content } = Layout;

  return (
    <Layout>
      <Header />

      <Content>
        <Breadcrumbs />

        <Content className="content">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/products" component={ProductsPage} />
          </Switch>
        </Content>
      </Content>

      <Footer />
    </Layout>
  );
}

export default App;
