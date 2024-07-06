import React, { useState } from 'react';
import './Enlist.css';
import Navbarboot from '../../components/navbar/navbarboot';
const EnlistmentPage = () => {
  const [items, setItems] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const itemName = event.target.elements.itemName.value;
    const itemPrice = event.target.elements.itemPrice.value;
    const itemImageURL = event.target.elements.itemImageURL.value;
    const itemImageFile = event.target.elements.itemImageFile.files[0];

    let itemImage;

    if (itemImageURL) {
      itemImage = itemImageURL;
    } else if (itemImageFile) {
      // Implement the code to upload the image file to a server and return the URL
      // For example, you can use a cloud storage service like Firebase Storage or Amazon S3
      const imageURL = 'https://example.com/image.jpg'; // Replace with the actual URL
      itemImage = imageURL;
    } else {
      alert('Please provide either an image URL or an image file.');
      return;
    }

    const itemDescription = event.target.elements.itemDescription.value;

    const newItem = {
      id: items.length + 1,
      name: itemName,
      price: itemPrice,
      image: itemImage,
      description: itemDescription,
    };

    setItems([...items, newItem]);

    event.target.elements.itemName.value = '';
    event.target.elements.itemPrice.value = '';
    event.target.elements.itemImageURL.value = '';
    event.target.elements.itemImageFile.value = '';
    event.target.elements.itemDescription.value = '';
  };

  const handleRemoveItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (<>
  <div>
    <Navbarboot />
  </div>
    <div className="enlistment-page">
      <h1>Enlistment Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="itemName">Item Name:</label>
        <input type="text" id="itemName" name="itemName" required />
        <label htmlFor="itemPrice">Item Price:</label>
        <input type="number" id="itemPrice" name="itemPrice" required />
        <label htmlFor="itemImageURL">Image URL (or leave blank):</label>
        <input type="text" id="itemImageURL" name="itemImageURL" />
        <label htmlFor="itemImageFile">Image File (optional):</label>
        <input type="file" id="itemImageFile" name="itemImageFile" />
        <label htmlFor="itemDescription">Item Description:</label>
        <textarea id="itemDescription" name="itemDescription" required />
        <button type="submit">Enlist Item</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="item-row">
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                {item.image ? (
                  <img src={item.image} alt={item.name} className="item-image" />
                ) : null}
              </td>
              <td>
                <div className="item-description">{item.description}</div>
              </td>
              <td>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="remove-button"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div></>
  );
};

export default EnlistmentPage;