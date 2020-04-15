# W5 D2 React deel 41
`&&` Tenary Operator

Voorbeeld:

```
import React, {Component} from "react"
import Conditional from "./Conditional"

class App extends Component {
    constructor() {
        super()
        this.state = {
            unreadMessages: ["a", "b"]
        }
    }
    // &&
    // false && false
    render() {
        return (
            <div>
                {
                    this.state.unreadMessages.length > 0 && 
                    <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
                }
            </div>
        )
    }
}

export default App
```
