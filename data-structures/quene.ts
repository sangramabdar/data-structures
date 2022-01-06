class QueneNode<T> {
  value: T;
  next: QueneNode<T> | null;

  constructor(value: T) {
    this.value = value;
  }
}

class Quene<T> {
  #length: number = 0;
  length: number = 0;
  #head: QueneNode<T> | null = null;
  #tail: QueneNode<T> | null = null;

  enque(value: T) {
    let temp = new QueneNode<T>(value);
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

  deqnque(): T | null {
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

export default Quene;
