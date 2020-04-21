const isGameOver = game => {
if (wordGuessed(game.chosenWord, game.guessedLetters)) {
return true
}
if (
getWrongLetters(game.chosenWord, game.guessedLetters).length >
game.maxGuesses
) {
return true
}
return false
}

getWrongLetters(game.chosenWord, game.guessedLetters).length >=
