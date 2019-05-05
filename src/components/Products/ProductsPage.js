import React, { Component } from "react";
import { getProducts, getAsyncProducts } from "../../api/productsApi";
import { Spin, Row, Col, Statistic } from "antd";
import ProductsList from "./ProductsList";
import FilterProducts from "./FilterProducts";

class ProductsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      filtredProducts: [],
      filterText: "",
      isLoading: true
    };

    this.filterProducts = this.filterProducts.bind(this);
  }

  // filter products by free text
  filterProducts(filterText) {
    const { products } = this.state;
    const filterValue = (filterText || "").toLowerCase();
    let filtredProducts = products;

    if (filterText !== "") {
      filtredProducts = products.filter(
        c =>
          c.name.toLowerCase().includes(filterValue) ||
          c.shortDescription.toLowerCase().includes(filterValue)
      );
    }

    this.setState({
      filtredProducts,
      filterText
    });
  }

  async componentDidMount() {
    try {
      const products = await getProducts(10);
      this.setState({ products, isLoading: false }, () =>
        this.filterProducts(this.state.filterText)
      );
    } catch (e) {
      console.error(e);
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { isLoading, filtredProducts, products } = this.state;

    return (
      <Spin spinning={isLoading} tip="Loading products">
        <Row>
          <Col span={12}>
            <FilterProducts filterHandler={this.filterProducts} />
          </Col>
          <Col span={3} offset={9}>
            <Statistic
              value={filtredProducts.length}
              suffix={`/${products.length}`}
            />
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <ProductsList products={filtredProducts} />
          </Col>
        </Row>
      </Spin>
    );
  }
}

export default ProductsPage;
