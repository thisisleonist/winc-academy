# W5 D1 React deel 5
ES6 / ES2015
const en let i.p.v. var

```
import React from "react"
import ReactDOM from "react-dom"
ReactDOM.render()
```

```
<html>
    <head>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div id="root"></div>
        <script src="index.pack.js"></script>
    </body>
</html>
```

root is waar React alles in renderd
index.pack.js is het script bestand dat React genereerd

import React from "react"
import ReactDOM from "react-dom"

 JSX -> <h1>
ReactDOM.render(<h1>Hello world!</h1>, document.getElementById("root"))

Render parameter 1 moet één element zijn, dus in dit voorbeeld gebruik je een <div>: 

```
import React from "react"
import ReactDOM from "react-dom"

// JSX
ReactDOM.render(<div><h1>Hello world!</h1><p>This is a paragraph</p></div>, document.getElementById("root"))
```

`document.querySelector("#root")`

