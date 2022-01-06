import LinkedList from "./data-structures/linked_list";

let ll = new LinkedList<string>();
for (let i = 0; i < 100; i++) {
  ll.add(`${i}`);
}
console.log(ll.getByIndex(ll.contains("1000000")));
