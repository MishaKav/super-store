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
import ProfileCard from "./../components/Profile/ProfileCard";
import profile from "./demoProfile.json";
import "antd/dist/antd.css";

const productStories = storiesOf("Super Store/Products", module);
productStories.addDecorator(withKnobs);
productStories.addDecorator(story => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
));

productStories.add("Filter Products", () => {
  return (
    <div style={{ maxWidth: "350px" }}>
      <FilterProducts />
    </div>
  );
});

productStories.add("Products List", () => {
  return <ProductsList products={[product, product]} />;
});

productStories.add("Product Card (knobs)", () => {
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

productStories.add("Gallery", () => {
  return <ProductGallery images={product.images} />;
});

productStories.add("Shipping", () => {
  return <ProductShipping shipping={product.shipping} />;
});

productStories.add("Review List", () => {
  return <ProductReviewList reviews={product.reviews} />;
});

productStories.add("Review (knobs)", () => {
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

const profileStories = storiesOf("Super Store/Profile", module);
profileStories.addDecorator(withKnobs);

profileStories.add("Profile Card (knobs)", () => {
  const widthData = boolean("With Data", true);

  return (
    <div style={{ maxWidth: "320px" }}>
      <ProfileCard
        email={widthData ? profile.email : boolean("With Data", false)}
        email={text("Email", profile.email)}
        given_name={text("Given Name", profile.given_name)}
        family_name={text("Family Name", profile.family_name)}
        picture={text("Picture", profile.picture)}
        nickname={text("Nick Name", profile.nickname)}
        name={text("Name", profile.name)}
        sub={text("User Id", profile.sub)}
      />
    </div>
  );
});
