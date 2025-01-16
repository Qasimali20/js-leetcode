var getConcatenation = function (nums) {
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        arr.push(nums[i]);
    }
    for (let i = 0; i < nums.length; i++) {
        arr.push(nums[i]);
    }
    return arr;
};

nums=[1,3,2,5]
console.log(getConcatenation(nums))