import React from "react";
import { Rate, Empty, List } from "antd";
import ProductReview from "./ProductReview";

function ProductReviewList(props) {
  const { reviews } = props;

  if (!reviews || !reviews.length) {
    return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
  }

  const averageReview =
    reviews.map(r => r.rating).reduce((p, c) => p + c, 0) / reviews.length;
  const ceilReview = Math.round(averageReview * 2) / 2;

  const reviewHeader = (
    <>
      <Rate
        allowHalf
        disabled
        defaultValue={ceilReview}
        style={{ fontSize: 15 }}
      />
      ({ceilReview.toFixed(2)}) {reviews.length} reviews
    </>
  );

  return (
    <List
      header={reviewHeader}
      dataSource={reviews}
      renderItem={r => (
        <li>
          <ProductReview {...r} />
        </li>
      )}
    />
  );
}

export default ProductReviewList;
