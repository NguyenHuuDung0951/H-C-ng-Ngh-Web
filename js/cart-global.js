document.addEventListener('DOMContentLoaded', function() {
    initCartElements();
});

function initCartElements() {
    const openShopping = document.querySelector('.shopping');
    const closeCart = document.querySelector('.close-cart');
    const cartItems = document.querySelector('.cart-items');
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay');
    const total = document.querySelector('.total');
    const quantity = document.querySelector('.quantity');
    const checkoutBtn = document.querySelector('.checkout-btn');
    
    if (!openShopping || !body) return;
    
    openShopping.addEventListener('click', (e) => {
        e.stopPropagation();
        body.classList.add('cart-active');
    });
    
    if (closeCart) {
        closeCart.addEventListener('click', () => {
            body.classList.remove('cart-active');
        });
    }
    
    if (overlay) {
        overlay.addEventListener('click', () => {
            body.classList.remove('cart-active');
        });
    }
    
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.cart-popover') && !e.target.closest('.shopping')) {
            body.classList.remove('cart-active');
        }
    });
    
    const cartPopover = document.querySelector('.cart-popover');
    if (cartPopover) {
        cartPopover.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
    
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length > 0) {
                alert('Thank you for buying! Total payment:'+ ' $' + total.innerText  );
                cart = [];
                saveToLocalStorage();
                updateCart();
                body.classList.remove('cart-active');
            } else {
                alert('Your shopping cart is empty!');
            }
        });
    }
    
    updateCart();
}

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(product) {
    let foundIndex = cart.findIndex(item => item.id === product.id);
    if (foundIndex === -1) {
        cart.push({
            ...product,
            quantity: 1
        });
    } else {
        cart[foundIndex].quantity++;
    }
    
    saveToLocalStorage();
    updateCart();

    showNotification(`Add ${product.name} to the cart!`);
}

function changeQuantity(key, amount) {
    cart[key].quantity = cart[key].quantity + amount;
    if (cart[key].quantity <= 0) {
        cart.splice(key, 1);
    }
    saveToLocalStorage();
    updateCart();
}

function removeItem(key) {
    cart.splice(key, 1);
    saveToLocalStorage();
    updateCart();
}

function updateCart() {
    const quantity = document.querySelector('.quantity');
    const total = document.querySelector('.total');
    const cartItems = document.querySelector('.cart-items');
    
    if (!quantity || !total || !cartItems) return;
    
    let count = 0;
    let totalPrice = 0;
    
    cart.forEach(item => {
        count += item.quantity;
        totalPrice += item.price * item.quantity;
    });
    
    quantity.textContent = count;
    
    if (count > 0) {
        quantity.classList.add('has-items');
    } else {
        quantity.classList.remove('has-items');
    }
    
    total.textContent = totalPrice.toLocaleString();
    
    cartItems.innerHTML = '';
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart-message">Your Cart is empty</div>';
    } else {
        cart.forEach((item, index) => {
            let cartItemDiv = document.createElement('div');
            cartItemDiv.classList.add('cart-item');
            cartItemDiv.innerHTML = `
                <img src="${item.image}">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${item.price.toLocaleString()} $</div>
                    <div class="cart-item-quantity">
                        <button onclick="changeQuantity(${index}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="changeQuantity(${index}, 1)">+</button>
                        <button class="remove-item" onclick="removeItem(${index})">×</button>
                    </div>
                </div>`;
            cartItems.appendChild(cartItemDiv);
        });
    }
}

function addToCartFromPage(id, name, price, image) {
    const product = {
        id: id,
        name: name,
        price: price,
        image: image
    };
    addToCart(product);
}

window.addToCartFromPage = addToCartFromPage;
window.changeQuantity = changeQuantity;
window.removeItem = removeItem;

function saveToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function showNotification(message) {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        document.body.removeChild(existingNotification);
    }
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.left = '50%';
    notification.style.transform = 'translateX(-50%)';
    notification.style.backgroundColor = '#27ae60';
    notification.style.color = 'white';
    notification.style.padding = '15px 20px';
    notification.style.borderRadius = '5px';
    notification.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.2)';
    notification.style.zIndex = '9999';
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.5s';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 500);
    }, 1000);
}