let array = [15, 20, 45, 35, 54, 68, 87, 82];

function findOddNum(number1){
    let oddNumber = [];
    for(var i = 0; i < number1.length; i++){
        // console.log(number1[i]);
        let element = number1[i];
        if(element % 2 !== 0){
            oddNumber.push(element);
        }
    }
    return oddNumber;
}

var oddNum = findOddNum(array);
// console.log(oddNum);


function oddSum (number){
    let sum = 0;
    for(var j = 0; j < number.length; j++){
        // console.log(number[j]);
        var element = number[j];
        sum += element;
    }
    return sum;
}

var total = oddSum (oddNum);
console.log(total);