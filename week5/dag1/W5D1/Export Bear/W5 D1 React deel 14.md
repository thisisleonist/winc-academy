# W5 D1 React deel 14
```
import React from "react"

function Header() {
    return (
        <header className="navbar">This is the header</header>
    )
}

export default Header
```

_className gebruiken ipv class_
_Dit is JSX en niet HTML_

className is een JS property van een object
Net zoals classList() een functie is binnen JS om classes te manipuleren, zodals met .add(), .remove() en .toggle()
Uiteindelijk komt er in HTML te staan:

`<header class="navbar">This is the header</header>`
