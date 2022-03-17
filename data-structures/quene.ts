class QueueNode<T> {
  value: T;
  next: QueueNode<T> | null;

  constructor(value: T) {
    this.value = value;
  }
}

class Queue<T> {
  #size: number = 0;
  size: number = 0;
  #front: QueueNode<T> | null = null;
  #back: QueueNode<T> | null = null;

  enqueue(value: T) {
    let current = new QueueNode<T>(value);

    if (!this.#front) {
      this.#front = current;
      this.#back = current;
      this.#size++;
      this.size = this.#size;
      return;
    }

    this.#back!!.next = current;
    this.#back = current;
    this.#size++;
    this.size = this.#size;
  }

  dequeue(): T | null {
    if (!this.#front) return null;

    let value = this.#front.value;
    this.#front = this.#front.next;
    this.#size--;
    this.size = this.#size;

    return value;
  }

  front(): T | null {
    if (!this.#front) return null;
    return this.#front.value;
  }

  isEmpty(): boolean {
    if (!this.#front) return true;
    return false;
  }
}

export default Queue;
