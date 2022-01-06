class StackNode<T> {
  value: T;
  next: StackNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

class Stack<T> {
  #length: number = 0;
  length: number = 0;
  #head: StackNode<T> | null = null;

  push(value: T) {
    let temp: StackNode<T> = new StackNode(value);
    if (!this.#head) {
      this.#head = temp;
      this.#length++;
      this.length = this.#length;
      return;
    }

    temp.next = this.#head;
    this.#head = temp;

    this.#length++;
    this.length = this.#length;
  }

  pop(): T | null {
    if (!this.#head) return null;

    let value = this.#head.value;
    this.#head = this.#head.next;

    this.#length--;
    this.length = this.#length;
    return value;
  }

  top(): T | null {
    if (!this.#head) return null;
    return this.#head.value;
  }

  isEmpty(): boolean {
    if (!this.#head) return true;
    return false;
  }
}

export default Stack;
