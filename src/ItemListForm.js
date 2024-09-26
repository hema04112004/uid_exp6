import React, { useState } from 'react';
import './ItemListForm.css';

const ItemListForm = () => {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');
  const [items, setItems] = useState([]);

  const handleAddItem = (e) => {
    e.preventDefault();

    const newItem = {
      name: itemName,
      price: parseFloat(itemPrice),
      quantity: parseInt(itemQuantity),
    };

    setItems([...items, newItem]);
    setItemName('');
    setItemPrice('');
    setItemQuantity('');
  };


  
  // Function to calculate the total amount (price * quantity)
  const getTotalAmount = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="form-container">
      <h1>ITEM LIST FORM</h1>
      <form onSubmit={handleAddItem}>
        <div>
          <label>Item Name: </label>
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Price: </label>
          <input
            type="number"
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Quantity: </label>
          <input
            type="number"
            value={itemQuantity}
            onChange={(e) => setItemQuantity(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Item</button>
      </form>

      <h2>Item List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span> - ₨{item.price.toFixed(2)} x {item.quantity}
          </li>
        ))}
      </ul>

      {/* Display the total quantity and amount */}
      <div className="total-summary">
        
        <h3>Total Amount: ₨{getTotalAmount()}</h3>
      </div>
    </div>
  );
};

export default ItemListForm;
