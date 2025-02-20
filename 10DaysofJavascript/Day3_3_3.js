function getSecondLargest(nums) {
    let num1 = nums[0];
    let num2 = nums[0];

    for (let x = 1; x < nums.length; x++) {
        if (nums[x] > num1) {
            num2 = num1;
            num1 = nums[x];
        } else if (nums[x] > num2 && nums[x] !== num1) {
            num2 = nums[x];
        }
    }
    return num2;
}

