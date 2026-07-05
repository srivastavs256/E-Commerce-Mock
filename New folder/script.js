const productForm = document.getElementById('product-form');
const productList = document.getElementById('product-list');
const totalValueDisplay = document.getElementById('total-value');

let totalValue = 0;

// Fetch products from the backend
async function fetchProducts() {
    try {
        const response = await fetch('https://crudcrud.com/api/83164f8042374da19ad7d5d4383ef78f/test');
        const products = await response.json();
        console.log("Fetched products:", products); // Log the fetched products
        products.forEach(product => addProductToList(product));
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

// Add product to the list
function addProductToList(product) {
    const li = document.createElement('li');
    li.textContent = `${product.name} - $${product.price}`;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete Product';  
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = () => deleteProduct(product._id || product.id, li); // Adjust based on actual ID field

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

    try {
        const response = await fetch('https://crudcrud.com/api/83164f8042374da19ad7d5d4383ef78f/test', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: productName, price: productPrice })
        });

        const newProduct = await response.json();
        addProductToList(newProduct);
        updateTotalValue(productPrice, 'add');
        productForm.reset();
    } catch (error) {
        console.error("Error adding product:", error);
    }
});

// Delete product
async function deleteProduct(id, li) {
    if (!id) {
        console.error("Product ID is undefined!");
        return;
    }

    try {
        const response = await fetch(`https://crudcrud.com/api/83164f8042374da19ad7d5d4383ef78f/test/${id}`, { method: 'DELETE' });

        if (response.ok) {
            const price = parseFloat(li.textContent.split('- $')[1]);
            productList.removeChild(li);
            updateTotalValue(price, 'subtract');
        } else {
            console.error("Failed to delete product:", response.statusText);
        }
    } catch (error) {
        console.error("Error deleting product:", error);
    }
}

// Initial fetch
fetchProducts();
