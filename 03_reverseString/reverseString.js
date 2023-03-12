const reverseString = function(str) {

    var splitString = str.split("");//spliting the string to array
    var reverseArray  = splitString.reverse(); // reversing the array elemensts
    var join = reverseArray.join("");//joing the array elements together

    return join;
};

// Do not edit below this line
module.exports = reverseString;
