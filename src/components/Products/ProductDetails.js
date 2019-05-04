import React, { Component } from "react";
import { Carousel, PageHeader } from "antd";
import { getProduct, getAsyncProduct } from "../../api/productsApi";
import { Spin, Empty } from "antd";
import { Redirect } from "react-router-dom";

class ProductDetails extends Component {
  state = {
    product: null,
    isLoading: true
  };

  async componentDidMount() {
    try {
      const product = await getProduct();
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
          onBack={() => <Redirect to="/products" />}
          title={product.name}
          subTitle={product.price}
        />

        <Carousel autoplay>
          {product &&
            product.images.map(i => {
              return (
                <div key={i.name}>
                  <h3>{i.name}</h3>
                </div>
              );
            })}
        </Carousel>

        <div>
          <pre>{JSON.stringify(product, null, 2)}</pre>
        </div>
      </>
    );
  }
}

export default ProductDetails;
