class LinkedListNode<T> {
  value: T;
  next: LinkedListNode<T> | null = null;
  prevoius: LinkedListNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

class LinkedList<T> {
  private head: LinkedListNode<T> | null = null;
  private tail: LinkedListNode<T> | null = null;

  legnth: number = 0;

  add(value: T) {
    if (!this.head) {
      this.head = new LinkedListNode<T>(value);
      this.head.prevoius = null;
      this.tail = this.head;
      this.legnth++;
      return;
    }

    if (!this.head?.next) {
      this.head.next = new LinkedListNode<T>(value);
      this.tail = this.head?.next;
      this.tail.prevoius = this.head;
      this.legnth++;
      return;
    }

    let tempNode: LinkedListNode<T> | null = this.tail;
    tempNode.next = new LinkedListNode<T>(value);
    tempNode.next.prevoius = tempNode;
    this.tail = tempNode!!.next;
    this.legnth++;
  }

  get(value: T): T | null {
    if (value == this.head?.value) {
      return this.head?.value;
    }

    if (value == this.tail?.value) {
      return this.tail?.value;
    }

    let tempNode: LinkedListNode<T> | null = this.head?.next;
    while (tempNode) {
      if (tempNode?.value == value) {
        return tempNode?.value;
      }
      tempNode = tempNode!!.next;
    }

    return null;
  }

  #getNode(value: T): LinkedListNode<T> | null {
    if (value == this.head?.value) {
      return this.head;
    }

    if (value == this.tail?.value) {
      return this.tail;
    }

    let tempNode: LinkedListNode<T> | null = this.head!!.next;

    while (tempNode) {
      if (tempNode?.value == value) {
        return tempNode;
      }
      tempNode = tempNode!!.next;
    }

    return null;
  }

  update(value: T, newValue: T) {
    let tempNode: LinkedListNode<T> | null = this.#getNode(value);
    if (!tempNode) {
      console.log("value is not in linkedlist");
      return;
    }
    tempNode.value = newValue;
    console.log("element is updated");
  }

  insert(value: T, newValue: T) {
    let tempNode: LinkedListNode<T> | null;
    let previousNode: LinkedListNode<T> | null = null;

    tempNode = this.#getNode(value);

    if (value == this.head?.value) {
      tempNode = this.head;
      this.head = new LinkedListNode<T>(newValue);
      this.head.next = tempNode;
      tempNode.prevoius = this.head;
      this.legnth++;
      return;
    }

    if (value == this.tail?.value) {
      tempNode = this.tail!!;
      previousNode = this.tail!!.prevoius;
      previousNode!!.next = new LinkedListNode<T>(value);
      previousNode!!.next.prevoius = previousNode;
      previousNode!!.next.next = tempNode;
      tempNode.prevoius = previousNode!!.next;
      this.tail = tempNode;
      this.legnth++;
      return;
    }

    tempNode = this.head!!.next;
    previousNode = this.head;

    for (let i = 1; i < this.legnth - 1; i++) {
      if (tempNode.value == value) {
        previousNode.next = new LinkedListNode<T>(value);
        previousNode.next.prevoius = previousNode;
        previousNode.next.next = tempNode;
        tempNode.prevoius = previousNode?.next;
        this.legnth++;
        return;
      }
      previousNode = tempNode;
      tempNode = tempNode?.next;
    }
    console.log("provided value is not in linkedlist");
  }

  printNodes() {
    let tempNode: LinkedListNode<T> | null = this.head;

    while (tempNode) {
      console.log(
        `${tempNode.value} => ${tempNode?.prevoius?.value} ${tempNode?.next?.value}`
      );
      tempNode = tempNode?.next;
    }
  }

  print() {
    let tempNode: LinkedListNode<T> | null = this.head;

    while (tempNode) {
      console.log(`index :${tempNode} => value :${tempNode?.value}`);
      tempNode = tempNode!!.next;
    }
  }

  deleteFirst(): T | null {
    let tempNode = this.head;
    if (tempNode.next) {
      this.head = tempNode.next;
      let value = tempNode.value;
      this.head.prevoius = null;
      return value;
    }

    let value = tempNode.value;
    this.head = null;
    return value;
  }

  deleteLast(): T | null {
    let tempNode = this.tail;
    if (tempNode.prevoius) {
      tempNode = this.tail.prevoius;
      let value = tempNode.value;
      this.tail = this.tail.prevoius;
      this.tail.next = null;
      return value;
    }
    let value = tempNode.value;
    this.head = null;
    return value;
  }

  delete(value: T) {
    let tempNode: LinkedListNode<T> | null = null;
    let previousNode: LinkedListNode<T> | null = null;

    if (value == this.head?.value) {
      tempNode = this.head;
      this.head = tempNode?.next;
      this.head!!.prevoius = null;
      this.legnth--;
      return;
    }

    if (value == this.tail?.value) {
      previousNode = this.tail?.prevoius;
      this.tail = previousNode;
      this.tail.next = null;
      this.legnth--;
      return;
    }

    tempNode = this.head!!.next;
    previousNode = this.head;

    for (let i = 1; i < this.legnth - 1; i++) {
      if (tempNode.value == value) {
        previousNode!!.next = tempNode!!.next;
        tempNode!!.prevoius = previousNode;
        this.legnth--;
        return;
      }
      previousNode = tempNode;
      tempNode = tempNode!!.next;
    }

    console.log("provided value is not in linkedlist");
  }
}

export default LinkedList;
