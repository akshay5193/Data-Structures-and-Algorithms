function fibonacciRecursive(num) {
    if (num < 2) {
        return num;
    }
    return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2);
}

console.log(fibonacciRecursive(8));