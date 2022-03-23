import { MaxHeap } from "./Heap";

class PriorityQueue<T> {
  #maxHeap: MaxHeap<T> = new MaxHeap();

  dequeue(): T | null {
    return this.#maxHeap.delete();
  }

  enqueue(value: T) {
    this.#maxHeap.add(value);
  }

  peek(): T | null {
    return this.#maxHeap.peek();
  }

  isEmpty(): boolean {
    return this.#maxHeap.isEmpty();
  }
}

export default PriorityQueue;
