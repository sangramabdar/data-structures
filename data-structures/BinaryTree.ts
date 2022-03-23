import Queue from "./Queue";

class BTNode<T> {
  value: T;
  left: BTNode<T> | null = null;
  right: BTNode<T> | null = null;
  constructor(value: T) {
    this.value = value;
  }
}

class BinaryTree<T> {
  root: BTNode<T> | null;

  constructor(value: T) {
    this.root = new BTNode<T>(value);
  }

  addNode(value: T) {
    let currentNode: BTNode<T> | null = this.root;
    while (true) {
      if (value < currentNode!!.value) {
        if (!currentNode?.left) {
          currentNode!!.left = new BTNode<T>(value);
          return;
        } else {
          currentNode = currentNode.left;
          continue;
        }
      } else {
        if (!currentNode?.right) {
          currentNode!!.right = new BTNode<T>(value);
          return;
        } else {
          currentNode = currentNode?.right;
          continue;
        }
      }
    }
  }

  find(value: T): T | null {
    let currentNode: BTNode<T> | null = this.root;

    while (true) {
      if (value === currentNode?.value) {
        return value;
      }

      if (value < currentNode!!.value) {
        if (!currentNode?.left) {
          return null;
        } else {
          currentNode = currentNode?.left;
        }
      } else {
        if (!currentNode?.right) {
          return null;
        } else {
          currentNode = currentNode?.right;
        }
      }
    }
  }

  findMin(): T {
    let currentNode: BTNode<T> | null = this.root;

    while (currentNode?.left !== null) {
      currentNode = currentNode!!.left;
    }
    return currentNode.value;
  }

  findMax(): T {
    let currentNode: BTNode<T> | null = this.root;
    while (currentNode?.right !== null) {
      currentNode = currentNode!!.right;
    }
    return currentNode.value;
  }

  remove(value: T): T | null {
    let currentNode: BTNode<T> | null = this.root;

    if (value === currentNode?.value) {
      this.root = this.helper(currentNode);
      return value;
    }

    while (currentNode !== null) {
      if (value < currentNode!!.value) {
        if (currentNode!!.left !== null) {
          if (currentNode!!.left.value === value) {
            currentNode!!.left = this.helper(currentNode!!.left);
            return value;
          } else {
            currentNode = currentNode!!.left;
          }
        } else {
          return null;
        }
      } else {
        if (currentNode?.right !== null) {
          if (currentNode?.right.value === value) {
            currentNode.right = this.helper(currentNode.right);
            return value;
          } else {
            currentNode = currentNode!!.right;
          }
        } else {
          return null;
        }
      }
    }
    return null;
  }

  helper(node: BTNode<T> | null) {
    if (node?.left == null) {
      if (node?.right) {
        return node.right;
      }
      return null;
    }
    if (node?.right == null) {
      if (node.left) {
        return node.right;
      }
      return null;
    }

    let rightMostNode: BTNode<T> = this.findRightMostNode(node.left);
    rightMostNode.right = node.right;
    return node.left;
  }

  findRightMostNode(node: BTNode<T>): BTNode<T> {
    let currentNode: BTNode<T> | null = node;

    while (currentNode.right !== null) {
      currentNode = currentNode?.right;
    }
    return currentNode;
  }

  printNodes() {
    let queue: Queue<BTNode<T>> = new Queue();

    queue.enqueue(this.root as BTNode<T>);

    while (!queue.isEmpty) {
      let currentNode: BTNode<T> | null = queue.dequeue();
      console.log(currentNode?.value);
      if (currentNode?.left) {
        queue.enqueue(currentNode.left);
      }

      if (currentNode?.right) {
        queue.enqueue(currentNode.right);
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
      if (!node!!.right) {
        node!!.right = new BTNode(value);
        return;
      } else {
        return this.#addNode(value, node!!.right);
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
      if (!node.right) return null;
      else {
        return this.#find(value, node.right);
      }
    }
  }

  find(value: T): T | null {
    return this.#find(value, this.root);
  }

  printNodes() {
    let queue: Queue<BTNode<T>> = new Queue();

    queue.enqueue(this.root);

    while (!queue.isEmpty) {
      let curretNode: BTNode<T> | null = queue.dequeue();
      console.log(curretNode?.value);

      if (curretNode?.left) {
        queue.enqueue(curretNode.left);
      }

      if (curretNode?.right) {
        queue.enqueue(curretNode.right);
      }
    }
  }
}

export { BinaryTree, BinaryTreeWithRecursion };
