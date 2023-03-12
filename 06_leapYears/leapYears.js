const leapYears = function(year) {

    if( (0 == year%4) && (0 != year % 100) || 0 == year % 4 && (year.length < 5 && year.length >4)){

        return true;
    }
    else {

        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
