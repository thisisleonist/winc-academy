# W5 D1 React deel 12

CSS

```
body { }

ul{
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
}

li{
    padding-right: 1rem;
}

li:last-child{
    padding-right: 0;
}
```

index.js

```
import React from "react"
import ReactDOM from "react-dom"
import App from "./comps/App"

ReactDOM.render(<App />,document.querySelector("#root"));
```

App.js

```
import React from "react"

import NavBar from "./NavBar"
import MainContent from "./MainContent"
import Footer from "./Footer"

const App = () => {
    return (
        <div>
            <NavBar />
            <MainContent />
            <Footer />
        </div>
    )
}

export default App
```

NavBar.js

```
import React from "react"

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>Menu item 1</li>
                <li>Menu item 2</li>
                <li>Menu item 3</li>
            </ul>
        </nav>
    )
} 

export default NavBar
```

MainContent.js

```
import React from "react"

const MainContent = () => {
    return (
        <main>
            <p>This is the main content</p>
        </main>
    )
} 

export default MainContent
```

Footer.js

```
import React from "react"

const Footer = () => {
    return (
        <footer>
            <p>This is the footer content</p>
        </footer>
    )
} 

export default Footer
```






