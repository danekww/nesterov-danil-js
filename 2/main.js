// ===============================
// ЗАДАНИЕ 1. Своя функция pam()
// ===============================

function pam(array, callback) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }

  return result;
}

// ===============================
// ДАННЫЕ
// ===============================

const products = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric",
    category: "men's clothing",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions",
    category: "men's clothing",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
];

// ===============================
// ЗАДАНИЕ 2. Вывод через pam()
// ===============================

pam(products, (product) => {
  console.log(product.id);
  console.log(product.title);
  console.log(product.price);
  console.log(product.description);
  console.log(product.category);
  console.log(product.rating);
  console.log("==========");
});

// ===============================
// ЗАДАНИЕ 3. То же самое через map()
// ===============================

products.map((product) => {
  console.log(product.id);
  console.log(product.title);
  console.log(product.price);
  console.log(product.description);
  console.log(product.category);
  console.log(product.rating);
  console.log("==========");
});
