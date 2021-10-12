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

  pop() {
    if (this.length <= 0) {
      console.log("stack is empty");
    }
    this.stackNodes?.pop();
    this.length = this.stackNodes.length;
  }
}

export default Stack;
