# W5 D2 React deel 42
Oefening:

```
class App extends Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: true
        }
        this.logInOutUser = this.logInOutUser.bind(this)
    }
    
    logInOutUser() {
        this.setState(prevState => {
            if(prevState.isLoggedIn===true){
                return {isLoggedIn: false}
            }
            return {isLoggedIn: true}
        })
    }
    
    render(){
        console.log(this.state)
        return (
            <div>
                {
                    this.state.isLoggedIn ?
                    <p>Logged In </p> :
                    <p>Logged Out </p>
                }
                {
                    this.state.isLoggedIn ?
                    <button onClick={this.logInOutUser}>LogOut</button> :
                    <button onClick={this.logInOutUser}>LogIn</button>
                }
            </div>
        )
    }

}

export default App
```

Oplossing:

```
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick() {
        this.setState(prevState => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    }
    
    render() {   
        let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
        let displayText = this.state.isLoggedIn ? "Logged in" : "Logged out"
        return (
            <div>
                <button onClick={this.handleClick}>{buttonText}</button>
                <h1>{displayText}</h1>
            </div>
        )
    }
}

export default App
```
