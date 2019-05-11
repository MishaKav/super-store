import React from "react";
import { MemoryRouter } from "react-router";
import { storiesOf } from "@storybook/react";
import {
  withKnobs,
  text,
  boolean,
  date,
  select,
  number
} from "@storybook/addon-knobs";
import ProductReview from "./../components/Products/ProductReview";
import ProductReviewList from "./../components/Products/ProductReviewList";
import ProductGallery from "./../components/Products/ProductGallery";
import ProductShipping from "./../components/Products/ProductShipping";
import ProductsList from "./../components/Products/ProductsList";
import Product from "./../components/Products/Product";
import FilterProducts from "./../components/Products/FilterProducts";
import product from "./demoProduct.json";
import "antd/dist/antd.css";

const stories = storiesOf("Super Store/Products", module);
stories.addDecorator(withKnobs);
stories.addDecorator(story => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
));

stories.add("Filter Products", () => {
  return (
    <div style={{ maxWidth: "350px" }}>
      <FilterProducts />
    </div>
  );
});

stories.add("Products List", () => {
  return <ProductsList products={[product, product]} />;
});

stories.add("Product Card (knobs)", () => {
  const widthData = boolean("With Data", true);

  return (
    <div style={{ maxWidth: "350px" }}>
      <Product
        image={product.image}
        widthData={widthData}
        productId={widthData ? product.productId : boolean("With Data", false)}
        name={text("Name", product.name)}
        shortDescription={text("Short Description", product.shortDescription)}
        inStock={number("InStock", product.inStock)}
        price={text("Price", product.price)}
      />
    </div>
  );
});

stories.add("Gallery", () => {
  return <ProductGallery images={product.images} />;
});

stories.add("Shipping", () => {
  return <ProductShipping shipping={product.shipping} />;
});

stories.add("Review List", () => {
  return <ProductReviewList reviews={product.reviews} />;
});

stories.add("Review (knobs)", () => {
  const widthData = boolean("With Data", true);
  const review = product.reviews[0];
  const ratingOptions = {
    "0.5": 0.5,
    "1": 1,
    "1.5": 1.5,
    "2": 2,
    "2.5": 2.5,
    "3": 3,
    "3.5": 3.5,
    "4": 4,
    "4.5": 4.5,
    "5": 5
  };

  return (
    <ProductReview
      widthData={widthData}
      reviewId={widthData ? review.reviewId : boolean("With Data", false)}
      name={text("Name", review.name)}
      content={text("Content", review.content)}
      rating={select("Raitng", ratingOptions, review.rating)}
      date={date("Date", new Date(review.date))}
    />
  );
});
