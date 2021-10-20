//time complexity - o(n^2) space complexity - o(n)
function threeNumberSum(array: number[], targetSum: number) {
  array.sort((a, b) => a - b);
  let newArray: number[][] = [];
  let currentSum = 0;
  let left = 0;
  let right = array.length - 1;

  for (let i = 0; i < array.length - 2; i++) {
    left = i + 1;
    while (left < right) {
      currentSum = array[i] + array[left] + array[right];
      if (currentSum == targetSum) {
        newArray.push([array[i], array[left], array[right]]);
        left += 1;
        right -= 1;
      } else if (currentSum < targetSum) {
        left++;
      } else if (currentSum > targetSum) {
        right--;
      }
    }
  }
  return newArray;
}

export default threeNumberSum;
