const productForm = document.getElementById('product-form');
const productList = document.getElementById('product-list');
const totalValueDisplay = document.getElementById('total-value');

let totalValue = 0;

// Fetch products from the backend
async function fetchProducts() {
    const response = await fetch('https://crudcrud.com/api/5e29bf689e7f4217b0c93fd6ac664ecd/test');
    const products = await response.json();
    products.forEach(product => addProductToList(product));
}

// Add product to the list
function addProductToList(product) {
    const li = document.createElement('li');
    li.textContent = `${product.name} - $${product.price}`;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete Product';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = () => deleteProduct(product.id, li);

    li.appendChild(deleteBtn);
    productList.appendChild(li);
    updateTotalValue(product.price, 'add');
}

// Update total value
function updateTotalValue(amount, action) {
    totalValue = action === 'add' ? totalValue + amount : totalValue - amount;
    totalValueDisplay.textContent = totalValue.toFixed(2);
}

// Handle form submission
productForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const productName = document.getElementById('product-name').value;
    const productPrice = parseFloat(document.getElementById('product-price').value);

    const response = await fetch('https://crudcrud.com/api/5e29bf689e7f4217b0c93fd6ac664ecd/test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: productName, price: productPrice })
    });

    const newProduct = await response.json();
    addProductToList(newProduct);
    updateTotalValue(productPrice, 'add');
    productForm.reset();
});

// Delete product
async function deleteProduct(id, li) {
    await fetch(`https://crudcrud.com/api/5e29bf689e7f4217b0c93fd6ac664ecd/test/${id}`, { method: 'DELETE' });
    const price = parseFloat(li.textContent.split('- $')[1]);
    productList.removeChild(li);
    updateTotalValue(price, 'subtract');
}

// Initial fetch
fetchProducts();
