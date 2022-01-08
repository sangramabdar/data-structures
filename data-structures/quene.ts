class QueueNode<T> {
  value: T;
  next: QueueNode<T> | null;

  constructor(value: T) {
    this.value = value;
  }
}

class Queue<T> {
  #length: number = 0;
  length: number = 0;
  #head: QueueNode<T> | null = null;
  #tail: QueueNode<T> | null = null;

  enqueue(value: T) {
    let temp = new QueueNode<T>(value);
    if (!this.#head) {
      this.#head = temp;
      this.#tail = temp;
      this.#length++;
      this.length = this.#length;
      return;
    }

    this.#tail!!.next = temp;
    this.#tail = temp;
    this.#length++;
    this.length = this.#length;
  }

  dequeue(): T | null {
    if (!this.#head) return null;

    let value = this.#head.value;

    this.#head = this.#head.next;
    this.#length--;
    this.length = this.#length;
    return value;
  }

  front(): T | null {
    if (!this.#head) return null;
    return this.#head.value;
  }

  isEmpty(): boolean {
    if (!this.#head) return true;
    return false;
  }
}

export default Queue;
