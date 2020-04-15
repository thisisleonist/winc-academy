# W5 D2 React deel 51, 52
**Hooks!**

`useState()`

Oefening 1:

```
import React, { useState } from "react"

const App = () => {
    const [ answer ] = useState("No");
    return (
        <div>
           <h1>Is state important to know? {answer}</h1>
        </div>
    )
}
```
