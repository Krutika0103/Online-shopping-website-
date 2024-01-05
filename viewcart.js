// Sample product data
const products = [
    { id: 1, name: "Product 1", price: 250 },
    { id: 2, name: "Product 2", price: 100 },
    { id: 3, name: "Product 1", price: 250 },
    { id: 4, name: "Product 2", price: 150 },
    { id: 5, name: "Product 1", price: 130 },
    { id: 6, name: "Product 2", price: 500 },
    { id: 7, name: "Product 1", price: 60 },
];

document.addEventListener("DOMContentLoaded", () => {
    const cartItems = document.querySelector(".cart-items");
    const totalItems = document.getElementById("total-items");
    const totalPrice = document.getElementById("total-price");
    const checkoutButton = document.getElementById("checkout-button");

    let cart = [];

    // Function to add items to the cart
    function addToCart(productId) {
        const product = products.find((p) => p.id === productId);
        if (product) {
            cart.push(product);
        }
        updateCart();
    }

    // Function to update the cart display
    function updateCart() {
        cartItems.innerHTML = "";
        let items = 0;
        let price = 0;

        cart.forEach((product) => {
            const item = document.createElement("div");
            item.classList.add("cart-item");
            item.innerHTML = `${product.name} - $${product.price}`;
            cartItems.appendChild(item);
            items++;
            price += product.price;
        });

        totalItems.textContent = items;
        totalPrice.textContent = price.toFixed(2);
    }

    // Add event listeners for adding items to the cart
    for (const product of products) {
        const addButton = document.createElement("button");
        addButton.textContent = "Add to Cart";
        addButton.addEventListener("click", () => addToCart(product.id));
        cartItems.appendChild(addButton);
    }

    // Checkout button click event
    checkoutButton.addEventListener("click", () => {
        alert("you can AFFORD only ONE item at a time!!!!");
    });
});
const cartList = document.getElementById("cartList");
const totalPrice = document.getElementById("totalPrice");

// Retrieve cart items from local storage
const cart = JSON.parse(localStorage.getItem('cart')) || [];

// Display the cart items
cart.forEach(item => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} x${item.quantity} - $${item.total.toFixed(2)}`;
    cartList.appendChild(listItem);
});

// Calculate and display the total price
const total = cart.reduce((acc, item) => acc + item.total, 0);
totalPrice.textContent = total.toFixed(2);

