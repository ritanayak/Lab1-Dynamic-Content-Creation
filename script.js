const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');

 
let totalPrice = 0;
 
// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}
 
// Function to remove an item
function removeItem(event) {
  const item = event.target.closest('li');
  const itemTotal = parseFloat(item.dataset.total) || 0;
  updateTotalPrice(-itemTotal);
  item.remove();
}

//update quantity
function updateQuantity(event) {
    const input = event.target;
    const item = input.closest('li');
    const price =parseFloat(item.dataset.price);
    const oldTotal = parseFloat(item.dataset.total) || price;
    const quantity = Number(input.value);

    const newTotal = price*quantity;

    item.dataset.total = newTotal.toFixed(2);
    item.querySelector('.item-total').textContent = newTotal.toFixed(2);

    updateTotalPrice(newTotal - oldTotal);

}

//Add product
addProductButton.addEventListener('click', () =>{
    const name = productNameInput.value.trim();
    const price = Number(productPriceInput.value);

    if (!name || price <=0 || isNaN(price)) {
        alert ("please enter a valid product name and price.");
        return;
    }

    const li = document.createElement('li');
    li.dataset.price = price;
    li.dataset.total = price;

    li.innerHTML = `<strong>${name}</strong> - $${price.toFixed(2)} Qty:<input type="number" value="1" min="1" class="qty">
    Item Total: $<span class="item-total">${price.toFixed(2)}</span>
    <button class="remove-btn">Remove</button>`;

  li.querySelector('.remove-btn').addEventListener('click', removeItem);
  li.querySelector('.qty').addEventListener('change', updateQuantity);

  cart.appendChild(li);
  updateTotalPrice(price);

  productNameInput.value = '';
  productPriceInput.value = '';
});
