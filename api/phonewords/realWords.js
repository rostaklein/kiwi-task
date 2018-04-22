const fs = require('fs');
 
const wordListPath = require('word-list');
const wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n');

function wordIsReal(word){
    return wordArray.indexOf(word) > 0;
}

module.exports = wordIsReal;