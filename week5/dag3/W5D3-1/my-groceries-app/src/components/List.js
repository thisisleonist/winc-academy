import React, {Component} from "react";
import ListItem from "./ListItem";

class List extends Component {

    render(){

        const listItems = this.props.listItems.map(item =>
            <ListItem key={item.id} title={item.title} />
        );
    
        return (
            <ul>
                {listItems}
            </ul>
        )
    }

}

export default List;