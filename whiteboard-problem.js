// create a function named dynamicDivider with divisor as its arguement
// there must be 1 parameter as a number
// will return a new function
// returned function will accept the "divisor" divided by the "num" in retyrbed

function dynamicDivider(divisor) {
    return function(num) {
        return num / divisor;
    };
}

let halvedbyTwo = dynamicDivider(2); //returns a function
console.log(halvedbyTwo(3)); // returns 6
halvedbyTwo(18); // returns 9

let halvedbyThree = dynamicDivider(3); // returns a function
halvedbyThree(12); // returns 4
halvedbyThree(18);