
function openModal() {
    document.getElementById("auth-modal").style.display = "block";
}


function closeModal() {
    document.getElementById("auth-modal").style.display = "none";
}


function toggleForm() {
    const login = document.getElementById("login-form");
    const register = document.getElementById("register-form");
    login.style.display = login.style.display === "none" ? "block" : "none";
    register.style.display = register.style.display === "none" ? "block" : "none";
}


function login() {
    const username = document.getElementById("login-username").value.trim();
    const password = document.getElementById("login-password").value.trim();
    if (!username || !password) {
        alert("Please fill in all fields.");
        return;
    }
    localStorage.setItem("loggedInUser", username);
    updateNavbarUser();
    closeModal();
    
}


function register() {
    const username = document.getElementById("register-username").value.trim();
    const password = document.getElementById("register-password").value;
    const confirm = document.getElementById("register-confirm").value;
    if (!username || !password || !confirm) {
        alert("Please complete all fields.");
        return;
    }
    if (password !== confirm) {
        alert("Passwords do not match.");
        return;
    }
    localStorage.setItem("loggedInUser", username);
    updateNavbarUser();
    closeModal();
    
}


function updateNavbarUser() {
    const username = localStorage.getItem("loggedInUser");
    const nav = document.querySelector(".nav-items");
    if (username) {
       
    }
}


function logout() {
    localStorage.removeItem("loggedInUser");
    location.reload();
}

window.onload = () => {
    if (localStorage.getItem("loggedInUser")) {
        updateNavbarUser();
    }
};





const products = [
  {
    name: "Iphone 16",
    price: "₵699",
    image: "images/iph.webp"
  },
  {
    name: "Laptop HP",
    price: "₵350",
    image: "images/lap.jpg"
  },
  {
    name: "Fitness Smartwatch",
    price: "₵999",
    image: "images/ear3.webp"
  },
  {
    name: "Modern Desk Lamp",
    price: "₵80",
    image: "images/ear2.avif"
  }
];

const grid = document.getElementById("product-grid");

products.forEach(product => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.price}</p>
    <p class='cart'>Add cart</p>
  `;
  grid.appendChild(card);
});








