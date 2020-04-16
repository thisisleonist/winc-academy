import React, {Component} from "react";

class ListItem extends Component {

    constructor(){
        super()
    }

    clickItem(){

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