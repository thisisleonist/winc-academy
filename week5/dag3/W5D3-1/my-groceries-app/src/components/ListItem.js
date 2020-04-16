import React, {Component} from "react";

class ListItem extends Component {

    constructor(){
        super()
        this.clickItem = this.clickItem.bind(this)
    }

    clickItem(){
        alert(this.props.title)
    }

    render(){

        return (
            <li
                key={this.props.key}
                className="list-item"
                onClick={this.clickItem}
                value={this.props.title}
            >
            {this.props.title}
            </li>
        )
    }

};

export default ListItem;