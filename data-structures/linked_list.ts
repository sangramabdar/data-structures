class LinkedListNode<T> {
  index: number;
  value: T;
  next: LinkedListNode<T> | null = null;
  prevoius: LinkedListNode<T> | null = null;

  constructor(index: number, value: T) {
    this.index = index;
    this.value = value;
  }
}

class LinkedList<T> {
  private head: LinkedListNode<T> | null = null;
  private tail: LinkedListNode<T> | null = null;

  legnth: number = 0;

  add(value: T) {
    if (!this.head) {
      this.head = new LinkedListNode<T>(this.legnth, value);
      this.head.prevoius = null;
      this.legnth++;
      return;
    }

    if (!this.tail) {
      this.head!!.next = new LinkedListNode<T>(this.legnth, value);
      this.tail!! = this.head!!.next;
      this.tail.prevoius = this.head;
      this.legnth++;
      return;
    }

    let tempNode: LinkedListNode<T> | null = this.tail!!;

    tempNode.next = new LinkedListNode<T>(this.legnth, value);
    tempNode.next.prevoius = tempNode;

    this.tail = tempNode!!.next;

    this.legnth++;
  }

  get(index: number): T | null {
    if (this.isValidIndex(index)) {
      return null;
    }

    if (index == this.head!!.index) {
      return this.head!!.value;
    }

    if (index == this.tail!!.index) {
      return this.tail!!.value;
    }

    let tempNode: LinkedListNode<T> | null = this.head!!.next;
    for (let i = 1; i <= this.legnth - 2; i++) {
      if (tempNode!!.index == index) {
        return tempNode!!.value;
      }
      tempNode = tempNode!!.next;
    }

    return null;
  }

  private getNode(index: number): LinkedListNode<T> | null {
    if (index == this.head!!.index) {
      return this.head!!;
    }

    if (index == this.tail!!.index) {
      return this.tail!!;
    }

    let tempNode: LinkedListNode<T> | null = this.head!!.next;
    for (let i = 1; i < this.legnth - 1; i++) {
      if (tempNode!!.index == index) {
        return tempNode!!;
      }
      tempNode = tempNode!!.next;
    }

    return null;
  }

  update(index: number, value: T) {
    let tempNode: LinkedListNode<T> | null = this.getNode(index);
    if (!tempNode) {
      console.log("index number is invalid");
      return;
    }
    tempNode!!.value = value;
    console.log("element is updated");
  }

  insert(index: number, value: T) {
    this.showError();

    if (this.isValidIndex(index)) {
      return;
    }

    let tempNode: LinkedListNode<T> | null;
    let previousNode: LinkedListNode<T> | null = null;

    if (index == this.head!!.index) {
      tempNode = this.head!!;
      this.head = new LinkedListNode<T>(index, value);
      this.head!!.next = tempNode;
      tempNode.prevoius = this.head;
      this.legnth++;
      this.indexing();
      return;
    }

    if (index == this.tail!!.index) {
      tempNode = this.tail!!;
      previousNode = this.tail!!.prevoius;

      previousNode!!.next = new LinkedListNode<T>(index, value);
      previousNode!!.next.prevoius = previousNode;

      previousNode!!.next.next = tempNode;
      tempNode.prevoius = previousNode!!.next;

      this.tail = tempNode;
      this.tail.index = this.legnth;

      this.legnth++;

      return;
    }

    tempNode = this.head!!.next;
    previousNode = this.head;
    for (let i = 1; i < this.legnth - 1; i++) {
      if (tempNode!!.index == index) {
        previousNode!!.next = new LinkedListNode<T>(index, value);
        previousNode!!.next.prevoius = previousNode;
        previousNode!!.next!!.next = tempNode;
        tempNode!!.prevoius = previousNode!!.next;
        this.legnth++;
        this.indexing();
        break;
      }
      previousNode = tempNode;
      tempNode = tempNode!!.next;
    }
  }

  printNodes() {
    let tempNode: LinkedListNode<T> | null = this.head!!;
    for (let i = 0; i < this.legnth; i++) {
      console.log(
        `${tempNode?.index} => ${tempNode?.prevoius?.index} ${tempNode?.next?.index}`
      );
      if (i == this.legnth - 2) {
        break;
      }
      tempNode = tempNode!!.next;
    }
  }

  print() {
    let tempNode: LinkedListNode<T> | null = this.head!!;
    for (let i = 0; i < this.legnth; i++) {
      console.log(`${tempNode?.index} => ${tempNode?.value}`);
      if (i == this.legnth - 2) {
        break;
      }
      tempNode = tempNode!!.next;
    }
  }

  showError() {
    if (this.legnth < 2) {
      throw new Error(
        "plz add minimum two elements by using add method , then perform this operation"
      );
    }
  }

  indexing() {
    this.showError();

    let length = this.legnth / 2;
    let indexSting = `${length}`;

    length = parseInt(indexSting);

    let currentNode: LinkedListNode<T> | null = this.head;
    let nextNode: LinkedListNode<T> | null = this.head?.next!!;
    let index = 0;
    for (let i = 0; i < length; i++) {
      currentNode!!.index = index;
      nextNode!!.index = index + 1;

      //event number operation
      if (this.legnth % 2 == 0) {
        break;
      }

      currentNode = nextNode?.next!!;
      nextNode = nextNode!!.next!!.next;
      index = index + 2;
    }

    this.tail!!.index = this.legnth - 1;
  }

  deleteTail() {
    this.tail = null;
  }

  delete(index: number) {
    this.showError();
    if (this.isValidIndex(index)) {
      return;
    }
    let tempNode: LinkedListNode<T> | null = null;
    let previousNode: LinkedListNode<T> | null = null;

    if (index == this.head!!.index) {
      tempNode = this.head;
      this.head = tempNode!!.next;
      this.head!!.prevoius = null;
      this.legnth--;
      this.indexing();
      return;
    }

    if (index == this.tail!!.index) {
      previousNode = this.tail!!.prevoius;
      this.tail = previousNode!!.next;
      this.legnth--;
      return;
    }

    tempNode = this.head!!.next;
    previousNode = this.head;
    for (let i = 1; i < this.legnth - 1; i++) {
      if (tempNode?.index == index) {
        previousNode!!.next = tempNode!!.next;
        tempNode!!.prevoius = previousNode;
        this.legnth--;
        this.indexing();
        break;
      }
      previousNode = tempNode;
      tempNode = tempNode!!.next;
    }
  }

  private isValidIndex(index: number): boolean {
    if (index >= this.legnth || index < 0) {
      console.log(
        `out of range , provide plz number between ${0} and ${this.legnth - 1}`
      );
      return true;
    }
    return false;
  }
}

export default LinkedList;
