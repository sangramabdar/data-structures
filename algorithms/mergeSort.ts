function mergeSort(arr: number[]) {
  let start = 0;
  let end = arr.length - 1;

  sort(arr, start, end);
}

function sort(arr: number[], start: number, end: number) {
  if (start < end) {
    let mid = parseInt(`${(start + end) / 2}`);
    sort(arr, start, mid);
    sort(arr, mid + 1, end);
    merge(arr, start, mid, end);
  }
}

function merge(arr: number[], start: number, mid: number, end: number) {
  let i = start;
  let j = mid + 1;
  let localIndex = 0;
  let temp: number[] = [];

  for (let m = 0; m <= end - start + 1; m++) {
    temp[m] = 0;
  }

  //condition to check left or right part of array is merged or not
  while (i <= mid && j <= end) {
    if (arr[i] < arr[j]) {
      temp[localIndex] = arr[i];
      i++;
    } else {
      temp[localIndex] = arr[j];
      j++;
    }
    localIndex++;
  }

  //pushing remaining elements in array
  if (i > mid) {
    while (j <= end) {
      temp[localIndex] = arr[j];
      j++;
      localIndex++;
    }
  } else {
    while (i <= mid) {
      temp[localIndex] = arr[i];
      i++;
      localIndex++;
    }
  }

  localIndex = 0;
  //copying all elements to main array
  for (let k = start; k <= end; k++) {
    arr[k] = temp[localIndex];
    localIndex++;
  }
}

export default mergeSort;
