function binarySearch<T>(items: T[], value: T): number {
  let start = 0;
  let end = items.length - 1;
  while (start <= end) {
    let mid = start + parseInt(`${(end - start) / 2}`);
    console.log(mid);
    if (items[mid] === value) return mid;

    if (value < items[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 3, 5, 10, 12, 100, 200, 400, 1000], 1000));
