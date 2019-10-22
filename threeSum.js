function threeSum(nums) {
    var result = [];
    if (nums.length < 3) {
        return result;
    }
    nums = nums.sort(function (a, b) {
        return a - b;
    });
    for (var i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) {
            return result;
        }
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        for (var low = i + 1, high = nums.length - 1; low < high;) {
            if (nums[i] + nums[low] + nums[high] === 0) {
                result.push([nums[i], nums[low], nums[high]]);
                low++;
                high--;
                while (low < high && nums[low] == nums[low - 1]) {
                    low++;
                }
                while (low < high && nums[high] == nums[high + 1]) {
                    high--;
                }
            } else if (nums[i] + nums[low] + nums[high] > 0) {
                high--;
            } else {
                low++;
            }
        }
    }
    return result;
}