import React, {Component} from "react";
import GroceryList from "./GroceryList";
import ShoppingList from "./ShoppingList";

class Container extends Component {

    constructor(){
        super();
        this.state = {
            shoppingListItems: [
                { id: 1, title: "Brood" },
                { id: 2, title: "Boter" },
                { id: 3, title: "Courgette" },
                { id: 4, title: "Gehakt" }
              ],
            groceryItems: [
                { id: 1, title: "Appels" },
                { id: 2, title: "Wortels" },
                { id: 3, title: "Kaas" },
                { id: 4, title: "Komkommer" }
              ]
        };
    }
    
    render(){

        return (
            <div>
                <GroceryList groceryItems={this.state.groceryItems}/>
                <ShoppingList shoppingListItems={this.state.shoppingListItems}/>
            </div>
        )
    }

}

export default Container;