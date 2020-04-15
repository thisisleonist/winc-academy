# W5 D2 React deel 54
`useEffect` vervangt:

`componentDidMount`
`componentDidUpdate`
`componentWillUnmount`

Side effects?
	* Network request
	* Manual DOM manipulation
	* Event listeners or timeouts and intervals

Oefening 1:

`const [randomColor, setRandomColor] = useState("#000")`

```
function setColor() {
    setRandomColor(prevColor => randomcolor())
}
```

Oplossing:

```
    useEffect(() => {
        setColor(randomcolor())
    }, [count])
```

Eerste param is de anonymous function, waarin `setColor` direct aan te roepen is. Tweede param is een `array` van vars die gemonitord dienen te worden voor wijzigingen, om een _infinite loop_ te voorkomen en alleen te renderen wanneer er daadwerkelijk iets gewijzigd is.
In dit geval count van `const [count, setCount] = useState(0)` en niet  `const [color, setColor] = useState("")`, alhoewel die ook gewoon werkt! ;-)
_Geen var in de array, dus een lege array bekekent eenmaal en niet bij iedere wijziging_

