import React from "react";
import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductsPage from "./Products/ProductsPage";
import ProductDetails from "./Products/ProductDetails";
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
            <Route exact path="/products" component={ProductsPage} />
            <Route path="/products/:productId" component={ProductDetails} />
          </Switch>
        </Content>
      </Content>

      <Footer />
    </Layout>
  );
}

export default App;
