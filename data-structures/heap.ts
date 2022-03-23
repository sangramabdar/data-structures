class MaxHeap<T> {
  #elements: T[] = [];
  #length: number = 0;

  add(value: T) {
    this.#length++;
    this.#elements[this.#length] = value;

    if (this.#length == 1) return;

    let currentIndex = this.#length;

    while (currentIndex >= 1) {
      let currentValue = this.#elements[currentIndex];
      let parentIndex = parseInt(`${currentIndex / 2}`);
      let parentValue = this.#elements[parentIndex];

      if (currentValue <= parentValue) return;

      this.#elements[parentIndex] = currentValue;
      this.#elements[currentIndex] = parentValue;
      currentIndex = parentIndex;
    }
  }

  delete(): T | null {
    //to handle certain cases
    if (this.#length == 0) return null;

    if (this.#length <= 2) {
      let value = this.#elements[1];
      if (this.#length == 2) {
        let leftValue = this.#elements[2 * 1];
        this.#elements[1] = leftValue;
        this.#length--;
        return value;
      } else {
        this.#length--;
        this.#elements = [];
        return value;
      }
    }

    let value = this.#elements[1];
    this.#elements[1] = this.#elements[this.#length];

    let currentIndex = 1;
    let leftIndex = 2 * currentIndex;
    let rightIndex = 2 * currentIndex + 1;

    let leftValue: T | null = null;
    let rightValue: T | null = null;

    this.#length--;

    while (true) {
      let larger;
      leftIndex = 2 * currentIndex;
      rightIndex = 2 * currentIndex + 1;

      if (leftIndex <= this.#length) {
        leftValue = this.#elements[leftIndex];
      } else {
        leftValue = null;
      }
      if (rightIndex <= this.#length) {
        rightValue = this.#elements[rightIndex];
      } else {
        rightValue = null;
      }

      if (leftValue != null && rightValue != null) {
        larger = leftValue < rightValue ? rightValue : leftValue;
      } else if (leftValue != null || rightValue != null) {
        if (!leftValue) {
          larger = rightValue;
        } else {
          larger = leftValue;
        }
      } else {
        break;
      }

      let childIndex;
      if (larger == leftValue) {
        childIndex = 2 * currentIndex;
      } else {
        childIndex = 2 * currentIndex + 1;
      }

      let parentValue = this.#elements[currentIndex];
      let childValue = this.#elements[childIndex];

      if (parentValue >= childValue) break;

      this.#elements[childIndex] = parentValue;
      this.#elements[currentIndex] = childValue;

      currentIndex = childIndex;
    }

    return value;
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
    this.#length++;
    this.#elements[this.#length] = value;

    if (this.#length == 1) return;

    let currentIndex = this.#length;

    while (currentIndex >= 1) {
      let currentValue = this.#elements[currentIndex];
      let parentIndex = parseInt(`${currentIndex / 2}`);
      let parentValue = this.#elements[parentIndex];

      if (currentValue >= parentValue) return;

      this.#elements[parentIndex] = currentValue;
      this.#elements[currentIndex] = parentValue;
      currentIndex = parentIndex;
    }
  }

  delete(): T | null {
    //to handle certain cases
    if (this.#length == 0) return null;

    if (this.#length <= 2) {
      let value = this.#elements[1];
      if (this.#length == 2) {
        let leftValue = this.#elements[2 * 1];
        this.#elements[1] = leftValue;
        this.#length--;
        return value;
      } else {
        this.#length--;
        this.#elements = [];
        return value;
      }
    }

    let value = this.#elements[1];
    this.#elements[1] = this.#elements[this.#length];

    let currentIndex = 1;
    let leftIndex = 2 * currentIndex;
    let rightIndex = 2 * currentIndex + 1;

    let leftValue: T | null = null;
    let rightValue: T | null = null;

    this.#length--;

    while (true) {
      let larger;
      leftIndex = 2 * currentIndex;
      rightIndex = 2 * currentIndex + 1;

      if (leftIndex <= this.#length) {
        leftValue = this.#elements[leftIndex];
      } else {
        leftValue = null;
      }
      if (rightIndex <= this.#length) {
        rightValue = this.#elements[rightIndex];
      } else {
        rightValue = null;
      }

      if (leftValue != null && rightValue != null) {
        larger = leftValue < rightValue ? rightValue : leftValue;
      } else if (leftValue != null || rightValue != null) {
        if (!leftValue) {
          larger = rightValue;
        } else {
          larger = leftValue;
        }
      } else {
        break;
      }

      let childIndex;
      if (larger == leftValue) {
        childIndex = 2 * currentIndex;
      } else {
        childIndex = 2 * currentIndex + 1;
      }

      let parentValue = this.#elements[currentIndex];
      let childValue = this.#elements[childIndex];

      if (parentValue <= childValue) break;

      this.#elements[childIndex] = parentValue;
      this.#elements[currentIndex] = childValue;

      currentIndex = childIndex;
    }

    return value;
  }

  top() {
    if (this.#length >= 1) {
      return this.#elements[1];
    }
    return null;
  }
}

let h = new MaxHeap<number>();
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
