# W5 D2 React deel 49.1
Oefening

`App.js`

```
import React, {Component} from "react"

class App extends Component {
  constructor() {
    super()
    this.state = {
      
    }
  }
  
  render(){
    return (
        <h1>Test</h1>
    )
  }
  
}

export default App
```

`index.js`

```
import React, {Component} from "react"
import ReactDOM from "react-dom"
import App from "./App"

ReactDOM.render(<App />,document.querySelector("#root"))
```

Oefening 2

`App.js`

```
import React from "react"
import Header from "./Header"
import MemeGenerator from "./MemeGenerator"

/**
 * Create 2 new components - Header and MemeGenerator
 * Header will only display things
 * MemeGenerator will be calling to an API and holding on to data
 * Each should be in their own file of the same name
 */

function App() {
    return (
        <div>
            <Header />
            <MemeGenerator />
        </div>
    )
}

export default App
```

`Header.js`

```
import React from "react"

class Header extends React.Component {
    
    render(){
        return (
            <h1>Hello world!</h1>
        )
    }
    
}

export default Header

```

Kan ook eenvoudiger (stateless):

```
import React from "react"

function Header() {
    return (
        <h1>HEADER</h1>
    )
}

export default Header
```

`MemeGenerator.js`

```
import React from "react"

class MemeGenerator extends React.Component {
    
    constructor() {
        super()
        this.state = {

        }
    }

    render(){
        return (
            <p>Generator!</p>
        )
    }
    
}

export default MemeGenerator
```
