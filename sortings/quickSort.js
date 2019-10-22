function quickSort(array) {
    if (array.length < 2) {
        return array;
    }

    let pivot = array[0];
    let lesser = [];
    let greater = [];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
            lesser.push(array[i]);
        } else {
            greater.push(array[i]);
        }
    }

    return quickSort(lesser).concat(pivot, quickSort(greater));
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log(quickSort(numbers));
