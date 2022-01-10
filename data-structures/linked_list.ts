class LinkedListNode<T> {
  value: T | null;
  next: LinkedListNode<T> | null = null;
  prevoius: LinkedListNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

//doubly-linkedlist implementation
class LinkedList<T> {
  #head: LinkedListNode<T> | null = null;
  #tail: LinkedListNode<T> | null = null;

  #length: number = 0;
  length: number = 0;

  add(value: T) {
    if (!this.#head) {
      this.inserFirst(value);
      return;
    }
    this.insertLast(value);
  }

  insertAtindex(index: number, newValue: T) {
    if (!this.#isValidIndex(index)) return;

    let localIndex = 0;

    if (index === localIndex) {
      this.inserFirst(newValue);
      return;
    }

    if (index === this.#length - 1) {
      this.insertLast(newValue);
      return;
    }

    let tempNode = this.#getNodeByIndex(index);
    let previosNode = tempNode!!.prevoius;
    let node = new LinkedListNode(newValue);

    node.prevoius = previosNode;
    previosNode!!.next = node;
    node.next = tempNode;
    tempNode!!.prevoius = node;

    this.#length++;
    this.length = this.#length;
  }

  inserFirst(value: T) {
    let node = new LinkedListNode<T>(value);

    if (!this.#head) {
      this.#head = node;
      this.#tail = node;
      this.#length++;
      this.length = this.#length;
      return;
    }

    node.next = this.#head;
    this.#head.prevoius = node;
    this.#head = node;

    this.#length++;
    this.length = this.#length;
  }

  insertLast(value: T) {
    let node = new LinkedListNode<T>(value);

    if (!this.#tail) {
      this.#tail = node;
      this.#head = node;
      this.#length++;
      this.length = this.#length;
      return;
    }

    this.#tail.next = node;
    node.prevoius = this.#tail;
    this.#tail = node;

    this.#length++;
    this.length = this.#length;
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

    while (tempNode) {
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
      console.log("provided value is not in linkedlist");
      return null;
    }

    let result = node.value;
    let nextNode = node.next;
    let previousNode = node.prevoius;
    previousNode!!.next = nextNode;
    nextNode!!.prevoius = previousNode;
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

    let previous = tempNode!!.prevoius;
    let next = tempNode!!.next;

    previous!!.next = next;
    next!!.prevoius = previous;

    this.#length--;
    this.length = this.#length;
    return tempNode!!.value;
  }

  deleteFirst(): T | null {
    if (!this.#head) {
      return null;
    }

    if (this.#head?.next) {
      let value = this.#head?.value;
      this.#head = this.#head?.next;
      this.#head.prevoius = null;
      this.#length--;
      this.length = this.#length;
      return value;
    }

    let value = this.#head?.value;
    this.#head = null;
    this.#tail = null;
    this.#length--;
    this.length = this.#length;
    return value;
  }

  deleteLast(): T | null {
    if (!this.#tail) {
      return null;
    }
    if (this.#tail?.prevoius) {
      let value = this.#tail?.value;
      this.#tail = this.#tail?.prevoius;
      this.#tail.next = null;
      this.#length--;
      this.length = this.#length;
      return value;
    }

    let value = this.#tail?.value;
    this.#tail = null;
    this.#head = null;
    this.#length--;
    this.length = this.#length;
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
        `${tempNode.value} => ${tempNode?.prevoius?.value} ${tempNode?.next?.value}`
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
      current.prevoius = next;

      previous = current;
      current = next;
    }

    this.#head = tail;
    this.#tail = head;
  }
}

export default LinkedList;
