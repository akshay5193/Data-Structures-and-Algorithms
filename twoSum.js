function twoSum(nums, target) {
    const map = {};

    for (let i = 0; i < nums.length; i++) {

        const complement = target - nums[i];

        if (complement in map) {
            return [map[complement], i];
        }

        map[nums[i]] = i;
    }

    return null;

}

console.log(twoSum([1, 2, 3, 4, 5], 6));