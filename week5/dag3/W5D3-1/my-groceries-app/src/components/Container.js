import React, { Component } from 'react';
import GroceryList from './GroceryList';
import ShoppingList from './ShoppingList';

class Container extends Component {
  constructor() {
    super();
    this.state = {
      shoppingListItems: [
        { id: 1, title: 'Brood' },
        { id: 2, title: 'Boter' },
        { id: 3, title: 'Courgette' },
        { id: 4, title: 'Gehakt' },
      ],
      groceryItems: [
        { id: 1, title: 'Appels' },
        { id: 2, title: 'Wortels' },
        { id: 3, title: 'Kaas' },
        { id: 4, title: 'Komkommer' },
      ],
      addGrocery: '',
      disableAddButton: '',
    };
    this.clickItem = this.clickItem.bind(this);
    this.handleAddGrocery = this.handleAddGrocery.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEmptyCart = this.handleEmptyCart.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState((prevState) => {
      const exists = prevState.groceryItems.find(
        (item) => item.title === value,
      );
      console.log(exists);

      if (exists !== undefined || this.state.addGrocery === '') {
        return {
          [name]: value,
          disableAddButton: 'disabled',
        };
      } else {
        return {
          [name]: value,
          disableAddButton: 'enabled',
        };
      }
    });
    event.preventDefault();
  }

  handleAddGrocery = (event) => {
    this.setState((prevState) => {
      const exists = prevState.groceryItems.find(
        (item) => item.title === this.state.addGrocery,
      );
      if (exists === undefined) {
        const newState = prevState.groceryItems.concat({
          id: prevState.groceryItems.length + 1,
          title: this.state.addGrocery,
        });
        return { groceryItems: newState };
      } else {
      }
    });
    event.preventDefault();
  };

  handleEmptyCart = (event) => {
    this.setState((prevState) => {
      return {
        shoppingListItems: [],
      };
    });
    event.preventDefault();
  };

  clickItem(id, origin) {
    if (origin === true) {
      this.setState((prevState) => {
        let clickedItem = prevState.groceryItems.find((item) => item.id === id);
        const newState = prevState.shoppingListItems.concat({
          id: prevState.shoppingListItems.length + 1,
          title: clickedItem.title,
        });
        return { shoppingListItems: newState };
      });
    }
  }

  render() {
    return (
      <div id="container">
        <header>
          <h1>Boodschappenlijst</h1>
        </header>
        <form id="addGrocery" onSubmit={this.handleAddGrocery}>
          <input
            id="addGroceryText"
            type="text"
            name="addGrocery"
            value={this.state.addGrocery}
            onChange={this.handleChange}
            placeholder="Voeg een item toe"
          />
          <button disabled={this.state.disableAddButton}>Voeg toe</button>
        </form>
        <form id="clearCart" onSubmit={this.handleEmptyCart}>
          <button>Leeg boodschappenmand</button>
        </form>
        <div id="groceries">
          <GroceryList
            clickItem={this.clickItem}
            groceryItems={this.state.groceryItems}
          />
        </div>
        <div id="cart">
          <ShoppingList
            clickItem={this.clickItem}
            shoppingListItems={this.state.shoppingListItems}
          />
        </div>
      </div>
    );
  }
}

export default Container;
