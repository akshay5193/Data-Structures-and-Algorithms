function reverseInteger(x) {
    const max = Math.pow(2, 31);
    let reverse = 0;
    while (x !== 0) {
        reverse = reverse * 10 + x % 10;
        if (reverse > max || reverse < -max) return 0;
        x = (x / 10) << 0;
    }

    return reverse;
}

console.log(reverseInteger(123));