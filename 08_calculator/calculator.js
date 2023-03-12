const add = function(num1,num2) {

  return num1 + num2;
	
};

const subtract = function(num1,num2) {

  return num1 - num2;
	
};

const sum = function(array) {

  let sum =0;

  if(array.length == 0){

    return 0;
  }

  for(let i =0; i < array.length; i++){

    sum = sum + array;
  }
  return parseInt(sum);
  
};

const multiply = function(number1,number2) {

  return number1 * number2;

};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
