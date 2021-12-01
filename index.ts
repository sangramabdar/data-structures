import LinkedList from "./data-structures/linked_list";

let list = new LinkedList<number>();
list.add(10);
list.add(200);
list.add(300);
list.add(400);
list.delete(2);
list.print();
