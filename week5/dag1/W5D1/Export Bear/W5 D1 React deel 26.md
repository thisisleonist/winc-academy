# W5 D1 React deel 26
_functions to classes_

`extends React.Component` maakt dat `class App` een uitbreiding is op het standaard `React.Component` vanuit `React`.

Binnen een `class` kun je meerdere `methods` definieren, maar ook `consts`. Methods kun je aanroepen met `this`, zoals hieronder.

```
class App extends React.Component {
    
    yourMethodHere() {
        
    }
    
    render() {
        const style = this.yourMethodHere()
        return (
            <div>
                <h1>Code goes here</h1>
            </div>
        )
    }
}

export default App
```


