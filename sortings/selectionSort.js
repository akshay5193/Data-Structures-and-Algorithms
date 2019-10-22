function selectionSort(array) {
    let length = array.length;

    for (let i = 0; i < array.length; i++) {
        // Set current index as the minimum
        let min = i;
        let temp = array[i];

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                // Update minimum if the current is less than what we had previously
                min = j;
            }
        }
        array[i] = array[min];
        array[min] = temp;
    }
    return array;
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
selectionSort(numbers);
console.log(numbers);