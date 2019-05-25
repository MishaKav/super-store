import React, { useEffect } from "react";
import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import ProductsPage from "./Products/ProductsPage";
import ProfilePage from "./Profile/ProfilePage";
import CallbackPage from "./CallbackPage";
import ProductDetails from "./Products/ProductDetails";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Breadcrumbs from "./Layout/Breadcrumbs";
import AuthRoute from "./AuthRoute";
import Auth from "../Auth/Auth.js";
import "antd/dist/antd.css";
import "./App.css";

const { Content } = Layout;

function App(props) {
  useEffect(() => {
    Auth.setHistoryObject(props.history);
  }, [props.history]);

  return (
    <Layout>
      <Header />

      <Content>
        <Breadcrumbs />

        <Content className="content">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/callback" component={CallbackPage} />
            <AuthRoute exact path="/products" component={ProductsPage} />
            <AuthRoute path="/profile" component={ProfilePage} />
            <AuthRoute path="/products/:productId" component={ProductDetails} />
          </Switch>
        </Content>
      </Content>

      <Footer />
    </Layout>
  );
}

export default App;
