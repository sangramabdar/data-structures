import BinaryTree from "./data-structures/binaryTree";
import BTNode from "./data-structures/binaryTree";

let tree: BinaryTree<number> = new BinaryTree(5);

for (let i = 1; i <= 10; i++) {
  if (5 == i) {
    continue;
  }
  tree.addNode(i);
}

tree.printNodes();
