import faker from "faker";
import sleep from "await-sleep";

const delay = 1000;

const getProduct = id => {
  const { lorem, image, random, name, date } = faker;

  const [basicProduct] = getProducts(1);
  const product = Object.assign({}, basicProduct);

  product.images = [...Array(random.number({ min: 1, max: 5 }))].map(() => {
    return {
      image: image.image(),
      name: lorem.sentence(2)
    };
  });

  product.reviews = [...Array(random.number({ min: 2, max: 10 }))].map(() => {
    return {
      reviewId: random.uuid(),
      name: name.findName(),
      rating: random.number({ min: 1, max: 5, precision: 0.5 }),
      date: date.past(),
      content: lorem.sentence()
    };
  });

  product.shipping = [...Array(4)].map(() => {
    return {
      shippingId: random.uuid(),
      name: lorem.sentence(2),
      date: date.past(),
      content: lorem.sentence()
    };
  });

  return product;
};

const getProducts = length => {
  const { commerce, internet, lorem, random, address, image } = faker;

  const products = [...Array(length)].map(() => {
    return {
      productId: random.number().toString(),
      name: commerce.productName(),
      category: commerce.department(),
      image: image.image(),
      shortDescription: lorem.words(10),
      fullDescription: lorem.sentence(50),
      color: commerce.color(),
      email: internet.email(),
      website: internet.url(),
      address: `${address.streetAddress()}, ${address.city()}`,
      price: commerce.price(10, 100, 2, "$"),
      inStock: random.number({ min: 10, max: 50 })
    };
  });

  return products;
};

const getAsyncProducts = async length => {
  await sleep(delay);
  return getProducts(length);
};

const getAsyncProduct = async id => {
  await sleep(delay);
  return getProduct(id);
};

export { getProduct, getAsyncProduct, getProducts, getAsyncProducts };
