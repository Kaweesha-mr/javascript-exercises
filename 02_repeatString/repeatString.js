const repeatString = function(text,number) {

    if(text == ''){
        
        return '';
    }

    if(number<0){

        return "ERROR";
    }
    else if(number == 0){

        return "";
    }
    else if(number>0){

        return text.repeat(number);
    }
};

// Do not edit below this line
module.exports = repeatString;
