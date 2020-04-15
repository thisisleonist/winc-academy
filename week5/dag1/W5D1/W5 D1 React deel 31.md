# W5 D1 React deel 31
Oefening:

```
import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

class App extends React.Component {
    
    constructor() {
        super()
        this.state = {
            todoItems: todosData.map(item => <TodoItem key={item.id} item={item}/>)
        }
    }
    
    render() {
        
        return (
            <div className="todo-list">
                {this.state.todoItems}
            </div>
        )
    }

}

export default App
```

Oplossing:

```
import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
    }
    
    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}/>)
        
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )    
    }
}

export default App
```
