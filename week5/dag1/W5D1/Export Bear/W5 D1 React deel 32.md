# W5 D1 React deel 32
 https://reactjs.org/docs/events.html#supported-events

onMouseOver

import React from "react"

```
function handleClick() {
    console.log("I was clicked")
}

function handleMouseOver() {
    console.log("Hello")
}

// https://reactjs.org/docs/events.html#supported-events

function App() {
    return (
        <div>
            <img onMouseOver={handleMouseOver} src="https://www.fillmurray.com/200/100"/>
            <br />
            <br />
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default App
```
