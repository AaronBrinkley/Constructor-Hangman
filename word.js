var letterFileWord = require('./letter.js');

var gameFileWord = require('./game.js');


 

var underscoreArray = []




module.exports = function (thisWord) {
    this.thisWord = thisWord
    this.underScoreThis = function (aNewWord) { 
        for (var iund = 0; iund < aNewWord.length; iund++) {
   underscoreArray.join('')
   //Might have to change .push
   underscoreArray.push('_');
   
    }

    console.log(underscoreArray)
    }


    this.removeWord = function () { 
        for (var iund = 0; iund < underscoreArray.length; iund++) {
   underscoreArray.pop();
  
   
   
    }

    //console.log(underscoreArray)
    }
}

module.exports.underscoreArray = underscoreArray







