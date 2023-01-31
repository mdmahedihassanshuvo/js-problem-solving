let array = [2023, 2024, 2025, 2028, 2030];

function findLeapYear(arr){
    let leapYear = [];
    for(var i = 0; i < arr.length; i++){
        // console.log(i, arr[i]);
        let element = arr[i];
        if((element % 4 === 0) && (element % 100 !== 0) || (element % 400 === 0)){
            leapYear.push(element);
        }
    }
    return leapYear;
}


var leapYear = findLeapYear(array);
console.log(leapYear);