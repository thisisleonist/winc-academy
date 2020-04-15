# W5 D1 React deel 17
_fontSize en andere CSS properties zijn default in px_

Inline styles (no go) in een apart const object plaatsen en dan bij het JSX gedeelte in `{}` en de naam van de const tussen de `{}`:

_CSS font-size wordt fontSize en background-color wordt backgroundColor_
Beide zijn JS properties van het element `h1` in dit geval

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
  
  const styles = {
    color: "#FF8C00", 
    backgroundColor: "#FF2D00",
    fontSize: 200
  }
  
  return (
    <h1 style={styles}>Good {timeOfDay}!</h1>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))

```

Omdat styles een object is, kun je er ook properties aan toevoegen via reguliere JS:

```
import React from "react"
import ReactDOM from "react-dom"

function App() {
  const date = new Date(2018, 6, 31, 15)
  const hours = date.getHours()
  let timeOfDay
  const styles = {
    fontSize: 30
  }
  
  if (hours < 12) {
    timeOfDay = "morning"
    styles.color = "#04756F"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
    styles.color = "#8914A3"
  } else {
    timeOfDay = "night"
    styles.color = "#D90000"
  }
  
  return (
    <h1 style={styles}>Good {timeOfDay}!</h1>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
```
