var countOdds = function(low, high) {
    let count = 0
    
    for(let i=low; i<=high; i++) {
        if(i % 2 !== 0) {
            count++
        }
    }
    
    return count
};
console.log(countOdds(3,7));


nums = [1,2,3,1]


var containsDuplicate = function(nums) {
    for(let i =0;i<nums.length-1;i++){
        for(let j=i+1;j<nums.length;j++){
            if (nums[i]==nums[j]){
                return true;
            }
            else {
                return false
            }
        }
    }
    
};