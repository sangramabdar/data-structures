import mergeSort from "./algorithms/mergeSort";

let a: number[] = [];

for (let i = 1; i <= 100; i++) {
  a[i - 1] = i;
}
// console.log(object)
mergeSort(a);
console.log(a);
