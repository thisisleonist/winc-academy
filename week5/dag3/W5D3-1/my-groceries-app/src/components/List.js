import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {
  render() {
    if (this.props.listItems.length !== 0) {
      const listItems = this.props.listItems.map((item) => (
        <ListItem
          clickItem={this.props.clickItem}
          id={item.id}
          key={item.id}
          title={item.title}
          origin={this.props.origin}
          count={item.count}
        />
      ));
      return <ul>{listItems}</ul>;
    } else {
      return <ul></ul>;
    }
  }
}

export default List;
