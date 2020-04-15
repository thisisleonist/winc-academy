# W5 D1 React deel 29
```
class App extends React.Component {
    
    constructor() {
        super()
        this.state = {
            stateName: "Texas",
            stateAge: 19
        }
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.stateName}</h1>
                <h3>{this.state.stateAge} years old</h3>
            </div>
        )    
    }
}

export default App
```

`{Component}` in `import` betekent geen `React.Component` in class `App`

```
import React, {Component} from "react"
```

```
class App extends Component() {
```

**this.state is een object, dus geen prop = maar prop:** 
