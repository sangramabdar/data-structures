class StackNode<T> {
  key: number = 0;
  value: T;

  constructor(index: number, value: T) {
    this.value = value;
  }
}

class Stack<T> {
  length: number = 0;
  private stackNodes: StackNode<T>[] = new Array<StackNode<T>>();

  push(value: T) {
    this.stackNodes.push(new StackNode(this.length, value));
    this.length = this.stackNodes.length;
  }

  pop(): T | null {
    if (this.length == 0) {
      console.log("stack is empty");
      return null;
    }
    let value = this.stackNodes.pop()!!.value;
    this.length = this.stackNodes.length;
    return value;
  }
}

export default Stack;
