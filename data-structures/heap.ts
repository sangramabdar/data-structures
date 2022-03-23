class MaxHeap<T> {
  #elements: T[] = [];
  #length: number = 0;

  add(value: T) {
    this.#elements.push(value);

    let currentIndex = this.#elements.length - 1;
    let currentValue = this.#elements[currentIndex];

    while (currentIndex > 0) {
      let parentIndex = Math.floor((currentIndex - 1) / 2);
      let parentValue = this.#elements[parentIndex];

      if (currentValue <= parentValue) return;

      this.#elements[parentIndex] = currentValue;
      this.#elements[currentIndex] = parentValue;

      currentIndex = parentIndex;
    }
  }

  delete(): T | null {
    if (this.#elements.length === 0) return null;

    if (this.#elements.length == 1) {
      let max = this.#elements[0];
      this.#elements.pop();
      return max;
    }

    const max = this.#elements[0];
    const end = this.#elements.pop()!!;
    this.#elements[0] = end;

    let currentValue = this.#elements[0];
    let currentIndex = 0;
    let length = this.#elements.length;

    let leftValue: T | null = null;
    let rightValue: T | null = null;

    while (true) {
      let swapIndex: number | null = null;
      let leftIndex = 2 * currentIndex + 1;
      let rightIndex = 2 * currentIndex + 2;

      if (leftIndex < length) {
        leftValue = this.#elements[leftIndex];
        if (leftValue > currentValue) swapIndex = leftIndex;
      }

      if (rightIndex < length) {
        rightValue = this.#elements[rightIndex];
        if (
          (swapIndex === null && rightValue > currentValue) ||
          (swapIndex !== null && rightValue > leftValue!!)
        ) {
          swapIndex = rightIndex;
        }
      }

      if (swapIndex === null) break;

      let parentValue = this.#elements[currentIndex];
      let childValue = this.#elements[swapIndex];

      this.#elements[swapIndex] = parentValue;
      this.#elements[currentIndex] = childValue;

      currentIndex = swapIndex;
    }

    return max;
  }

  top() {
    if (this.#length >= 1) {
      return this.#elements[1];
    }
    return null;
  }
}

class MinHeap<T> {
  #elements: T[] = [];
  #length: number = 0;

  add(value: T) {
    this.#elements.push(value);

    let currentIndex = this.#elements.length - 1;
    let currentValue = this.#elements[currentIndex];

    while (currentIndex > 0) {
      let parentIndex = Math.floor((currentIndex - 1) / 2);
      let parentValue = this.#elements[parentIndex];

      if (currentValue >= parentValue) return;

      this.#elements[parentIndex] = currentValue;
      this.#elements[currentIndex] = parentValue;

      currentIndex = parentIndex;
    }
  }

  delete(): T | null {
    if (this.#elements.length === 0) return null;

    if (this.#elements.length == 1) {
      let max = this.#elements[0];
      this.#elements.pop();
      return max;
    }

    const max = this.#elements[0];
    const end = this.#elements.pop()!!;
    this.#elements[0] = end;

    let currentValue = this.#elements[0];
    let currentIndex = 0;
    let length = this.#elements.length;

    let leftValue: T | null = null;
    let rightValue: T | null = null;

    while (true) {
      let swapIndex: number | null = null;
      let leftIndex = 2 * currentIndex + 1;
      let rightIndex = 2 * currentIndex + 2;

      if (leftIndex < length) {
        leftValue = this.#elements[leftIndex];
        if (leftValue < currentValue) swapIndex = leftIndex;
      }

      if (rightIndex < length) {
        rightValue = this.#elements[rightIndex];
        if (
          (swapIndex === null && rightValue < currentValue) ||
          (swapIndex !== null && rightValue < leftValue!!)
        ) {
          swapIndex = rightIndex;
        }
      }

      if (swapIndex === null) break;

      let parentValue = this.#elements[currentIndex];
      let childValue = this.#elements[swapIndex];

      this.#elements[swapIndex] = parentValue;
      this.#elements[currentIndex] = childValue;

      currentIndex = swapIndex;
    }

    return max;
  }
  top() {
    if (this.#length >= 1) {
      return this.#elements[1];
    }
    return null;
  }
}

let h = new MinHeap<number>();
h.add(10);
h.add(9);
h.add(8);
h.add(7);
h.add(6);
console.log(h.delete());
console.log(h.delete());
console.log(h.delete());
console.log(h.delete());
console.log(h.delete());
console.log(h.delete());
console.log(h.delete());
console.log(h.delete());
console.log(h.delete());
console.log(h.delete());
console.log(h.delete());
console.log(h.delete());
h.add(1);
console.log(h.delete());
console.log(h.delete());
