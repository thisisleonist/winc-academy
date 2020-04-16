import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    return (
      <li
        key={this.props.id}
        className="list-item"
        onClick={() => this.props.clickItem(this.props.id, this.props.origin)}
        value={this.props.title}
      >
        {this.props.title}
        <span>{this.props.count}</span>
      </li>
    );
  }
}

export default ListItem;
