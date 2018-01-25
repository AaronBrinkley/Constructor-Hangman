var letterFileMain = require('./letter.js');

var wordFileMain = require('./word.js');

var inquirer = require('inquirer');

var answerVar

var underGame = wordFileMain.underscoreArray

var wordArray = ["ignoramus", "poland", "piedmont", "audio", "prince"]

var wordCounter = 0



var chosenWord = wordArray[wordCounter]

var newWord = new wordFileMain(chosenWord)

var newLetter = new letterFileMain(chosenWord, answerVar)


var initialGuess = 10


var keyletter = process.argv[2]




newWord.underScoreThis(chosenWord)



var makeYourPick = function() {

	inquirer.prompt([
	{
	type: "input",
    message: "Guess a letter",
    name: "word"
	}
	])

.then(answers => {

	answerVar = answers.word

	

	if (chosenWord.indexOf(answerVar) > -1) {
       
        console.log("CORRECT")
        console.log(initialGuess + " Guesses Remaining")
        newLetter.logLetter(answerVar, chosenWord)
        console.log(underGame.join(''))
        
       
  } else {
		initialGuess--
		console.log("INCORRECT")
		console.log(initialGuess + " Guesses Remaining")
		console.log(underGame.join(''))
		
	}


	if (underGame.join('') == chosenWord && wordCounter !== 5) {
		
		underGame.splice(0, underGame.length)
		wordCounter++
		chosenWord = wordArray[wordCounter]
		
		console.log("CORRECT")
		console.log(initialGuess + " Guesses Remaining")
		
		newWord.underScoreThis(chosenWord)
		

	} 

	if (answerVar.length > 1) {
		console.log("INVALID ENTRY")
	}

	

	if (initialGuess == 0 || wordCounter > 4) {
		//underGame.splice(0, underGame.length)
		startOver()
	} else {
		makeYourPick()
	}

    
});

}

var startOver = function() {

	inquirer.prompt([
	{
	type: "confirm",
    message: "Start Over?",
    name: "start"
	}
	])

.then(inquirerResponse => {

	initialGuess = 10

	wordCounter = 0

	if (inquirerResponse.start) {
		
		newWord.underScoreThis(chosenWord)


		makeYourPick()
      
    } else {
    	console.log("GAME OVER")
    }
    
    
});

}


makeYourPick()

module.exports.answerVar = answerVar


