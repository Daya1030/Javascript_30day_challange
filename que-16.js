/*QUE-16) ----> 

Create a function which accepts an array nums and a number target as arguements. This function returns 
 indices of that two elements  which added up to target
*/

const twoSum = function (nums, target) {
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        let sum = nums[i] + nums[j];
        if (target === sum) {
          ans.push(i);
          ans.push(j);
          return ans;
        }
      }
    }
  };
  
  const arr = [2, 7, 11, 15];
  console.log(twoSum(arr, 9));
  // twoSum(arr, 9);
  
  const arr1 = [3, 2, 4];
  console.log(twoSum(arr1, 6));
  
  const arr2 = [3, 3, 14];
  console.log(twoSum(arr2, 6));