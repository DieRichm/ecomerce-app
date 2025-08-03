const products = [
  { name: "iPhone 13", price: "₵4,200", category: "Phones", image: "images/iph.webp" },
  { name: "iPhone 14 proMax", price: "₵5,200", category: "Phones", image: "images/15.webp" },
  { name: "Samsung Galaxy A32", price: "₵2,800", category: "Phones", image: "images/SUM.jpg" },
  { name: "SONY,ILCE-7M4", price: "₵2,800", category: "Phones", image: "images/SUMS.avif" },
  { name: "SONY,ILCE-7M3 ", price: "₵5,800", category: "Phones", image: "images/su.avif" },
  { name: "Red Dress", price: "₵250", category: "Dresses", image: "images/cloth2.avif" },
   { name: "Red Dress", price: "₵200", category: "Dresses", image: "images/dress.jpg" },
{ name: "White Dress", price: "₵350", category: "Dresses", image: "images/cloth4.avif" },
{ name: "White Dress", price: "₵250", category: "Dresses", image: "images/cloth3.avif" },
{ name: "Allcolors Dress", price: "₵210", category: "Dresses", image: "images/dress.webp" },
{ name: "Men Dress", price: "₵30", category: "Dresses", image: "images/IMG-20250621-WA0123.jpg" },
{ name: "Men Dress", price: "₵40", category: "Dresses", image: "images/IMG-20250621-WA0124.jpg" },
{ name: "Men Dress", price: "₵50", category: "Dresses", image: "images/IMG-20250621-WA0125.jpg" },
{ name: "Men Dress", price: "₵25", category: "Dresses", image: "images/IMG-20250621-WA0128.jpg" },


 { name: "Toyota Camry", price: "₵80,000", category: "Cars",button:"Add to Cart", image: "images/toto.avif" },
  { name: "Honda Civic", price: "₵60,000", category: "Cars", image: "images/to.avif" },
  { name: "Ford Mustang", price: "₵100,000", category: "Cars", image: "images/to2.avif" },
  { name: "Tesla Model 3", price: "₵120,000", category: "Cars", image: "images/to3.avif" },
  




  { name: "Multicolors Dress", price: "₵220", category: "Dresses", image: "images/cloth.avif" },
  { name: "Pizza Box", price: "₵90", category: "Foods", image: "images/pizza.jpg" },
  { name: "Pizza Box", price: "₵100", category: "Foods", image: "images/pizza2.jpeg" },
   { name: "Pizza Box", price: "₵200", category: "Foods", image: "images/pizza3.jpeg" },
  { name: "Jollof Rice Pack", price: "₵75", category: "Foods", image: "images/jof.webp" },
  { name: "Jollof Rice Pack", price: "₵55", category: "Foods", image: "images/jof1.webp" },
   { name: "Jollof Rice Pack", price: "₵50", category: "Foods", image: "images/jof2.webp" },
    { name: "Jollof Rice Pack", price: "₵60", category: "Foods", image: "images/jof3.avif" },
     
  
  
];

const container = document.getElementById("products-container");

function displayProducts(filteredProducts) {
  container.innerHTML = "";
  filteredProducts.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <p class='cart'>Add cart</p>
      
    `;
    container.appendChild(card);
  });
}


displayProducts(products);

function filterCategory(category) {
  if (category === "All") {
    displayProducts(products);
  } else {
    const filtered = products.filter(p => p.category === category);
    displayProducts(filtered);
  }
}




