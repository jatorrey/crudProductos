// resolvers.js

const products = [];

const resolvers = {
  Query: {
    getProduct: (_, { id }) => products.find(product => product.id === id),
    listProducts: () => products,
  },
  Mutation: {
    createProduct: (_, { name, description, price, category, brand, qty, img }) => {
      const newProduct = {
        id: String(products.length + 1), // Generar un ID único
        name,
        description,
        price,
        category,
        brand,
        qty,
        createdAt: new Date(),
        img,
      };
      products.push(newProduct);
      return newProduct;
    },
    updateProduct: (_, { id, name, description, price, category, brand, qty, img }) => {
      const productIndex = products.findIndex(product => product.id === id);
      if (productIndex === -1) return null;

      const updatedProduct = {
        ...products[productIndex],
        name: name !== undefined ? name : products[productIndex].name,
        description: description !== undefined ? description : products[productIndex].description,
        price: price !== undefined ? price : products[productIndex].price,
        category: category !== undefined ? category : products[productIndex].category,
        brand: brand !== undefined ? brand : products[productIndex].brand,
        qty: qty !== undefined ? qty : products[productIndex].qty,
        img: img !== undefined ? img : products[productIndex].img,
      };

      products[productIndex] = updatedProduct;
      return updatedProduct;
    },
    deleteProduct: (_, { id }) => {
      const productIndex = products.findIndex(product => product.id === id);
      if (productIndex === -1) return false;

      products.splice(productIndex, 1);
      return true;
    },
  },
};

module.exports = resolvers;