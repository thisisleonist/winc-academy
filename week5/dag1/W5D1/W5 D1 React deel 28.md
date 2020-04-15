# W5 D1 React deel 28
`props` zijn immutable!

Voor `state` altijd `constructor()` en `super()` gebruiken, gevolgd door `this.state` etc. voor bewerken van `state` (t.o.v. `props`, die immutable is)

```
import React from "react"

// https://scrimba.com/p/p4Mrt9/cQnMDHD

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            answer: "Yes"
        }
    }
    
    render() {
        return (
            <div>
                <h1>Is state important to know? </h1>
            </div>
        )
    }
}

export default App
```

Oplossing:

`<h1>Is state important to know? {this.state.answer}</h1>`

Extra:

`<ChildComponent answer={this.state.answer}/>`
