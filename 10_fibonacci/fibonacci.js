const fibonacci = function(number) {

    number = parseInt(number);

    if(number<0){

        return "OOPS";
    }


    return  Math.round((((((1+2.23606)/2)**number) - ((-(1+2.23606)/2)**(-number)))/ (2.23606)));

};

// Do not edit below this line
module.exports = fibonacci;
