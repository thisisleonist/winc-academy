const wordGuessed = (word, guessedLetters) => {
word = word.split('')
// remove all letters from word that are already guessed
// We can do this with a for loop to.
let remaining = word.filter(
letter =>
// If the letter is guessed return false (we want to remove that then)
!guessedLetters.includes(letter)
)
// If we have letters left the word is not yet guessed
return remaining.length === 0
}

Dit: guessedLetters.includes(letter)
moet zijn: !guessedLetters.includes(letter)

en: let remaining
kan worden: const remaining
