const sumAll = function(number1,number2) {

    let final=0;

    if(number1<0){


        return "ERROR";
    }
    else if( number2 < 0){

        return "ERROR"
    }
    else if(number2 > number1 && typeof(number1)== "number" && typeof(number2) == "number"){

        for(let i = number1; i <= number2; i++){
            final += i ;
        }
    }
    else if(number1 > number2 && typeof(number1)== "number" && typeof(number2) == "number"){
        for(let i = number2; i <= number1; i++){
            final += i ;
        }

    }
    else{

        return "ERROR"
    }


    return final;
};

// Do not edit below this line
module.exports = sumAll;
