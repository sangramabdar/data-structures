import { MaxHeap } from "./Heap";
import Stack from "./Stack";

class PriorityQueueNode<T> {
  value: T;
  priority: number;
  constructor(value: T, priority: number) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue<T> {
  #maxHeap: MaxHeap<PriorityQueueNode<T>> = new MaxHeap();

  dequeue(): PriorityQueueNode<T> | null {
    return this.#maxHeap.delete();
  }

  enqueue(value: T, priority: number) {
    let node = new PriorityQueueNode<T>(value, priority);
    this.#maxHeap.add(node);
  }

  peek(): PriorityQueueNode<T> | null {
    return this.#maxHeap.peek();
  }

  isEmpty(): boolean {
    return this.#maxHeap.isEmpty();
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
  dequeue(): T | null {
    if (this.values.isEmpty) return null;
    return this.values.pop()?.value!!;
  }

  isEmpty(): boolean {
    if (this.values.isEmpty) return true;
    return false;
  }
}

export { PriorityQueue, PriorityQueueWithStack };
