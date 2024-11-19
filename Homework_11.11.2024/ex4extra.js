const shoppingCart = [
  { name: "BMW Headlight", price: 883 },
  { name: "Apple AirPods Pro", price: 998 },
  { name: "Philips Iron", price: 123 },
  { name: "Samsung Galaxy Watch", price: 828 },
  { name: "Sleeping bag", price: 93 },
  { name: "PC Cooler", price: 44 },
  { name: "Air Purifier", price: 1928 },
  { name: "Garmin smartwatch", price: 821 },
  { name: "Crock-Pot", price: 327 },
  { name: "Electric Fireplace", price: 771 },
];

const cartContainer = document.getElementById("cart");
let totalPrice = 0;

shoppingCart
  .sort((a, b) => b.name.localeCompare(a.name))
  .forEach((item) => {
    const cartItemDiv = document.createElement("div");
    cartItemDiv.classList.add("cart-item");
    cartItemDiv.textContent = `${item.name} ${item.price} RON`;
    cartContainer.appendChild(cartItemDiv);
    totalPrice += item.price;
  });

const avgPrice = (totalPrice / shoppingCart.length).toFixed(1);
const cheapestProduct = shoppingCart.reduce((a, b) =>
  a.price < b.price ? a : b
);
const mostExpensiveProduct = shoppingCart.reduce((a, b) =>
  a.price > b.price ? a : b
);

const separator = document.createElement("div");
separator.classList.add("separator");
separator.textContent = "-".repeat(80);
cartContainer.appendChild(separator);

const summaryDiv = document.createElement("div");
summaryDiv.classList.add("summary");
summaryDiv.innerHTML = `
    TOTAL: ${totalPrice} RON<br>
    AVG PRICE: ${avgPrice} RON<br>
    CHEAPEST: ${cheapestProduct.name} ${cheapestProduct.price} RON<br>
    MOST EXPENSIVE: ${mostExpensiveProduct.name} ${mostExpensiveProduct.price} RON
`;
cartContainer.appendChild(summaryDiv);
