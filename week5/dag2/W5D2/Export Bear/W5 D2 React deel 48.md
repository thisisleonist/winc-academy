# W5 D2 React deel 48
Scheiden van business logic en display logic

`FormContainer.js`

```
import React, {Component} from "react"
import FormComponent from "./FormComponent"

class Form extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            isVegan: false,
            isKosher: false,
            isLactoseFree: false
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? 
            this.setState({
                [name]: checked
            })
        :
        this.setState({
            [name]: value
        }) 
    }
    
    render() {
        return(
            <FormComponent
                handleChange={this.handleChange}
                data={this.state}
            />
        )
    }
}

export default Form
```

`FormComponent.js`

```
import React from "react"

function FormComponent(props) {
    return (
        <main>
            <form>
                <input 
                    name="firstName" 
                    value={props.data.firstName} 
                    onChange={props.handleChange} 
                    placeholder="First Name" 
                />
                <br />
                
                <input 
                    name="lastName" 
                    value={props.data.lastName}
                    onChange={props.handleChange} 
                    placeholder="Last Name" 
                />
                <br />
                
                <input 
                    name="age" 
                    value={props.data.age}
                    onChange={props.handleChange} 
                    placeholder="Age" 
                />
                <br />
                
                <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="male"
                        checked={props.data.gender === "male"}
                        onChange={props.handleChange}
                    /> Male
                </label>
                
                <br />
                
                <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="female"
                        checked={props.data.gender === "female"}
                        onChange={props.handleChange}
                    /> Female
                </label>
                
                <br />
                
                <select 
                    value={props.data.destination} 
                    name="destination" 
                    onChange={props.handleChange}
                >
                    <option value="">-- Please Choose a destination --</option>
                    <option value="germany">Germany</option>
                    <option value="norway">Norway</option>
                    <option value="north pole">North Pole</option>
                    <option value="south pole">South Pole</option>
                </select>
                
                <br />
                
                <label>
                    <input 
                        type="checkbox"
                        name="isVegan"
                        onChange={props.handleChange}
                        checked={props.data.isVegan}
                    /> Vegan?
                </label>
                <br />
                
                <label>
                    <input 
                        type="checkbox"
                        name="isKosher"
                        onChange={props.handleChange}
                        checked={props.data.isKosher}
                    /> Kosher?
                </label>
                <br />
                
                <label>
                    <input 
                        type="checkbox"
                        name="isLactoseFree"
                        onChange={props.handleChange}
                        checked={props.data.isLactoseFree}
                    /> Lactose Free?
                </label>
                <br />
                
                <button>Submit</button>
            </form>
            <hr />
            <h2>Entered information:</h2>
            <p>Your name: {props.data.firstName} {props.data.lastName}</p>
            <p>Your age: {props.data.age}</p>
            <p>Your gender: {props.data.gender}</p>
            <p>Your destination: {props.data.destination}</p>
            <p>Your dietary restrictions:</p>
            
            <p>Vegan: {props.data.isVegan ? "Yes" : "No"}</p>
            <p>Kosher: {props.data.isKosher ? "Yes" : "No"}</p>
            <p>Lactose Free: {props.data.isLactoseFree ? "Yes" : "No"}</p>
            
        </main>
    )
}

export default FormComponent
```

`App.js`

Info over smart en dumb components: https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0

```
import React, {Component} from "react"
import Form from "./FormContainer"

function App() {
    return (
        <Form />
    )
}

export default App
```


