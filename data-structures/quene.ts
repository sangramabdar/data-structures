import LinkedList from "./linked_list";

class Quene<T> {
  queneNodes: LinkedList<T> = new LinkedList<T>();
  length: number = 0;

  enque(value: T) {
    this.queneNodes.add(value);
    this.length++;
  }

  deqnque(): T | null {
    if (this.length <= 0) {
      console.log("quene is empty");
      this.queneNodes.deleteTail();
      return null;
    }
    let tempNode = this.queneNodes.get(0);
    this.queneNodes.delete(0);
    this.length--;
    return tempNode;
  }
}

export default Quene;
