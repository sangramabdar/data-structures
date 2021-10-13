import LinkedList from "./data-structures/linked_list";

let l = new LinkedList<number>();
for (let i = 0; i < 3; i++) {
  l.add(i);
}

l.indexing();
l.delete(1);
l.insert(0, 2);

l.print();
