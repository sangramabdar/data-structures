class MaxHeap<T> {
  #elements: T[] = [];

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

    while (true) {
      let swapIndex: number | null = null;
      let leftIndex = 2 * currentIndex + 1;
      let rightIndex = 2 * currentIndex + 2;
      let leftValue: T | null = null;
      let rightValue: T | null = null;

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

  peek() {
    if (this.#elements.length == 0) {
      return null;
    }
    return this.#elements[0];
  }

  isEmpty(): boolean {
    if (this.#elements.length == 0) {
      return true;
    }
    return false;
  }
}

class MinHeap<T> {
  #elements: T[] = [];

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

    while (true) {
      let swapIndex: number | null = null;
      let leftIndex = 2 * currentIndex + 1;
      let rightIndex = 2 * currentIndex + 2;
      let leftValue: T | null = null;
      let rightValue: T | null = null;

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

  peek() {
    if (this.#elements.length == 0) {
      return null;
    }
    return this.#elements[0];
  }
  isEmpty(): boolean {
    if (this.#elements.length == 0) {
      return true;
    }
    return false;
  }
}

export { MaxHeap, MinHeap };
