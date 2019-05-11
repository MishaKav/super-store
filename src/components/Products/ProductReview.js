import React from "react";
import { Comment, Tooltip, Avatar, Rate, Empty } from "antd";
import moment from "moment";

function ProductReview(props) {
  const { reviewId, name, rating, date, content } = props;

  if (!reviewId) {
    return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
  }

  const actions = [
    <Rate allowHalf disabled defaultValue={rating} style={{ fontSize: 15 }} />
  ];

  const avatar = (
    <Avatar
      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      alt={name}
    />
  );

  const datetime = (
    <Tooltip title={moment(date).format("YYYY-MM-DD HH:mm:ss")}>
      {moment(date).fromNow()}
    </Tooltip>
  );

  return (
    <Comment
      actions={actions}
      author={name}
      avatar={avatar}
      content={content}
      datetime={datetime}
    />
  );
}

export default ProductReview;
