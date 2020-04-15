# W5 D2 React deel 49.3
Oefening 7:

`this.chooseRandomImage = this.chooseRandomImage.bind(this)`

```
    chooseRandomImage(event){
        const imageCount = this.state.allMemeImgs.length
        const randomImage = Math.round(Math.random() * imageCount)
        this.setState({
            randomImg: this.state.allMemeImgs[randomImage].url
        })
        event.preventDefault()
    }
```

`<form className="meme-form" onSubmit={this.chooseRandomImage}>`

Opmerking: auteur gebruikt `Math.floor` i.p.v. `Math.round`. Floor rond af een geheel getal én naar beneden (de floor). Round rond af naar boven of naar beneden, waarbij .5 en hoger naar boven wordt afgerond. Math.floor zal daarom nooit het laatste item in de array kiezen, tenzij random exact op 100 uitkomt in deze oefening.
