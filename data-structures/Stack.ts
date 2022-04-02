class StackNode<T> {
  value: T;
  next: StackNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

class Stack<T> {
  #size: number = 0;
  #top: StackNode<T> | null = null;

  push(value: T) {
    let current: StackNode<T> = new StackNode(value);
    if (!this.#top) {
      this.#top = current;
      this.#size++;
      return;
    }

    current.next = this.#top;
    this.#top = current;
    this.#size++;
  }

  pop(): T | null {
    if (!this.#top) return null;

    let value = this.#top.value;
    this.#top = this.#top.next;
    this.#size--;

    return value;
  }

  top(): T | null {
    if (!this.#top) return null;
    return this.#top.value;
  }

  get isEmpty(): boolean {
    if (!this.#top) return true;
    return false;
  }

  get size() {
    return this.#size;
  }
}

class MaxStack {
  elements: Stack<number> = new Stack<number>();
  max: Stack<number> = new Stack<number>();

  push(value: number) {
    this.elements.push(value);

    if (this.max.isEmpty) {
      this.max.push(value);
    } else {
      this.max.push(Math.max(value, this.max.top()!!));
    }
  }

  pop(): number | null {
    return this.elements.pop();
  }

  top(): number | null {
    return this.elements.top();
  }

  popMax(): number | null {
    let maxValue = this.max.top();

    let tempStack = new Stack<number>();

    while (this.elements.top() != maxValue) {
      tempStack.push(this.elements.pop()!!);
      this.max.pop();
    }

    this.elements.pop();
    this.max.pop();

    while (!tempStack.isEmpty) {
      this.push(tempStack.pop()!!);
    }
    return maxValue;
  }
}

export default Stack;
