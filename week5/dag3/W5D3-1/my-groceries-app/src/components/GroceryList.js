import React, { Component } from 'react';
import List from './List';

class GroceryList extends Component {
  render() {
    return (
      <List
        clickItem={this.props.clickItem}
        listItems={this.props.groceryItems}
        origin={true}
      />
    );
  }
}

export default GroceryList;
