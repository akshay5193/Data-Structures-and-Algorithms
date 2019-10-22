function facotrialRecursive(number) {
    if (number === 2) {
        return 2;
    }

    return number * facotrialRecursive(number - 1);
}

function factorialIterative(number) {
    let facotrial = 1;
    for (let i = number; i > 1; i--) {
        facotrial *= i;
    }
    return facotrial;
}

console.log(factorialIterative(3));
console.log(facotrialRecursive(5));