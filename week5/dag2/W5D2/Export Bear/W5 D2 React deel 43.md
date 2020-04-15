# W5 D2 React deel 43
Oefening:

```
import React from "react"

function TodoItem(props) {
    
    const changeBackground = props.currentState ? "todo-item" : "todo-item gray"
    const changeItemText = props.currentState ? "strikeit" : ""
    
    return (
        <div className={changeBackground}>
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={() => props.handleChange(props.item.id)}
            />
            <p className={changeItemText}>{props.item.text}</p>
        </div>
    )
}

export default TodoItem
```

Oplossing:

Alleen de style van de` <p>` werd veranderd met inline CSS

Omdat we dat niet willen in de praktijk heb ik een class aangemaakt met de naam `gray{}` voor de `<div>` en een class `strikeit{}` voor de `<p>`
