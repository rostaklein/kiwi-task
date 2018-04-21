var express = require('express');
var router = express.Router();

router.get('/:numbers', (req, res) => {
    if(!req.params.numbers){
        return res.status(403).send({msg: "No numbers provided"});
    }else{
        const numbers = req.params.numbers.split("").map(number=>Number(number))
        if(numbers.some(num=>!Number.isInteger(num))){
            return res.status(403).send({msg: "Some of the characters are not numbers!"});
        }
        else if(numbers.some(num=>num==1)){
            return res.status(403).send({msg: "Number one does not have any value assigned"});
        }
        else{
            return res.status(200).send({
                numbers: numbers
            })
        }
    }
});

module.exports = router;