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

console.log(QuickSort([1, -2, 1100, 22, -22]));
