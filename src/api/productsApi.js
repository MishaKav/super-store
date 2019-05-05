import faker from "faker";
import sleep from "await-sleep";

const getProduct = id => {
  const { lorem, image } = faker;

  const [basicProduct] = getProducts(1);
  const product = Object.assign({}, basicProduct);

  product.images = [...Array(5)].map(() => {
    return {
      image: image.image(),
      name: lorem.sentence(2)
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
  await sleep(1000);
  return getProducts(length);
};

const getAsyncProduct = async id => {
  await sleep(1000);
  return getProduct(id);
};

export { getProduct, getAsyncProduct, getProducts, getAsyncProducts };
