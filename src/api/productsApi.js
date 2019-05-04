import faker from "faker";
import sleep from "await-sleep";

const getProduct = id => {
  const commerce = faker.commerce;

  const [basicProduct] = getProducts(1);
  const product = Object.assign({}, basicProduct);
  product.images = [...Array(5)].map(() => {
    return {
      image: faker.image.image(),
      name: faker.lorem.sentence(2)
    };
  });

  return product;
};

const getProducts = length => {
  const commerce = faker.commerce;

  const products = [...Array(length)].map(() => {
    return {
      productId: faker.random.number().toString(),
      name: commerce.productName(),
      category: commerce.department(),
      image: faker.image.image(),
      shortDescription: faker.lorem.words(10),
      fullDescription: faker.lorem.sentence(50),
      color: commerce.color(),
      email: faker.internet.email(),
      website: faker.internet.url(),
      address: `${faker.address.streetAddress()}, ${faker.address.city()}`,
      price: commerce.price(10, 100, 2, "$"),
      inStock: faker.random.number({ min: 10, max: 50 })
    };
  });

  return products;
};

const getAsyncProducts = async length => {
  await sleep(1000);
  return getProduct(length);
};

const getAsyncProduct = async id => {
  await sleep(1000);
  return getProducts(id);
};

export { getProduct, getAsyncProduct, getProducts, getAsyncProducts };
