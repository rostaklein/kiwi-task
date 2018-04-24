var keyboardKeys = require("../../constants/phoneKeyboard.json");

function t9(sequence, ret = []) {

    //check if the sequence is array
    if(!Array.isArray(sequence)){
        sequence = sequence.split("").map(num => Number(num))
    };
    //final return
    if (!sequence.length) return ret.sort();

    //find sub keys in the keyboard
    const
        key = keyboardKeys.find(key => key.main==sequence[0]),
        letters = [];

    if(key && key.subs){
        letters.push(...key.subs);
    }

    //first iteration
    if (!ret.length) return t9(sequence.slice(1), letters);

    //some already present, next return
    const nextRet = letters.reduce((acc, curr) =>
      acc.concat(ret.map(word => word.concat(curr)))
    , []);
  
    return t9(sequence.slice(1), nextRet);
  }

module.exports = t9;