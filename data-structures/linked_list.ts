class LLNode<T> {
  index: number;
  value: T;
  next: LinkedListNode<T> = null;

  constructor(index: number, value: T) {
    this.index = index;
    this.value = value;
  }
}

type LinkedListNode<T> = LLNode<T> | null;

class LinkedList<T> {
  private head: LinkedListNode<T> = null;
  private tail: LinkedListNode<T> = null;
  legnth: number = 0;

  add(value: T) {
    if (!this.head) {
      this.head = new LLNode<T>(this.legnth, value);
      this.legnth++;
      return;
    }

    if (!this.tail) {
      this.head!!.next = new LLNode<T>(this.legnth, value);
      this.tail = this.head!!.next;
      this.legnth++;
      return;
    }

    let tempNode: LinkedListNode<T> = this.tail;

    tempNode!!.next = new LLNode<T>(this.legnth, value);
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

    let tempNode: LinkedListNode<T> = this.head!!.next;
    for (let i = 1; i <= this.legnth - 2; i++) {
      if (tempNode!!.index == index) {
        return tempNode!!.value;
      }
      tempNode = tempNode!!.next;
    }

    return null;
  }

  private getNode(index: number): LinkedListNode<T> {
    if (index == this.head!!.index) {
      return this.head!!;
    }

    if (index == this.tail!!.index) {
      return this.tail!!;
    }

    let tempNode: LinkedListNode<T> = this.head!!.next;
    for (let i = 1; i < this.legnth - 1; i++) {
      if (tempNode!!.index == index) {
        return tempNode!!;
      }
      tempNode = tempNode!!.next;
    }

    return null;
  }

  update(index: number, value: T) {
    let tempNode: LinkedListNode<T> = this.getNode(index);
    if (!tempNode) {
      console.log("index number is invalid");
      return;
    }
    tempNode!!.value = value;
    console.log("element is updated");
  }

  insert(index: number, value: T) {
    if (this.isValidIndex(index)) {
      if (index <= 0) {
        console.log("first add  minimum 2 elements in linkedlist");
      }
      return;
    }

    let tempNode: LinkedListNode<T>;

    if (index == this.head!!.index) {
      tempNode = this.head!!;
      this.head = new LLNode<T>(index, value);
      this.head!!.next = tempNode;
      this.legnth++;
      return;
    }

    if (index == this.tail!!.index) {
      tempNode = this.tail!!;
      this.tail = new LLNode<T>(index, value);
      this.tail.index++;
      tempNode.next = this.tail;
      this.legnth++;
      return;
    }

    tempNode = this.head!!.next;
    let previousNode: LinkedListNode<T> = this.head!!.next;

    for (let i = 1; i < this.legnth - 1; i++) {
      if (tempNode!!.index == index) {
        previousNode!!.next = new LLNode<T>(index, value);
        previousNode!!.next!!.next = tempNode;
        this.legnth++;
        this.indexing(tempNode!!, i + 1, this.legnth);
        break;
      }
      previousNode = tempNode;
      tempNode = tempNode!!.next;
    }
  }

  print() {
    let tempNode: LinkedListNode<T> = this.head!!;
    for (let i = 0; i < this.legnth; i++) {
      console.log(`${tempNode!!.index} => ${tempNode!!.value}`);
      tempNode = tempNode!!.next;
    }
  }

  private indexing(node: LinkedListNode<T>, include: number, exclude: number) {
    let tempNode: LinkedListNode<T> = node;
    for (let i = include; i < exclude; i++) {
      if (!tempNode) {
        break;
      }
      tempNode!!.index = i;
      tempNode = tempNode!!.next;
    }
  }

  deleteTail() {
    this.tail = null;
  }

  delete(index: number) {
    if (this.isValidIndex(index)) {
      return;
    }

    let tempNode: LinkedListNode<T>;

    if (index == this.head!!.index) {
      tempNode = this.head!!;
      this.head = tempNode!!.next;
      this.legnth--;
      this.indexing(this.head!!, index, this.legnth);
      return;
    }

    if (index == this.tail!!.index) {
      tempNode = this.getNode(index - 1);
      this.tail = tempNode;
      this.legnth--;
      return;
    }

    tempNode = this.head!!.next;
    let previousNode: LinkedListNode<T>;

    for (let i = 1; i < this.legnth - 1; i++) {
      if (tempNode!!.index == index) {
        if (index == 1) {
          this.head!!.next = tempNode!!.next;
          this.legnth--;
          this.indexing(tempNode!!.next, i, this.legnth);
          break;
        }
        previousNode!!.next = tempNode!!.next;
        this.legnth--;
        this.indexing(tempNode!!.next, i, this.legnth);
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
