import Stack from "./data-structures/Stack";
import mergeSort from "./algorithms/mergeSort";

function addNumbers(n) {
  let s = new Stack<number>();
  s.push(n);
  let localN = n;
  let sum = 0;
  while (true) {
    if (localN <= 1) break;
    localN = localN - 1;
    s.push(localN);
  }

  while (!s.isEmpty) {
    console.time();
    sum += s.pop()!!;
    console.timeEnd();
  }
  console.log(sum);
}

function addNumbersWithRecursion(n) {
  if (n == 0) return 0;
  return n + addNumbersWithRecursion(n - 1);
}

function fib(n: number) {
  let stack = new Stack<number>();
  let sum = 0;
  let localN = n;
  stack.push(n);
  while (true) {
    if (localN - 2 <= 2 && localN - 1 <= 2) break;
    if (localN - 2 > 2) {
      stack.push(localN - 2);
    }
    if (localN - 1 > 2) {
      stack.push(localN - 1);
    }
    localN--;
  }
  let firstNumber = 0;
  let secondNumber = 1;
  let map = {};

  while (!stack.isEmpty) {
    let current = stack.pop();
    // console.log(current);
    if (map[current!!]) {
      // console.log(map[current!!]);
    } else {
      map[current!!] = firstNumber + secondNumber;
    }
    firstNumber = secondNumber;
    secondNumber = map[current!!];
  }
  console.log(map[n]);
}

let a = [1, 3, 4, 0, -1, 22];
mergeSort(a);
console.log(a);
