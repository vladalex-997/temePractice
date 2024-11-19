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

shoppingCart.forEach((item) => {
  const cartItemDiv = document.createElement("div");
  cartItemDiv.classList.add("cart-item");
  cartItemDiv.textContent = `${item.name} ${item.price}RON`;
  cartContainer.appendChild(cartItemDiv);
});
