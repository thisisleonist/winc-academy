# W5 D2 React deel 40
Conditional render

Voorbeeld 1:

```
import React, {Component} from "react"
import Conditional from "./Conditional"

class App extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }
    
    render() {
        return (
            <div>
                <Conditional isLoading={this.state.isLoading}/>
            </div>
        )
    }
}

export default App
```

```
import React from "react"

function Conditional(props) {
    if(props.isLoading === true) {
        return (
            <h1>Loading...</h1>
        )
    } else {
        return (
            <h1>Some cool stuff about conditional rendering</h1>
        )
    }
    
}

export default Conditional
```

Voorbeeld 2 met ternary operator (bekend uit PHP)
`x ? y : z`:

```
import React from "react"

function Conditional(props) {
    return (
        <div>
            <h1>Navbar</h1>
            
            {props.isLoading ? <h1>Loading...</h1> : <h1>Some cool stuff about conditional rendering</h1>}
            
            <h1>Footer</h1>
        </div>
    )
    
}

export default Conditional
```

Voorbeeld 3: conditional zoals in dit voorbeeld zou beter passen in App.js dan in Component.js. Aldus geschiedde...

```
import React from "react"

function Conditional(props) {
    return <h1>Some cool stuff about conditional rendering</h1>
}

export default Conditional
```

```
import React, {Component} from "react"
import Conditional from "./Conditional"

class App extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }
    
    render() {
        return (
            <div>
                {this.state.isLoading ?
                <h1>Loading...</h1> :
                <Conditional />}
            </div>
        )
    }
}

export default App
```
