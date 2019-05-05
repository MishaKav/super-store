import React, { Component } from "react";
import { Carousel, PageHeader } from "antd";
import { getAsyncProduct } from "../../api/productsApi";
import { Spin, Empty, Tabs, Rate } from "antd";
import { withRouter } from "react-router-dom";

class ProductDetails extends Component {
  state = {
    product: null,
    isLoading: true
  };

  async componentDidMount() {
    try {
      const product = await getAsyncProduct();
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

    return (
      <>
        <PageHeader
          onBack={() => this.props.history.push("/products")}
          title={product.name}
          subTitle={product.price}
        />

        <div style={{ width: "640px" }}>
          <Carousel infinite autoplay>
            {product &&
              product.images.map(i => {
                return (
                  <div key={i.name}>
                    <img alt={i.name} src={i.image} />
                  </div>
                );
              })}
          </Carousel>
        </div>

        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="Description" key="1">
            {product.fullDescription}
          </Tabs.TabPane>
          
          <Tabs.TabPane tab="Specs" key="2">
            <div>
              <pre>{JSON.stringify(product, null, 2)}</pre>
            </div>
          </Tabs.TabPane>

          <Tabs.TabPane tab="Shipping" key="3">
            Shipping
          </Tabs.TabPane>

          <Tabs.TabPane tab="Reviews" key="4">
            <Rate allowHalf defaultValue={2.5} />
          </Tabs.TabPane>
        </Tabs>
      </>
    );
  }
}

export default withRouter(ProductDetails);
