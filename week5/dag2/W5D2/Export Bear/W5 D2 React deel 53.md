# W5 D2 React deel 53
Oefening 1:

```
import React, {useState} from "react"

const App = () => {
    const state = useState(
        {
            count: 0
        }
    )
    
    return (
        <div>
            <h1>{state.count}</h1>
            <button>Change!</button>
        </div>
    )
    
}

export default App
```

Oplossing:

```
function App() {
    const [count] = useState(0)
    
    return (
        <div>
            <h1>{count}</h1>
            <button>Change!</button>
        </div>
    )
}
```

Oefening 2:

```
function App() {
    const [count, setCount] = useState(0)
    
    function increment() {
        setCount(prevCount => prevCount + 1)
    }
    
    function decrement() {
        setCount(prevCount => prevCount - 1)
    }
    
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}
```

Oefening 3:

```
    const [count, setCount] = useState(0)
    const [answer, setAnswer] = useState("Yes?")
    
    function increment() {
        setCount(prevCount => prevCount + 1)
    }
    
    function decrement() {
        setCount(prevCount => prevCount - 1)
    }
    
    function double() {
        setCount(prevCount => Math.round(prevCount * 2))
    }
    
    function half() {
        setCount(prevCount => Math.round(prevCount / 2))
    }
    
    function havefun(event){
        const newValue = event.target.value
        setAnswer(prevChoice => newValue)
        event.preventDefault
    }
```

Let op: `event.target.value` niet direct in `setAnswer` plaatsen, maar via `const`, anders krijg je een onbekende fout!

```
<button onClick={double}>Double</button>
<button onClick={half}>Half</button>
<button value="Yes!" onClick={havefun}>Yes</button>
<button value="No!" onClick={havefun}>No</button>
```
