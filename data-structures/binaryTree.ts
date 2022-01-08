import Queue from "./quene";

class BTNode<T> {
  value: T;
  left: BTNode<T> | null = null;
  rigtht: BTNode<T> | null = null;
  constructor(value: T) {
    this.value = value;
  }
}

class BinaryTree<T> {
  head: BTNode<T>;
  constructor(value: T) {
    this.head = new BTNode<T>(value);
  }

  addNode(value: T) {
    let currentNode: BTNode<T> = this.head;
    while (true) {
      if (value < currentNode.value) {
        if (!currentNode?.left) {
          currentNode.left = new BTNode<T>(value);
          break;
        } else {
          currentNode = currentNode.left;
          continue;
        }
      } else {
        if (!currentNode?.rigtht) {
          currentNode.rigtht = new BTNode<T>(value);
          break;
        } else {
          currentNode = currentNode?.rigtht;
          continue;
        }
      }
    }
  }

  getValue(value: T): T | null {
    let currentNode: BTNode<T> = this.head;

    while (true) {
      if (value === currentNode?.value) {
        return value;
      }

      if (value < currentNode?.value) {
        if (!currentNode?.left) {
          return null;
        } else {
          currentNode = currentNode?.left;
          continue;
        }
      } else {
        if (!currentNode?.rigtht) {
          return null;
        } else {
          currentNode = currentNode?.rigtht;
          continue;
        }
      }
    }
  }

  printNodes() {
    let queue: Queue<BTNode<T>> = new Queue();

    queue.enqueue(this.head);

    while (!queue.isEmpty()) {
      let curretNode: BTNode<T> | null = queue.dequeue();
      console.log(curretNode?.value);
      if (curretNode?.left) {
        queue.enqueue(curretNode.left);
      }

      if (curretNode?.rigtht) {
        queue.enqueue(curretNode.rigtht);
      }
    }
  }
}

class BinaryTreeWithRecursion<T> {
  head: BTNode<T>;

  constructor(value: T) {
    this.head = new BTNode<T>(value);
  }

  addNode(value: T, node: BTNode<T> | null = this.head) {
    if (value < node!!.value) {
      if (!node!!.left) {
        node!!.left = new BTNode(value);
        return;
      } else {
        return this.addNode(value, node!!.left);
      }
    } else {
      if (!node!!.rigtht) {
        node!!.rigtht = new BTNode(value);
        return;
      } else {
        return this.addNode(value, node!!.rigtht);
      }
    }
  }

  getValue(value: T, node: BTNode<T> = this.head) {
    if (value === node.value) {
      return node.value;
    }

    if (value < node.value) {
      if (!node.left) return null;
      else {
        return this.getValue(value, node.left);
      }
    } else {
      if (!node.rigtht) return null;
      else {
        return this.getValue(value, node.rigtht);
      }
    }
  }

  printNodes() {
    let queue: Queue<BTNode<T>> = new Queue();

    queue.enqueue(this.head);

    while (!queue.isEmpty()) {
      let curretNode: BTNode<T> | null = queue.dequeue();
      console.log(curretNode?.value);

      if (curretNode?.left) {
        queue.enqueue(curretNode.left);
      }

      if (curretNode?.rigtht) {
        queue.enqueue(curretNode.rigtht);
      }
    }
  }
}

export { BinaryTree, BinaryTreeWithRecursion };
