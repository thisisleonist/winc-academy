import React, {Component} from "react";
import List from "./List";

class GroceryList extends Component {

    render(){

        return (
            <div>
                {<List listItems={this.props.groceryItems}/>}
            </div>
        )
    }

}

export default GroceryList;