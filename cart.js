 document.addEventListener('DOMContentLoaded', () => {
    const cartContainer = document.getElementById('cartContainer');
  
    function renderCart() {
      cartContainer.innerHTML = '';
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList.add('card');
        userCard.innerHTML = `
          <h2>${user.name}</h2>
          <p>${user.email}</p>
          <button class="delete" onclick="removeFromCart(${user.id})">Delete</button>
        `;
        cartContainer.appendChild(userCard);
      });
    }
  
    window.removeFromCart = function(id) {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart = cart.filter(user => user.id !== id);
      localStorage.setItem('cart', JSON.stringify(cart));
      renderCart();
    };
  
    renderCart();
  });
  