//time complexity - o(n)
function smallestDifference(array1: number[], array2: number[]) {
  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);

  let result = "";

  let left = 0;
  let right = 0;
  let currentDifference = 0;
  let previousDifference = 1212212121212110;

  for (let i = 0; i < array1.length; i++) {
    if (array1[left] == array2[right]) {
      result = `[${array1[left]} , ${array2[right]}]: ${currentDifference}`;
      return result;
    } else if (array1[left] < array2[right]) {
      currentDifference = array2[right] - array1[left];
      if (currentDifference < previousDifference) {
        previousDifference = currentDifference;
        result = `[${array1[left]} , ${array2[right]}]: ${currentDifference}`;
      }
      left++;
    } else if (array1[left] > array2[right]) {
      currentDifference = array1[left] - array2[right];
      if (currentDifference < previousDifference) {
        previousDifference = currentDifference;
        result = `[${array1[left]} , ${array2[right]}]: ${currentDifference}`;
      }
      right++;
    }
  }
  return result;
}

export default smallestDifference;
