import React, {Component} from "react";

class ListItem extends Component {

    constructor(){
        super()
        this.clickItem = this.clickItem.bind(this)
    }

    clickItem(){
        alert(this.props.item.title)
    }

    render(){

        return (
            <li
                key={this.props.item.id}
                className="list-item"
                onClick={this.clickItem}
                value={this.props.item.title}
            >
            {this.props.item.title}
            </li>
        )
    }

};

export default ListItem;