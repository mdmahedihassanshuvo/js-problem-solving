let array = [25, 65, 12, 59, 56, 34, 26, 75];

function findEvenNum (arr){
    const evenNumber = [];
    for(var i = 0 ; i < arr.length ; i++){
        // console.log(arr[i]);
        const element = arr[i];
        if(element % 2 === 0){
            evenNumber.push(element);
            // console.log(evenNumber);
        }
    }
    return evenNumber;
}

const evenNumber = findEvenNum (array);
// console.log(evenNumber);


function evenNumberSum(number){
    let sum = 0;
    for(var j = 0; j < number.length; j++){
        // console.log(j)
        // console.log(number[j]);
        sum += number[j];
        // console.log(sum)
    }
    return sum;
}

var total = evenNumberSum(evenNumber);
console.log(total);