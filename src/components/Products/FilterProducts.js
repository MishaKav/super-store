import React from "react";
import { Input } from "antd";

class FilterProducts extends React.Component {
  constructor(props) {
    super(props);

    const { filterHandler } = this.props;

    this.state = {
      filterText: "",
      filterHandler
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    const { filterHandler } = this.state;

    this.setState({ filterText: value }, () => filterHandler(value));
  }

  render() {
    return (
      <Input.Search
        placeholder="Filter by product name or description"
        onSearch={this.handleChange}
        enterButton
      />
    );
  }
}

export default FilterProducts;
