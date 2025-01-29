
import React, { useState } from 'react';


function App() {

  const [name, setName] = useState('Guest');
  const [quanitity, setQuantity] = useState(0);
  const [comment, setComment] = useState('');
  const [payment, setPayment] = useState('');
  const [shipping, setShipping] = useState('Delivery');

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }

  function handleShippingChange(event) {
    setShipping(event.target.value);
  }

  return(
    <div>
      <input value={name} onChange={handleNameChange}/>
      <p>Name: {name}</p>

      <input value={quanitity} onChange={handleQuantityChange} type="number"/>
      <p>Quantity: {quanitity}</p>

      <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions"/>
      <p>Comment: {comment}</p>

      <select value={payment} onChange={handlePaymentChange}>
        <option>Select an option</option>
        <option value="Credit">Credit Card</option>
        <option value="Debit">Debit Card</option>
        <option value="GiftCard">Gift Card</option>
      </select>
      <p>Payment: {payment}</p>

      <label>
        <input type="radio" value="Pick Up"
        checked={shipping === "Pick Up"} onChange={handleShippingChange}/>
        Pick Up
      </label>
      <label>
        <input type="radio" value="Delivery"
        checked={shipping === "Delivery"} onChange={handleShippingChange}/>
        Delivery
      </label>
      <br></br>
      <p>Shipping: {shipping}</p>
    </div>
  );
}

export default App;

