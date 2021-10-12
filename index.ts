import LinkedList from "./data-structures/linked_list";

let l = new LinkedList<string>();
l.add("sam");
l.add("ganesh");
l.add("chirag");
l.add("vicky");
l.insert(3, "sangram");
l.insert(2, "akshay");
// l.insert(3, "sddsdasd");
// l.delete(0);
l.delete(0);
// l.print();
console.log();
l.printNodes();
