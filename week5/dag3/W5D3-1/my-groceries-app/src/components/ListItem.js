import React, {Component} from "react";

class ListItem extends Component {

    render(){
        return (
            <li>{this.props.title}</li>
        )
    }

};

export default ListItem;
