# W5 D1 React deel 13
CSS

```
body { }

ul{
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
}

span{
    padding-left: .5rem;
}

input:focus{
    outline: none;
}
```

index.js

```
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
ReactDOM.render(<App />,document.querySelector("#root"));
```

ListItem.js

```
import React from "react"

const ListItem = () => {
    return (
        <li>
            <label>
                <input type="checkbox" />
                <span>A checkbox listitem</span>
            </label>
        </li>
    )
} 

export default ListItem
```

App.js

```
import React from "react"

import ListItem from "./ListItem"

const App = () => {
    return (
        <ul>
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
        </ul>
    )
}

export default App
```
