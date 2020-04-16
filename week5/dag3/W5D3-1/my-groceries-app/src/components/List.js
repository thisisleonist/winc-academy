import React, {Component} from "react";
import ListItem from "./ListItem";

class List extends Component {

    constructor(){
        super();
        this.state = {
            groceryItems: [
                { id: 1, title: "Appels" },
                { id: 2, title: "Wortels" },
                { id: 3, title: "Kaas" },
                { id: 4, title: "Komkommer" }
              ]
        }
    }

    render(){


        const listItems = this.state.groceryItems.map(item =>
            <ListItem item={item} />
        );
    
        return (
            <ul>
                {listItems}            
            </ul>
        )

    }

};

export default List;