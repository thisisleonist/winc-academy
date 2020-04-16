import React, {Component} from "react";
import List from "./List";

class ShoppingList extends Component {

    render(){

        return (
            <div>
                {<List clickItem={this.props.clickItem} listItems={this.props.shoppingListItems}/>}
            </div>
        )
    }

}

export default ShoppingList;