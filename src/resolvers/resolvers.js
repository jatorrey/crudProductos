// resolvers.js

const products = [];

const users = [];

const resolvers = {
  Query: {
    getProduct: (_, { id }) => products.find(product => product.id === id),
    listProducts: () => products,
    getUser: (_, { id }) => users.find(user => user.id === id),
    listUsers: () => users,
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
    createUser: (_, { fullName, email, password, address, phoneNo, userType, preferredPayMethod }) => {
      const newUser = {
        id: String(users.length + 1),
        fullName,
        email,
        password,
        address,
        phoneNo,
        dateRegistered: new Date(),
        userType,
        preferredPayMethod,
      };
      users.push(newUser);
      return newUser;
    },
    updateUser: (_, { id, fullName, email, password, address, phoneNo, userType, preferredPayMethod }) => {
      const userIndex = users.findIndex(user => user.id === id);
      if (userIndex === -1) return null;

      const updatedUser = {
        ...users[userIndex],
        fullName: fullName !== undefined ? fullName : users[userIndex].fullName,
        email: email !== undefined ? email : users[userIndex].email,
        password: password !== undefined ? password : users[userIndex].password,
        address: address !== undefined ? address : users[userIndex].address,
        phoneNo: phoneNo !== undefined ? phoneNo : users[userIndex].phoneNo,
        userType: userType !== undefined ? userType : users[userIndex].userType,
        preferredPayMethod: preferredPayMethod !== undefined ? preferredPayMethod : users[userIndex].preferredPayMethod,
      };

      users[userIndex] = updatedUser;
      return updatedUser;
    },
    deleteUser: (_, { id }) => {
      const userIndex = users.findIndex(user => user.id === id);
      if (userIndex === -1) return false;

      users.splice(userIndex, 1);
      return true;
    },
  },
};

module.exports = resolvers;