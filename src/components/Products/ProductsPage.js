import React, { Component } from "react";
import { getProducts, getAsyncProducts } from "../../api/productsApi";
import { Spin } from "antd";
import ProductsList from "./ProductsList";

class ProductsPage extends Component {
  state = {
    products: null,
    isLoading: true
  };

  async componentDidMount() {
    try {
      const products = await getAsyncProducts(10);
      this.setState({ products, isLoading: false });
    } catch (e) {
      console.error(e);
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { isLoading, products } = this.state;

    return (
      <Spin spinning={isLoading} tip="Loading products">
        <ProductsList products={products} />
      </Spin>
    );
  }
}

export default ProductsPage;
