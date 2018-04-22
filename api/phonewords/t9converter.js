var keyboardKeys = require("../../constants/phoneKeyboard.json");

function t9(input, ret = []) {

    //final return
    if (!input.length) return ret.sort();

    //find sub keys in the keyboard
    const
        key = keyboardKeys.find(key => key.main==input[0]),
        letters = [];

    if(key){
        letters.push(...key.subs);
    }

    //first iteration
    if (!ret.length) return t9(input.slice(1), letters);

    //some already present, next return
    const nextRet = letters.reduce((acc, curr) =>
      acc.concat(ret.map(word => word.concat(curr)))
    , []);
  
    return t9(input.slice(1), nextRet);
  }

module.exports = t9;