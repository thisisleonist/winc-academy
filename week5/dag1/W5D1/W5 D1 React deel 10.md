# W5 D1 React deel 10
```
import React from "react"
import ReactDOM from "react-dom"

const MyInfo = () => {
  return (
    <div>
      <h1>Leon Rijsdam</h1>
      <p>Your new Junior Frontend Developer, available from May 1! Toolset: HTML, CSS, JavaScript, React, Redux and Jest.</p>
      <p>Vacation spots I would like to visit:</p>
      <ul>
        <li>Miami, Florida</li>
        <li>Ibiza</li>
        <li>Thailand</li>
      </ul>
    </div>
  )
}

ReactDOM.render(<MyInfo />,document.querySelector("#root"));
```

_Één React component per bestand!_

`MyInfo.js` in dezelfde map als` index.html`, `index,.js` en `style.css`

MyInfo.js:

```
import React from "react"

function MyInfo() {
  return (
    <div>
      <h1>Bob Ziroll</h1>
      <p>This is a paragraph about me...</p>
      <ul>
        <li>Thailand</li>
        <li>Japan</li>
        <li>Nordic Countries</li>
      </ul>
    </div>
  )
}

export default MyInfo
```

```
import React from "react"
import ReactDOM from "react-dom"

import MyInfo from "./MyInfo"

const MyInfo = () => {
  return (
    <div>
      <h1>Leon Rijsdam</h1>
      <p>Your new Junior Frontend Developer, available from May 1! Toolset: HTML, CSS, JavaScript, React, Redux and Jest.</p>
      <p>Vacation spots I would like to visit:</p>
      <ul>
        <li>Miami, Florida</li>
        <li>Ibiza</li>
        <li>Thailand</li>
      </ul>
    </div>
  )
}

ReactDOM.render(<MyInfo />,document.querySelector("#root"));
```

Folder "components"

```
import React from "react"
import ReactDOM from "react-dom"

import MyInfo from "./components/MyInfo"

const MyInfo = () => {
  return (
    <div>
      <h1>Leon Rijsdam</h1>
      <p>Your new Junior Frontend Developer, available from May 1! Toolset: HTML, CSS, JavaScript, React, Redux and Jest.</p>
      <p>Vacation spots I would like to visit:</p>
      <ul>
        <li>Miami, Florida</li>
        <li>Ibiza</li>
        <li>Thailand</li>
      </ul>
    </div>
  )
}

ReactDOM.render(<MyInfo />,document.querySelector("#root"));
```

