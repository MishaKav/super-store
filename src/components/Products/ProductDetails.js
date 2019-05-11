import React, { Component } from "react";
import { Route } from "react-router-dom";
import { PageHeader } from "antd";
import { getAsyncProduct } from "../../api/productsApi";
import { Spin, Empty, Tabs } from "antd";
import { withRouter } from "react-router-dom";
import ProductReviewList from "./ProductReviewList";
import ProductGallery from "./ProductGallery";
import ProductShipping from "./ProductShipping";

class ProductDetails extends Component {
  state = {
    product: null,
    isLoading: true
  };

  async componentDidMount() {
    try {
      const { match } = this.props;
      const { productId } = match.params;
      const product = await getAsyncProduct(productId);
      this.setState({ product, isLoading: false });
    } catch (e) {
      console.error(e);
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { isLoading, product } = this.state;

    if (!isLoading && !product) {
      return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
    }

    if (isLoading) {
      return <Spin spinning={isLoading} tip="Loading product details" />;
    }

    const onTabChange = key => {
      const { history } = this.props;
      history.push(key);
    };

    const { reviews, images, shipping } = product;
    const { match, location, history } = this.props;

    const tabsData = [
      {
        tab: "Description",
        key: `${match.url}/description`,
        component: () => <>{product.fullDescription}</>
      },
      {
        tab: "Specs",
        key: `${match.url}/specs`,
        component: () => <pre>{JSON.stringify(product, null, 2)}</pre>
      },
      {
        tab: "Shipping",
        key: `${match.url}/shipping`,
        component: rp => <ProductShipping shipping={shipping} {...rp} />
      },
      {
        tab: "Reviews",
        key: `${match.url}/reviews`,
        component: rp => <ProductReviewList reviews={reviews} {...rp} />
      }
    ];

    return (
      <>
        <PageHeader
          onBack={() => history.push("/products")}
          title={product.name}
          subTitle={product.price}
        />

        <ProductGallery images={images} />

        <Tabs defaultActiveKey={location.pathname} onChange={onTabChange}>
          {tabsData.map(t => (
            <Tabs.TabPane tab={t.tab} key={t.key}>
              <Route
                exact
                path={`${match.url}/:section`}
                render={t.component}
              />
            </Tabs.TabPane>
          ))}
        </Tabs>
      </>
    );
  }
}

export default withRouter(ProductDetails);
