import React from "react";
import { Carousel, Empty } from "antd";

function ProductGallery(props) {
  const { images } = props;

  if (!images || !images.length) {
    return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
  }

  return (
    <div style={{ width: "640px" }}>
      <Carousel infinite autoplay>
        {images.map(i => {
          return (
            <div key={i.name}>
              <img alt={i.name} src={i.image} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default ProductGallery;
