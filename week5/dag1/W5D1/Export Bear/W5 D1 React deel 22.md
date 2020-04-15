# W5 D1 React deel 22
```
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

ReactDOM.render(<App />, document.getElementById("root"))
```

```
import React from "react"

function Joke(props) {
    console.log(props)
    
    return (
        <div>
            <p>{props.joke.question}</p>
            <p>{props.joke.punchLine}</p>
        </div>
    )
}

export default Joke
```

```
import React from "react"
import Joke from "./Joke"

function App() {
    return (
        <div>
            <Joke joke={{question: "What’s in a name?", punchLine: "I have no idea!"}} />
            <Joke joke={{punchLine: "I have no idea!"}} />
            <Joke joke={{question: "What’s in a name?", punchLine: "I have no idea!"}} />
            <Joke joke={{question: "What’s in a name?", punchLine: "I have no idea!"}} />
            <Joke joke={{question: "What’s in a name?", punchLine: "I have no idea!"}} />
        </div>
    )
}

export default App
```

Conditional:

```
import React from "react"

function Joke(props) {
    return (
        <div>
            <h3 style={{display: props.question ? "block" : "none"}}>Question: {props.question}</h3>
            <h3>Answer: {props.punchLine}</h3>
            <hr/>
        </div>
    )
}

export default Joke
```

Test

```
import React from "react"

function Joke(props) {
    return (
        <div>
            <h3 style={{display: !props.question && "none"}}>Question: {props.question}</h3>
            <h3 style={{color: !props.question && "red"}}>{props.question && "Answer: "}{props.punchLine}</h3>
            <hr/>
        </div>
    )
}

export default Joke
```


