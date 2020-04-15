# W5 D1 React deel 16
```
import React from "react"
import ReactDOM from "react-dom"

function App() {
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay
  
  if (hours < 12) {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
  } else {
    timeOfDay = "night"
  }
  
  return (
    <h1>Good {timeOfDay}!</h1>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))

```

In return gedeelte switchen naar JS gaat via `{` en `}`
Binnen de `{}`, kun je bijvoorbeeld gebruik maken van `${}`, inclusief de backtick

