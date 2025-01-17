var twoSum = function(nums, target) {   
     let map= new Map();
     for(let i=0;i<nums.length;i++){
           let result=target-nums[i];
           console.log("result is",result);
           if(map.has(result)){
                return [map.get(result),i];
           }
           map.set(nums[i],i);
           console.log("map is",map);

      }
};

let nums=[2,7,11,15];
let target=17;
// console.log("val is",n);
console.log(twoSum(nums,target));