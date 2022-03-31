import Stack from "./Stack";

class PriorityQueueNode<T> {
  value: T;
  priority: number;
  constructor(value: T, priority: number) {
    this.value = value;
    this.priority = priority;
  }
}

class MaxPriorityQueue<T> {
  #elements: PriorityQueueNode<T>[] = [];

  enqueue(value: T, priority: number) {
    let node = new PriorityQueueNode<T>(value, priority);
    this.#elements.push(node);

    let currentIndex = this.#elements.length - 1;
    let currentValue = this.#elements[currentIndex];

    while (currentIndex > 0) {
      let parentIndex = Math.floor((currentIndex - 1) / 2);
      let parentValue = this.#elements[parentIndex];

      if (currentValue.priority <= parentValue.priority) return;

      this.#elements[parentIndex] = currentValue;
      this.#elements[currentIndex] = parentValue;

      currentIndex = parentIndex;
    }
  }

  dequeue(): PriorityQueueNode<T> | null {
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
      let leftValue: PriorityQueueNode<T> | null = null;
      let rightValue: PriorityQueueNode<T> | null = null;

      if (leftIndex < length) {
        leftValue = this.#elements[leftIndex];
        if (leftValue.priority > currentValue.priority) swapIndex = leftIndex;
      }

      if (rightIndex < length) {
        rightValue = this.#elements[rightIndex];
        if (
          (swapIndex === null && rightValue.priority > currentValue.priority) ||
          (swapIndex !== null && rightValue.priority > leftValue!!.priority)
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

  peek(): PriorityQueueNode<T> | null {
    if (this.#elements.length == 0) return null;
    return this.#elements[0];
  }

  isEmpty(): boolean {
    if (this.#elements.length == 0) {
      return true;
    }
    return false;
  }
}

class MinPriorityQueue<T> {
  #elements: PriorityQueueNode<T>[] = [];

  enqueue(value: T, priority: number) {
    let node = new PriorityQueueNode<T>(value, priority);
    this.#elements.push(node);

    let currentIndex = this.#elements.length - 1;
    let currentValue = this.#elements[currentIndex];

    while (currentIndex > 0) {
      let parentIndex = Math.floor((currentIndex - 1) / 2);
      let parentValue = this.#elements[parentIndex];

      if (currentValue.priority >= parentValue.priority) return;

      this.#elements[parentIndex] = currentValue;
      this.#elements[currentIndex] = parentValue;

      currentIndex = parentIndex;
    }
  }

  dequeue(): PriorityQueueNode<T> | null {
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
      let leftValue: PriorityQueueNode<T> | null = null;
      let rightValue: PriorityQueueNode<T> | null = null;

      if (leftIndex < length) {
        leftValue = this.#elements[leftIndex];
        if (leftValue.priority < currentValue.priority) swapIndex = leftIndex;
      }

      if (rightIndex < length) {
        rightValue = this.#elements[rightIndex];
        if (
          (swapIndex === null && rightValue.priority < currentValue.priority) ||
          (swapIndex !== null && rightValue.priority < leftValue!!.priority)
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

  peek(): PriorityQueueNode<T> | null {
    if (this.#elements.length == 0) return null;
    return this.#elements[0];
  }

  isEmpty(): boolean {
    if (this.#elements.length == 0) {
      return true;
    }
    return false;
  }
}

class PriorityQueueWithStack<T> {
  values: Stack<PriorityQueueNode<T>> = new Stack<PriorityQueueNode<T>>();

  //o(n) time complexity
  enqueue(value: T, priority) {
    let node = new PriorityQueueNode<T>(value, priority);
    this.#enqueue(node);
  }

  #enqueue(node: PriorityQueueNode<T>) {
    if (this.values.isEmpty) {
      return this.values.push(node);
    }

    let currentNode = this.values.pop();

    if (currentNode!!.priority <= node.priority) {
      this.values.push(currentNode!!);
      return this.values.push(node);
    }

    this.#enqueue(node);
    this.values.push(currentNode!!);
  }

  //o(1) time complexity
  dequeue(): PriorityQueueNode<T> | null {
    if (this.values.isEmpty) return null;
    return this.values.pop()!!;
  }

  isEmpty(): boolean {
    if (this.values.isEmpty) return true;
    return false;
  }
}

export { MaxPriorityQueue, PriorityQueueWithStack, MinPriorityQueue };
