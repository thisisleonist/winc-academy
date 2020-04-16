import React, { Component } from 'react';
import List from './List';

class ShoppingList extends Component {
  render() {
    return (
      <List
        clickItem={this.props.clickItem}
        listItems={this.props.shoppingListItems}
        origin={false}
      />
    );
  }
}

export default ShoppingList;
