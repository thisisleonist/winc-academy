guessLetterHandler = event => {
const newGuessedLetters = [...this.state.guessedLetters];
newGuessedLetters.push(this.state.currentChosenLetter);
this.setState({
guessedLetters: newGuessedLetters,
currentChosenLetter: ""
});
event.preventDefault();
};

moet zijn:

    guessLetterHandler = event => {
    if (this.state.currentChosenLetter.length > 0) {
      const newGuessedLetters = [...this.state.guessedLetters];
      newGuessedLetters.push(this.state.currentChosenLetter);
      this.setState({
        guessedLetters: newGuessedLetters,
        currentChosenLetter: ""
      });
    }
    event.preventDefault();

};

de if ontbreekt
