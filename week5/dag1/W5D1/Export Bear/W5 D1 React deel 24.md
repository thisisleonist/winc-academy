# W5 D1 React deel 24
Oefening

```
import React from "react"
import products from "./vschoolProducts"
import Product from "./Product"

function App() {
    const productList = products.map(product => <Product key={product.id} name={product.name} price={product.price} description={product.description} />)
    
    return (
        <div>
            {productList}            
        </div>
    )
}

export default App
```

```
import React from "react"

function Product(product) {
    return (
        <div className="container">
            <h1>{product.name}</h1>
            <span className="pricetag">${product.price}</span>
            <p>{product.description}</p>           
        </div>
    )
}

export default Product
```

```
import React from 'react'
import ReactDOM from 'react-dom'

import App from "./App"

ReactDOM.render(<App />, document.getElementById('root'))
```

```
const products = [
    {
        id: "1",
        name: "Pencil",
        price: 1,
        description: "Perfect for those who can't remember things! 5/5 Highly recommend."
    },
    {
        id: "2",
        name: "Housing",
        price: 0,
        description: "Housing provided for out-of-state students or those who can't commute"
    },
    {
        id: "3",
        name: "Computer Rental",
        price: 300,
        description: "Don't have a computer? No problem!"
    },
    {
        id: "4",
        name: "Coffee",
        price: 2,
        description: "Wake up!"
    },
    {
        id: "5",
        name: "Snacks",
        price: 0,
        description: "Free snacks!"
    },
    {
        id: "6",
        name: "Rubber Duckies",
        price: 3.50,
        description: "To help you solve your hardest coding problems."
    },
    {
        id: "7",
        name: "Fidget Spinner",
        price: 21.99,
        description: "Because we like to pretend we're in high school."
    },
    {
        id: "8",
        name: "Sticker Set",
        price: 14.99,
        description: "To prove to other devs you know a lot."
    }
]

export default products
```

Oplossing: in plaats van losse properties aan <Product /> door te geven, neem je het hele array item, dus product={item}

`productsData` is hier niet de naam van de array, maar een referentie naar `products`. Klopt! `item` bevat dus `product` uit `products` via `Array.map`.

De `default` in `export default products` maakt dat je in App.js de referentie kan noemen wat je maar wil. Dat zorgt ervoor dat het niet uitmaakt hoe de JSON data array genoemd wordt.

`Product(props)` bevat dus `product`.

App.js

```
import React from "react"
import Product from "./Product"
import productsData from "./vschoolProducts"

function App() {
    const productComponents = productsData.map(item => <Product key={item.id} product={item}/>)
    
    return (
        <div>
            {productComponents}
        </div>
    )
}

export default App
```

Product.js

```
import React from "react"

function Product(props) {
    return (
        <div>
            <h2>{props.product.name}</h2>
            <p>{props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })} - {props.product.description}</p>
        </div>
    )
}

export default Product
```

Sterker:

```
export default [
    {
        id: "1",
        name: "Pencil",
        price: 1,
        description: "Perfect for those who can't remember things! 5/5 Highly recommend."
    }...
```

is ook goed...
