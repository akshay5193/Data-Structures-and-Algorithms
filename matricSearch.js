let array =
    [[10, 20, 30, 40],
    [40, 50, 60, 70],
    [20, 20, 35, 45],
    [10, 20, 50, 60]];

let target =
    [[20, 35],
    [20, 50]];



function matrixSearch(array, target) {
    let numberOfSubArrays = array.length;
    let numberOfTargetArrays = target.length;
    let lengthOfTarget = target[0].length;

    // let subarrayIterator = 0;
    // let subtargetIterator = 0;
    let counter = 0;

    for (let subarray = 0; subarray < numberOfSubArrays; subarray++) {

        for (let subtarget = 0; subtarget < numberOfTargetArrays; subtarget++) {

            let subarrayIterator = 0;
            // for (let subarrayIterator = 0; subarrayIterator < subarray.length; subarrayIterator++) {

            for (let subtargetIterator = 0; subtargetIterator < subtarget.length; subtargetIterator++) {

                if (subarray[subarrayIterator] !== subtarget[subtargetIterator]) {
                    subtargetIterator = 0;
                    subarrayIterator++;
                }
                else if (subarray[subarrayIterator] === subtarget[subtargetIterator]) {
                    counter += 1;
                    subarrayIterator++;
                    continue;
                    if (counter === lengthOfTarget && subtarget !== numberOfTargetArrays - 1) {
                        // move to the next target
                    }
                }
            }
            // }
        }
    }
}