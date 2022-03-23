class LinkedListNode<T> {
  value: T | null;
  next: LinkedListNode<T> | null = null;
  previous: LinkedListNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

//doubly-linkedList implementation
class LinkedList<T> {
  #head: LinkedListNode<T> | null = null;
  #tail: LinkedListNode<T> | null = null;

  #length: number = 0;

  add(value: T) {
    if (!this.#head) {
      this.insertFirst(value);
      return;
    }
    this.insertLast(value);
  }

  insertAtIndex(index: number, newValue: T) {
    if (!this.#isValidIndex(index)) return;

    if (index === 0) {
      this.insertFirst(newValue);
      return;
    }

    if (index === this.#length - 1) {
      this.insertLast(newValue);
      return;
    }

    let tempNode = this.#getNodeByIndex(index);
    let previousNode = tempNode!!.previous;
    let node = new LinkedListNode(newValue);

    node.previous = previousNode;
    previousNode!!.next = node;
    node.next = tempNode;
    tempNode!!.previous = node;

    this.#length++;
  }

  insertFirst(value: T) {
    let node = new LinkedListNode<T>(value);

    if (!this.#head) {
      this.#head = node;
      this.#tail = node;
      this.#length++;
      return;
    }

    node.next = this.#head;
    this.#head.previous = node;
    this.#head = node;

    this.#length++;
  }

  insertLast(value: T) {
    let node = new LinkedListNode<T>(value);

    if (!this.#tail) {
      this.#tail = node;
      this.#head = node;
      this.#length++;
      return;
    }

    this.#tail.next = node;
    node.previous = this.#tail;
    this.#tail = node;

    this.#length++;
  }

  #isValidIndex(index: number): boolean {
    if (index < 0 || index >= this.#length) {
      console.log("index is out of range");
      return false;
    }
    return true;
  }

  getByIndex(index: number): T | null {
    if (!this.#isValidIndex(index)) return null;

    let localIndex = 0;

    if (localIndex === index) {
      return this.#head!!.value;
    }

    if (index === this.#length - 1) {
      return this.#tail!!.value;
    }

    let tempNode: LinkedListNode<T> | null = this.#head!!.next;
    localIndex++;

    while (tempNode) {
      if (index === localIndex) {
        return tempNode!!.value;
      }
      localIndex++;
      tempNode = tempNode!!.next;
    }
    return null;
  }

  #getNodeByIndex(index: number): LinkedListNode<T> | null {
    if (!this.#isValidIndex(index)) return null;

    let localIndex = 0;

    if (index === localIndex) {
      return this.#head;
    }

    if (index == this.#length - 1) {
      return this.#tail;
    }

    let tempNode: LinkedListNode<T> | null = this.#head!!.next;
    localIndex++;

    while (tempNode != null) {
      if (index === localIndex) {
        return tempNode;
      }
      localIndex++;
      tempNode = tempNode!!.next;
    }
    return null;
  }

  #getNode(value: T): LinkedListNode<T> | null {
    if (!this.#head) {
      return null;
    }

    if (value == this.#head?.value) {
      return this.#head;
    }

    if (value == this.#tail?.value) {
      return this.#tail;
    }

    let tempNode: LinkedListNode<T> | null = this.#head!!.next;

    while (tempNode !== null) {
      if (tempNode?.value == value) {
        return tempNode;
      }
      tempNode = tempNode!!.next;
    }

    return null;
  }

  getHead(): T | null {
    if (this.#head) return this.#head!!.value;
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

  updateAtIndex(index: number, newValue: T) {
    if (!this.#isValidIndex(index)) return;

    let tempNode: LinkedListNode<T> | null = this.#getNodeByIndex(index);
    if (!tempNode) return;

    tempNode!!.value = newValue;
  }

  delete(value: T): T | null {
    if (value == this.#head?.value) {
      return this.deleteFirst();
    }

    if (value == this.#tail?.value) {
      return this.deleteLast();
    }

    let node = this.#getNode(value);

    if (!node) {
      console.log("provided value is not in linkedList");
      return null;
    }

    let result = node.value;
    let nextNode = node.next;
    let previousNode = node.previous;
    previousNode!!.next = nextNode;
    nextNode!!.previous = previousNode;
    return result;
  }

  deleteAtIndex(index: number): T | null {
    if (!this.#isValidIndex(index)) return null;

    if (index === 0) {
      return this.deleteFirst();
    }

    if (index === this.#length - 1) {
      return this.deleteLast();
    }

    let tempNode: LinkedListNode<T> | null = this.#getNodeByIndex(index);
    if (!tempNode) return null;

    let previous = tempNode!!.previous;
    let next = tempNode!!.next;

    previous!!.next = next;
    next!!.previous = previous;

    this.#length--;
    return tempNode!!.value;
  }

  deleteFirst(): T | null {
    if (!this.#head) {
      return null;
    }

    if (this.#head?.next) {
      let value = this.#head?.value;
      this.#head = this.#head?.next;
      this.#head.previous = null;
      this.#length--;
      return value;
    }

    let value = this.#head?.value;
    this.#head = null;
    this.#tail = null;
    this.#length--;
    return value;
  }

  deleteLast(): T | null {
    if (!this.#tail) {
      return null;
    }
    if (this.#tail?.previous) {
      let value = this.#tail?.value;
      this.#tail = this.#tail?.previous;
      this.#tail.next = null;
      this.#length--;
      return value;
    }

    let value = this.#tail?.value;
    this.#tail = null;
    this.#head = null;
    this.#length--;
    return value;
  }

  getAllValues(): T[] {
    let curretNode: LinkedListNode<T> | null = this.#head!!;
    let listOfValues: T[] = [];
    while (curretNode) {
      listOfValues.push(curretNode.value!!);
      curretNode = curretNode?.next;
    }
    return listOfValues;
  }

  indexOf(value: T): number {
    if (!this.#head) return -1;

    if (value == this.#head?.value) {
      return 0;
    }

    if (value == this.#tail?.value) {
      return this.length - 1;
    }

    let tempNode: LinkedListNode<T> | null = this.#head!!.next;
    let localIndex: number = 1;

    while (tempNode != null) {
      if (tempNode?.value == value) {
        return localIndex;
      }
      localIndex++;
      tempNode = tempNode!!.next;
    }
    return -1;
  }

  printNodes() {
    let tempNode: LinkedListNode<T> | null = this.#head;

    while (tempNode) {
      console.log(
        `${tempNode.value} => ${tempNode?.previous?.value} ${tempNode?.next?.value}`
      );
      tempNode = tempNode?.next;
    }
  }

  reverserLinkedList() {
    let current = this.#head;
    let previous: LinkedListNode<T> | null = null;
    let tail = this.#tail;
    let head = this.#head;

    while (current != null) {
      let next = current.next;

      current!!.next = previous;
      current.previous = next;

      previous = current;
      current = next;
    }

    this.#head = tail;
    this.#tail = head;
  }

  get length() {
    return this.#length;
  }
}

export default LinkedList;
