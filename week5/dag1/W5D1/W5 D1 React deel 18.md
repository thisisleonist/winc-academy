# W5 D1 React deel 18
```
body { }

ul{
    margin: 0;
    list-style: none;
}

li{
    margin-bottom: .25rem;
    background-color: red;
    padding-left: .5rem;
}

p{
    display: inline;
    padding-left: .5rem;
    line-height: 2rem;
}

input{
    position: relative;
    top: -1px
}
```

TodoItem

```
import React from "react"

function TodoItem() {
    return (
        <li>
            <input type="checkbox" />
            <p>Placeholder text here</p>
        </li>
    )
}

export default TodoItem
```

App.js

```
import React from "react"
import TodoItem from "./TodoItem"

function App() {
    return (
        <ul>
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </ul>
    )
}

export default App
```
