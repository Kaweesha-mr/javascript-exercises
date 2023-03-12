const convertToCelsius = function(value) {

  if(value == 32 || value == 0){

    return (((value - 32) * 5)/9);
  }
  else{

    return parseFloat(((value - 32) * 5)/9).toFixed(1);
  }
  
};

const convertToFahrenheit = function(value){

  if(value == 32 || value == 0){
    return (((value * 9)/5)+32);
  }
  else{
    return parseFloat(((value * 9)/5)+32).toFixed(1);
  }


  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
