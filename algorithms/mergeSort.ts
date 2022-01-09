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
  let k = start;
  let b: number[] = [];

  for (let m = 0; m <= end; m++) {
    b[m] = 0;
  }

  //condition to check left or right part of array is merged or not
  while (i <= mid && j <= end) {
    if (arr[i] < arr[j]) {
      b[k] = arr[i];
      i++;
    } else {
      b[k] = arr[j];
      j++;
    }
    k++;
  }

  //pushing remaining elements in array
  if (i > mid) {
    while (j <= end) {
      b[k] = arr[j];
      j++;
      k++;
    }
  } else {
    while (i <= mid) {
      b[k] = arr[i];
      i++;
      k++;
    }
  }

  //copyig all elements to main array
  for (let k = start; k <= end; k++) {
    arr[k] = b[k];
  }
}

export default mergeSort;
