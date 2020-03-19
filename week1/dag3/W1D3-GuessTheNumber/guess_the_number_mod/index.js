const maxAsks = 3;
const maxGuesses = 5;

let min = 0;
let max = 25;

let initGame = false;

const generateRandomNumber = function(){
    return Math.floor(Math.random() * (max - min)) + min;
}

const askUserInput = function(question, defaultPrompt=''){
    return prompt(question, defaultPrompt);
}

const validUserName = function(input){
    return (input!=='' && input!==null) ? true : false;
}

const validNumber = function(input){
    return (input >= 0 && input!=='' && input!==null) ? true : false;
}

const guessTheNumber = function(){
    let asked = 0;
    while(asked!==maxAsks){
        asked++;
        input = askUserInput('Enter a number between '+min+' and '+max+' to guess:',0);
        if(validNumber(input)) return parseInt(input);
    }
    return max;
}

// dezelfde functie als guessTheNumber() hierboven
// while loop oogt schoner dan recursive functie

// check op undefined of null kan eventueel weggelaten
//   worden, als de call in runGame() met argument is

// idee bij de while() loops bij user input is om de
//   speler de kans te geven gegevens juist in te voeren
//   zonder negatieve feedback te geven en bij meer dan
//   drie pogingen zelf een standaardwaarde te gebruiken
// dit geldt voor naam, laagst en hoogst gestal

// ook bij het bewust verkeerd invoeren van de twee
//   getallen draai ik de getallen zelf om, zodat het
//   spel niet onderbroken hoeft te worden door de
//   gebruiker lastig te vallen met de gegevens input

// const guessTheNumber = function(asked){
//     if(asked===undefined || asked===null) asked = 0;
//     if(asked===maxAsks) return max;
//     input = askUserInput('Enter a number between '+min+' and '+max+' to guess:',0);
//     if(validNumber(input)) return parseInt(input);
//     asked++;
//     guessTheNumber(asked);
// }

const askLowNumber = function(){
    let asked = 0;
    while(asked!==maxAsks){
        asked++;
        input = askUserInput('Enter the lowest number in the range of numbers to guess between:',min);
        if(validNumber(input)) return parseInt(input);
    }
    return min;
}

const askHighNumber = function(){
    let asked = 0;
    while(asked!==maxAsks){
        asked++;
        input = askUserInput('Enter the highest number in the range of numbers to guess between:',max);
        if(validNumber(input)) return parseInt(input);
    }
    return max;
}

const askUserName = function(){
    let asked = 0;
    const defaultName = 'Mystery';
    while(asked!==maxAsks){
        asked++;
        input = askUserInput('Welcome! What is your name?');
        if(validUserName(input)) return input;
    }
    alert('You are so mysterious! I will call you \''+defaultName+'\'.');
    return defaultName;
}

const verifyGuess = function(number, random){
    return (number === random) ? true : false;
}

const guessesLeftMsg = function(maxGuesses, guessed){
    if(maxGuesses - guessed === 1){
        return 'You have 1 guess left.';
    }
    return 'You have '+ (maxGuesses - guessed) +' guesses left.';
}

const runGame = function(guessed){

    if(!initGame){
        //changeColors(true);
        userName = askUserName();
        alert('Hello '+userName+'. Let\'s play: Guess the number!');
        min = askLowNumber();
        max = askHighNumber();
        randomNumber = generateRandomNumber();
        console.log(randomNumber);
        if(max < min){
            value = min;
            min = max;
            max = value;
        }
        guessed = 0;
        initGame = true;
    }

    while(guessed!==maxGuesses){
        guessed++;
        theNumber = guessTheNumber();

        if(verifyGuess(theNumber,randomNumber)){
            alert('Congratulations! You guessed right! The correct number is '+randomNumber+'.');
            alert('Goodbye '+userName+'. See you next time!');
            initGame = false;
            return;
        }

        if(guessed===maxGuesses){
            alert('Sorry, your guess is incorrect '+userName+'. You have no more guesses!\n\nThe correct number is '+randomNumber+'. This game is over :(','');
            alert('Goodbye '+userName+'. See you next time!');
            initGame = false;
            return;
        }

        tryAgain = confirm('Sorry, your guess is incorrect '+userName+'. '+guessesLeftMsg(maxGuesses, guessed)+' Do you want to try again?','');
        if(tryAgain){
            runGame(guessed);
            return;
        }

        alert('Fair enough! Goodbye '+userName+'. See you next time!');
        initGame = false;
        return;

    }

}

document.getElementById('runGame').onclick = function(){
    runGame();
};

/*
const changeColor = function(theNumber,theAnswer){
    if(theNumber < 1 || theNumber > 10){
        return false;
    }
    let theElem = document.getElementById('n'+theNumber);
    if(theAnswer===true){
        theElem.className.baseVal = 'show';
    }else if(theAnswer===false){
        theElem.className.baseVal = 'hide';
    }else{
        theElem.className.baseVal = '';
    }
    return true;
}

const changeColors = function(theAnswer){
    for (let theNumber = 1; theNumber <= 10; theNumber++) {
        changeColor(theNumber,theAnswer);
    }
    return true;
}
*/

// EOF
