# W5 D1 React deel 7

```
import React from "react"
import ReactDOM from "react-dom"

ReactDOM.render(<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>,document.querySelector("#root"))
```

**Capital CamelCase**

```
function MyApp() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}
```

```
ReactDOM.render(
  <MyApp />,
  document.getElementById("root")
)
```

