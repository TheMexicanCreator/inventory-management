import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productQuantity, setProductQuantity] = useState(0);
  const [inventoryItems, setInventoryItems] = useState([]);

  useEffect(() => {
    // Fetch inventory items or load data from an API
    // Update the `inventoryItems` state with the fetched data
  }, []);

  const handleNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setProductPrice(parseFloat(event.target.value));
  };

  const handleQuantityChange = (event) => {
    setProductQuantity(parseInt(event.target.value));
  };

  const addNewItem = () => {
    const newItem = {
      id: Date.now(),
      product: productName,
      quantity: productQuantity,
      price: productPrice
    };
    setInventoryItems([...inventoryItems, newItem]);
    setProductName('');
    setProductPrice(0);
    setProductQuantity(0);
  };

  const removeItem = (itemId) => {
    const updatedInventory = inventoryItems.filter((item) => item.id !== itemId);
    setInventoryItems(updatedInventory);
  };

  return (
    <div>
      <header>
      <h1 className='title_1'>Dashboard</h1>
      <p className='button_padding'>
        <button onClick={handleLogout}>Logout</button>
      </p>
      </header>
      <main>
      <div className="input-container">
        <input
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={handleNameChange}
          />
          <input
            type="number"
            placeholder="Quantity"
            value={productQuantity}
            onChange={handleQuantityChange}
          />
          <input
            type="number"
            placeholder="Price"
            value={productPrice}
            onChange={handlePriceChange}
          />
          <button className='button_add' onClick={addNewItem}>Add New Item</button>
        </div>
        <table className="inventory-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Actions</th>
              {/* Add more table headings as needed */}
            </tr>
          </thead>
          <tbody>
            {inventoryItems.map((item) => (
              <tr key={item.id}>
                <td>{item.product}</td>
                <td>{item.quantity}</td>
                <td>${item.price}</td>
                {/* Display more item details or additional columns */}
                <td>
                  <button className='button_remove' onClick={() => removeItem(item.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Dashboard;