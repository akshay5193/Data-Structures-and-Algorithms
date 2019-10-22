function isPalindrome(s) {
    let strLength = s.length;

    if (s.length === 1 || s.length === 0) {
        return true;
    }

    for (let left = 0, right = s.length - 1; left < right; left++ , right--) {
        if (s[left] === s[right]) {
            console.log(s[left], ' = ', s[right]);
            continue;
        }
        else {
            console.log('not good...');
            return false;
        }
    }
    return true;
};


console.log(isPalindrome('race a car'))