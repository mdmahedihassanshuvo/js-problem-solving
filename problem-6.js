function factorialReverse(number){
    let sum = 1;
    for(var i = number; i >= 1 ;  i--){
        // console.log(i);
        let element = i;
        sum *= element;
    }
    return sum;
}

var reverseFact = factorialReverse(6);
console.log(reverseFact);