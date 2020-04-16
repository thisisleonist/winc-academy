import React, {Component} from "react";
import ListItem from "./ListItem";

class List extends Component {

    render(){
        return (
            <ul>
                <ListItem title="Appels"/>
                <ListItem title="Wortels"/>
                <ListItem title="Kaas"/>
                <ListItem title="Komkommer"/>
            </ul>
        )
    }

};

export default List;