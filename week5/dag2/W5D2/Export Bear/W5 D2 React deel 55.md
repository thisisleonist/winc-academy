# W5 D2 React deel 55
useEffect voor listeners en setTimeout e.d.

Oefening 1:

`[count]` veranderd in `[]`

Oplossing (klopt!):

```
useEffect(() => {
    setInterval(() => {
        setCount(prevCount => prevCount + 1)
    }, 1000)
}, [])

useEffect(() => {
    setColor(randomcolor())
}, [count])
```

Let op: je kan meerdere `useEffect()` functies tegelijk gebruiken

```
useEffect(() => {
    const intervalId = setInterval(() => {
        setCount(prevCount => prevCount + 1)
    }, 1000)
    return () => clearInterval(intervalId)
}, [])
```

`setInterval` genereert een `ID` voor de interval
door een return te definieren als anon functie, kun je als de interval niet meer nodig is, de `setInterval` verwijderen met `clearInterval`
