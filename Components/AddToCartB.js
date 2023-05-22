import React from 'react';
import './shopstock.json'
import axios from 'axios'

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items:
      //  [],
      [

                {id:11,name:"pen", cost:20},
                {id:12,name:"pen2",cost:30},
                {id:13,name:"pencil",cost:10},
                {id:14,name:"eraser",cost:15},
                {id:15,name:"marker",cost:50},
                {id:16,name:"ruler",cost:25}
      ],
      selectedItemId: "",
      quantity: null,
      cartItems: [],
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
  }

  // componentDidMount(){
  //   axios.get('./shopstock.json').then((resp)=> {
  //       this.setState({ items : resp.data})
  //   })
  // }
  handleSelectChange(e) {
    let selectedItemId = parseInt(e.target.value);
    let selectedItem = this.state.items.find((item) => item.id === selectedItemId);
    this.setState({ selectedItemId, selectedItem });
  }

  handleQuantityChange(e) {
    let quantity = parseInt(e.target.value);
    this.setState({ quantity });
  }

  handleAddToCart() {
    let { selectedItem, quantity } = this.state;
    if (selectedItem && quantity) {
      let cartItem = { ...selectedItem, quantity };
      let cartItems = [...this.state.cartItems, cartItem];
      this.setState({ cartItems });
    }
  }

  handleRemoveFromCart(itemId) {
    let cartItems = [...this.state.cartItems];
    let indexToRemove = cartItems.findIndex((item) => item.id === itemId);
    if (indexToRemove >= 0) {
      cartItems.splice(indexToRemove, 1);
      this.setState({ cartItems });
    }
  }

  render() {
    let { items, selectedItemId, selectedItem, quantity, cartItems } = this.state;
    let totalCost = selectedItem && quantity ? selectedItem.cost * quantity : null;

    return (
      <div>
        <div>
          <label htmlFor="item-select">Select an item: </label>
          <select id="item-select" onChange={this.handleSelectChange}>
            <option value="">-- Select --</option>
            {items.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        {selectedItem && (
          <div>
            <p>Item ID: {selectedItem.id}</p>
            <p>Unit cost: ₹{selectedItem.cost}</p>
          </div>
        )}

        {selectedItem && (
          <div>
            <label htmlFor="quantity-input">Enter a quantity: </label>
            <input type="number" id="quantity-input" onChange={this.handleQuantityChange} min="1"/>
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
                <th>Item ID</th>
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
                  <td>{cartItem.id}</td>
                  <td>{cartItem.name}</td>
                  <td>₹{cartItem.cost}</td>
                  <td>{cartItem.quantity} </td>
                  <td>₹{cartItem.cost * cartItem.quantity}</td>
                  <td><button onClick={() => this.handleRemoveFromCart(cartItem.id)}>Remove from cart</button></td>
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
