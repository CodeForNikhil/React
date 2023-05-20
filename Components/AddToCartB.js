import React from 'react';
import './shopstock.json'
import axios from 'axios'

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
                {id:11,name:"pen", cost:20},
                {id:12,name:"pen2",cost:30},
                {id:13,name:"pencil",cost:10},
                {id:14,name:"eraser",cost:15},
                {id:15,name:"marker",cost:50},
                {id:16,name:"ruler",cost:25}
      ],
      selectedItemId: null,
      quantity: null,
      cartItems: [],
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
  }

  handleSelectChange(event) {
    const selectedItemId = parseInt(event.target.value);
    const selectedItem = this.state.items.find((item) => item.id === selectedItemId);
    this.setState({ selectedItemId, selectedItem });
  }

  handleQuantityChange(event) {
    const quantity = parseInt(event.target.value);
    this.setState({ quantity });
  }

  handleAddToCart() {
    const { selectedItem, quantity } = this.state;
    if (selectedItem && quantity) {
      const cartItem = { ...selectedItem, quantity };
      const cartItems = [...this.state.cartItems, cartItem];
      this.setState({ cartItems });
    }
  }

  handleRemoveFromCart(itemId) {
    const cartItems = [...this.state.cartItems];
    const indexToRemove = cartItems.findIndex((item) => item.id === itemId);
    if (indexToRemove >= 0) {
      cartItems.splice(indexToRemove, 1);
      this.setState({ cartItems });
    }
  }

  render() {
    const { items, selectedItemId, selectedItem, quantity, cartItems } = this.state;
    const totalCost = selectedItem && quantity ? selectedItem.cost * quantity : null;

    return (
      <div>
        <div>
          <label htmlFor="item-select">Select an item:</label>
          <select id="item-select" value={selectedItemId} onChange={this.handleSelectChange}>
            <option value="">-- Select --</option>
            {items.map((item) => (
              <option key={item.id} value={item.id}>
                {item.id}
              </option>
            ))}
          </select>
        </div>

        {selectedItem && (
          <div>
            <p>Item name: {selectedItem.name}</p>
            <p>Unit cost: ₹{selectedItem.cost}</p>
          </div>
        )}

        {selectedItem && (
          <div>
            <label htmlFor="quantity-input">Enter a quantity:</label>
            <input type="number" id="quantity-input" value={quantity} onChange={this.handleQuantityChange} />
          </div>
        )}

        {totalCost && (
          <div>
            <p>Total cost: ₹{totalCost}</p>
            <button onClick={this.handleAddToCart}>Add to cart</button>
          </div>
        )}

        {cartItems.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Item name</th>
                <th>Unit cost</th>
                <th>Qty</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {cartItems.map((cartItem) => (
                <tr key={cartItem.id}>
                  <td>{cartItem.name}</td>
                  <td>₹{cartItem.cost}</td>
                  <td><input type="number" value={cartItem.quantity} /></td>
                  <td>₹{cartItem.cost * cartItem.quantity}</td>
                  </tr>
                  )
              )
              }

              </tbody>
              </table>
              )}
        </div>
    )

    }
}
