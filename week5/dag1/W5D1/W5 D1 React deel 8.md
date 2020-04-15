# W5 D1 React deel 8
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
