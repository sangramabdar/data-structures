import Quene from "./quene";

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

  #addChildrenToquene(q: Quene<BTNode<T>>, currentNode: BTNode<T> | null) {
    if (currentNode?.left) {
      q.enque(currentNode?.left);
    }

    if (currentNode?.rigtht) {
      q.enque(currentNode?.rigtht);
    }
  }

  printNodes() {
    let quene: Quene<BTNode<T>> = new Quene();

    quene.enque(this.head);

    while (!quene.isEmpty()) {
      let curretNode: BTNode<T> | null = quene.deqnque();
      this.#addChildrenToquene(quene, curretNode);
      console.log(curretNode?.value);
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

  #addChildrenToquene(q: Quene<BTNode<T>>, currentNode: BTNode<T> | null) {
    if (currentNode?.left) {
      q.enque(currentNode?.left);
    }

    if (currentNode?.rigtht) {
      q.enque(currentNode?.rigtht);
    }
  }

  printNodes() {
    let quene: Quene<BTNode<T>> = new Quene();

    quene.enque(this.head);

    while (!quene.isEmpty()) {
      let curretNode: BTNode<T> | null = quene.deqnque();
      this.#addChildrenToquene(quene, curretNode);
      console.log(curretNode?.value);
    }
  }
}

export { BinaryTree, BinaryTreeWithRecursion };
