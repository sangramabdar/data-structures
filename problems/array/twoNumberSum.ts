function twoNumberSum(array: number[], target: number) {
  let tableOfResults: { [key: number]: boolean } = {};
  let result = 0;
  for (let element of array) {
    result = target - element;
    if (tableOfResults[result]) {
      return result + element;
    }
    tableOfResults[element] = true;
  }
}

export default twoNumberSum;
