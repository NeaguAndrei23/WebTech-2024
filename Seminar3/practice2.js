const products = [
  { name: 'Laptop', price: 800 },
  { name: 'Smartphone', price: 500 },
  { name: 'Tablet', price: 300 },
];

//const productsWithDiscountedPrices = products.filter(prod => products.map(product => product.price -= (product.price/10)))
const productsWithDiscountedPrices = products.map(prod => (
    {
        ...prod, price: prod.price * 0.9
    }
))

console.log(productsWithDiscountedPrices);

/* expected output:
[
  { name: 'Laptop', price: 720 },
  { name: 'Smartphone', price: 450 },
  { name: 'Tablet', price: 270 }
]
*/
