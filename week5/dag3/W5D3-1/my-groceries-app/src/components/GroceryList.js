import React, {Component} from "react";
import List from "./List";

class GroceryList extends Component {

    render(){

        return (
            <div>
                {<List clickItem={this.props.clickItem} listItems={this.props.groceryItems}/>}
            </div>
        )
    }

}

export default GroceryList;