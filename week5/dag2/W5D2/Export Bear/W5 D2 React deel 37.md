# W5 D2 React deel 37
_Veranderingen in life cycle methods_

https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1

https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes

`constructor()` is init, soort geboorte
`render()` is aankleden
`componentDidMount()` is éénmaal na eerste render()
	vaak gebruikt voor laden API data
	event listener opzetten
`componentWillReceiveProps()` <= deprecated
	ontvangen van properties
`shouldComponentUpdate()`
	alleen re-render als return = true
`componentWillUnmount()`
	cleanup, remove event listener

Uitleg

```
import React, {Component} from "react"

class TodoList extends Component {
    constructor() {
        super()
        this.state = {}
    }
    
    componentDidMount() {
        // GET the data I need to correctly display
    }
    
    componentWillReceiveProps(nextProps) {
        if (nextProps.whatever !== this.props.whatever) {
            // do something important here
        }
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        // return true if want it to update
        // return false if not
    }
    
    componentWillUnmount() {
        // teardown or cleanup your code before your component disappears
        // (E.g. remove event listeners)
    }
    
    render() {
        return (
            <div>
                Code goes here
            </div>
        )
    }
}

export default App
```


