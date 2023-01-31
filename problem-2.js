function findLeapYear(year){
    if((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)){
        return true;
    }
    else{
        return false;
    }
}


const leapYear = findLeapYear(2004);
console.log("this year is a leap year:", leapYear);