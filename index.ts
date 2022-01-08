import LinkedList from "./data-structures/linked_list";

let ll = new LinkedList<number>();

for (let i = 1; i <= 10; i++) {
  ll.add(i);
}

ll.reverserLinkedList();
ll.printNodes();
console.log(ll.getAllValues());
