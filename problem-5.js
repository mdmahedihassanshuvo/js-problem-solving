function factorialSum(number){
    let sum = 1;
    for(var i = 1 ; i <= number ; i++){
        var element = i;
        sum *= element;
    }
    return sum;
}

var num = 7
let factNumber = factorialSum(7);
console.log(factNumber);
// factorialSum(7);
