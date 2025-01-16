var containsDuplicate = function (nums) {
    let dup = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (dup.has(nums[i])) {
            return true;
        }
        dup.add(nums[i]);
    }
    return false;
};

let nums=[1,3,2,5]
console.log(containsDuplicate(nums))