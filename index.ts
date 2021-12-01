import LinkedList from "./data-structures/linked_list";

let linkedList = new LinkedList<number>();
linkedList.inserFirst(1);
linkedList.deleteLast();
console.log(linkedList.delete(1));
linkedList.printNodes();
