function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++){
    for (let j = i + 1; j < array.length; j++){
      if (i+=j !== target){
        return true;
      } else {
        return false;
      }
    }
  }
}

/* 
  Write the Big O TIME COMPLEXITY of your function here
  O(n^2)
*/

/* 
  Add your PSEUDOCODE here:
  hasTargetSum(array, target)
  if iterate and get a,
  iterate the rest and get b,
  add a + b,
  if (a + b) = target,
    return true
    else
      return false 
*/

/*
  Add written EXPLANATION of your solution here
  -the function gets two arguments: an array of integers and a target integer
  -the function adds up pairs of numbers in the array
  -the function compares the pair-sums to the target integer
  -if any pair-sum = target integer, function returns true
  -else return false (?)
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 9, 12, 21, 6, 10], 9));

  console.log("");
  
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([5, 20, 13, 5, 7, 11], 18));

  console.log("");

  // provided tests
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
