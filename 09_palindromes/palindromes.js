const palindromes = function (string) {

    string = string.toLowerCase()
    const array = string.split();

    const reverse = array.reverse()

    for(let i=0; i < array.length; i++){

        if(array[i] !== reverse[i]){

            return false;
        }
    }
    return true;

};

// Do not edit below this line
module.exports = palindromes;
