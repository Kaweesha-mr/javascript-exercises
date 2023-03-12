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

  for(let i =0; i < array.length; i+=1){

    sum = sum + array[i];
  }
  return parseInt(sum);
  
};

const multiply = function(array) {

  let mul = 1;
  for(let i =0; i < array.length; i+=1){

    mul = mul * array[i];
  }
  return parseInt(mul);

};

const power = function(N1,N2) {

  return N1 ** N2;
	
};

const factorial = function(number) {

  let fac =1;
  for(let i =1; i< number; i++){


    if(number == 1){

      return 1;
    }

    fac = fac * (i+1);

  }

  return fac;
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
