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
  root: BTNode<T>;
  constructor(value: T) {
    this.root = new BTNode<T>(value);
  }

  addNode(value: T) {
    let currentNode: BTNode<T> = this.root;
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
    let currentNode: BTNode<T> = this.root;

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

    queue.enqueue(this.root);

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
  root: BTNode<T>;

  constructor(value: T) {
    this.root = new BTNode<T>(value);
  }

  #addNode(value: T, node: BTNode<T> | null = this.root) {
    if (value < node!!.value) {
      if (!node!!.left) {
        node!!.left = new BTNode(value);
        return;
      } else {
        return this.#addNode(value, node!!.left);
      }
    } else {
      if (!node!!.rigtht) {
        node!!.rigtht = new BTNode(value);
        return;
      } else {
        return this.#addNode(value, node!!.rigtht);
      }
    }
  }

  addNode(value: T) {
    this.#addNode(value, this.root);
  }

  #find(value: T, node: BTNode<T>) {
    if (value === node.value) {
      return node.value;
    }

    if (value < node.value) {
      if (!node.left) return null;
      else {
        return this.#find(value, node.left);
      }
    } else {
      if (!node.rigtht) return null;
      else {
        return this.#find(value, node.rigtht);
      }
    }
    return null;
  }

  find(value: T): T | null {
    return this.#find(value, this.root);
  }

  printNodes() {
    let queue: Queue<BTNode<T>> = new Queue();

    queue.enqueue(this.root);

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
