var wordFileLetter = require('./word.js');

var gameFileLetter = require('./game.js')

var under = wordFileLetter.underscoreArray

var ans = gameFileLetter.answerVar



module.exports = function(currentWord) {

	this.currentWord = currentWord
	//this.answerLetter = answerLetter

	//console.log(this.answerLetter)

	this.logLetter = function(letterAnswer, aWord) {
		under[aWord.indexOf(letterAnswer)] = letterAnswer
		
	}
}