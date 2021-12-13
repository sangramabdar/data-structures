import LinkedList from "./linked_list";

class Quene<T> {
  queneNodes: LinkedList<T> = new LinkedList<T>();
  length: number = 0;

  enque(value: T) {
    this.queneNodes.add(value);
    this.length++;
  }

  deqnque(): T | null {
    if (this.length === 0) {
      console.log("quene is empty");
      return null;
    }
    this.length--;
    return this.queneNodes.deleteFirst();
  }

  isEmpty(): boolean {
    if (this.length === 0) {
      return true;
    }
    return false;
  }
}

export default Quene;
