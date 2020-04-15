# W5 D1 React deel 27
Oefenen

```
import React from "react"
import ReactDOM from "react-dom"

// #1
class App extends React.Component {
   render() {
        return (
            <div>
                <Header username="Leon" />
                <Greeting />
            </div>
        )
    }
}

// #2
class Header extends React.Component {    
    render() {
        return (
            <header>
                <p>Welcome, {this.props.username}!</p>
            </header>
        )
    }
}

// #3
class Greeting extends React.Component {
    render(){
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
            <h1>Good {timeOfDay} to you, sir or madam!</h1>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"))
```

Versie 2:

```
import React from "react"
import ReactDOM from "react-dom"

// #1
class App extends React.Component {
    
    render() {
        return (
            <div>
                <Header username="Leon" />
                <Greeting />
            </div>
        )
    }
}

// #2
class Header extends React.Component {    
    render() {
        return (
            <header>
                <h1>Welcome, {this.props.username}!</h1>
            </header>
        )
    }
}

// #3
class Greeting extends React.Component {
    
    render(){
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
            <p>Good {timeOfDay} to you!</p>
        )
    }

}

ReactDOM.render(<App />, document.getElementById("root"))
```

Oplossing:

`import React, {Component} from "react"`


