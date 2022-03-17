class StackNode<T> {
  value: T;
  next: StackNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

class Stack<T> {
  #size: number = 0;
  size: number = 0;
  #top: StackNode<T> | null = null;

  push(value: T) {
    let current: StackNode<T> = new StackNode(value);
    if (!this.#top) {
      this.#top = current;
      this.#size++;
      this.size = this.#size;
      return;
    }

    current.next = this.#top;
    this.#top = current;
    this.#size++;
    this.size = this.#size;
  }

  pop(): T | null {
    if (!this.#top) return null;

    let value = this.#top.value;
    this.#top = this.#top.next;

    this.#size--;
    this.size = this.#size;
    return value;
  }

  peek(): T | null {
    if (!this.#top) return null;
    return this.#top.value;
  }

  isEmpty(): boolean {
    if (!this.#top) return true;
    return false;
  }
}

export default Stack;
