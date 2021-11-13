//time complexity = o(nlogn)
function mergeSort(array: number[]): number[] {
  //base case
  if (array.length <= 2) {
    if (array.length == 1) {
      return array;
    }
    let secondElement = array.pop() as number;
    let firstElement = array.pop() as number;

    if (firstElement <= secondElement) {
      return [firstElement, secondElement];
    }
    return [secondElement, firstElement];
  }

  let mid: number;

  if (array.length % 2 == 0) {
    mid = parseInt((array.length / 2).toString()) - 1;
  } else {
    mid = parseInt(((array.length + 1) / 2).toString()) - 1;
  }

  //dividing
  let leftArray = mergeSort(array.slice(0, mid + 1));
  let rightArray = mergeSort(array.slice(mid + 1));

  let newArray = [...leftArray, ...rightArray];

  let index = mid;

  //merging
  //o(n)
  for (let i = mid; i < newArray.length - 1; i++) {
    if (newArray[i] <= newArray[i + 1]) {
      break;
    } else {
      let temp = newArray[i + 1];
      newArray[i + 1] = newArray[i];
      newArray[i] = temp;

      if (newArray[index] < newArray[index - 1]) {
        let temp = newArray[index];
        newArray[index] = newArray[index - 1];
        newArray[index - 1] = temp;
      }
      index--;
    }
  }

  return newArray;
}

console.log(mergeSort([-2, -3, -111111, 11, 4, 11]));
