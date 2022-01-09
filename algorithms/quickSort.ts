function QuickSort(array: number[]): number[] {
  if (array.length < 2) {
    return array;
  } else {
    let pivot = array[0];
    let less: number[] = [];
    let greater: number[] = [];

    for (let i = 1; i < array.length; i++) {
      if (array[i] <= pivot) {
        less.push(array[i]);
      } else {
        greater.push(array[i]);
      }
    }
    return [...QuickSort(less), pivot, ...QuickSort(greater)];
  }
}

function Partition(arr: number[], start: number, end: number) {
  let pivot = arr[start];
  let i = start;
  let j = end;
  while (i < j) {
    while (arr[i] <= pivot) i++;
    while (arr[j] > pivot) j--;

    if (i < j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  let temp = arr[j];
  arr[j] = pivot;
  arr[start] = temp;
  return j;
}

function QuickSort2(arr: number[], start: number, end: number) {
  if (start < end) {
    let index = Partition(arr, start, end);
    QuickSort2(arr, start, index - 1);
    QuickSort2(arr, index + 1, end);
  }
}
