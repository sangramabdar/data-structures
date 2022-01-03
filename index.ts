import LinkedList from "./data-structures/linked_list";

let list = new LinkedList<number>();

list.add(100);
list.add(299);
list.add(300);

list.insertByindex(1, 3);

console.log(list.length);
