import React, {Component} from "react";
import ListItem from "./ListItem";

class List extends Component {

    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        alert(this.title);
    }

    render(){

        const listItems = this.props.listItems.map(item =>
            <ListItem id={item.id} key={item.id} title={item.title} handleClick={this.handleClick} />
        );

        return (
            <ul>
                {listItems}
            </ul>
        )
    }

}

export default List;