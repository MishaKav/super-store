import faker from "faker";
import sleep from "await-sleep";

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
  return getProducts(length);
};

export { getProducts, getAsyncProducts };
