import LinkedList from "./linked_list";
import Queue from "./quene";

class GraphNode<T> {
  index: number;
  value?: T;
}

class Graph<E> {
  graphNodes: Array<LinkedList<GraphNode<E>>> = new Array();
  onlyNodes: Array<GraphNode<E>> = [];
  totalNodes: number = 0;

  addEdge(firstNode: GraphNode<E>, secondNode: GraphNode<E>) {
    if (!this.graphNodes[firstNode.index]) {
      this.onlyNodes[firstNode.index] = firstNode;
      this.graphNodes[firstNode.index] = new LinkedList();
      this.totalNodes++;
    }

    if (!this.graphNodes[secondNode.index]) {
      this.onlyNodes[secondNode.index] = secondNode;
      this.graphNodes[secondNode.index] = new LinkedList();
      this.totalNodes++;
    }

    this.graphNodes[firstNode.index].add(secondNode);
    this.graphNodes[secondNode.index].add(firstNode);
  }

  nodeValidation(node: number) {
    if (node > this.totalNodes) {
      console.log("current node is not there");
      return false;
    }
    return true;
  }

  bfsWithNodes(startNode: GraphNode<E>, endNode: GraphNode<E>) {
    if (!this.graphNodes[startNode.index] || !this.graphNodes[endNode.index])
      return "node is not there";

    let q: Queue<GraphNode<E>> = new Queue();
    let visited: boolean[] = [];

    for (let i = 0; i < this.graphNodes.length; i++) {
      visited[i] = false;
    }
    let path: any = [];

    visited[startNode.index] = true;
    q.enqueue(startNode);
    path.push(startNode);

    //bfs
    while (!q.isEmpty()) {
      let node = q.dequeue()!!;
      if (visited[endNode.index]) break;
      for (let element of this.graphNodes[node.index].getAllValues()) {
        if (!visited[element.index]) {
          visited[element.index] = true;
          q.enqueue(element);
          path.push(element);
        }
      }
    }

    if (!visited[endNode.index]) {
      return "path is not available";
    }
    console.log(path);
    return "path is available";
  }

  bfs() {
    let q: Queue<GraphNode<E>> = new Queue();
    let visited: boolean[] = [];

    for (let i = 0; i < this.graphNodes.length; i++) {
      visited[i] = false;
    }

    let mappedKeys: {} = {};

    for (let j = 0; j < this.onlyNodes.length; j++) {
      if (this.onlyNodes[j]) mappedKeys[j] = j;
    }

    for (let key in mappedKeys) {
      let index = mappedKeys[key];

      if (!visited[index]) {
        visited[index] = true;
        q.enqueue(this.onlyNodes[index]);

        //bfs
        while (!q.isEmpty()) {
          let node = q.dequeue()!!;
          console.log(node.value);

          for (let element of this.graphNodes[node.index].getAllValues()) {
            if (!visited[element.index]) {
              visited[element.index] = true;
              q.enqueue(element);
            }
          }
        }
      }
    }
    console.log(visited);
  }

  dfs() {
    let visited: boolean[] = [];

    for (let i = 0; i < this.graphNodes.length; i++) {
      visited[i] = false;
    }

    let mappedKeys: {} = {};

    for (let j = 0; j < this.onlyNodes.length; j++) {
      if (this.onlyNodes[j]) mappedKeys[j] = j;
    }

    for (let key in mappedKeys) {
      let index = mappedKeys[key];

      if (!visited[index]) {
        //dfs
        this.#dfsRecursiveCall(this.onlyNodes[index], visited);
      }
    }
  }

  #dfsRecursiveCall(node: GraphNode<E>, visited: boolean[]) {
    visited[node.index] = true;
    console.log(node.value);

    for (let element of this.graphNodes[node.index].getAllValues()) {
      if (!visited[element.index]) {
        this.#dfsRecursiveCall(element, visited);
      }
    }
  }

  dfsWithNodes(startNode: GraphNode<E>, endNode: GraphNode<E>) {
    if (!this.graphNodes[startNode.index] || !this.graphNodes[endNode.index])
      return "node is not there";

    let visited: boolean[] = [];

    for (let i = 0; i < this.graphNodes.length; i++) {
      visited[i] = false;
    }
    let path: any = [];

    this.#dfsForNode(startNode, endNode, visited, path);

    if (!visited[endNode.index]) return "path is not available";

    console.log(path);
    return "path is available";
  }

  #dfsForNode(
    node: GraphNode<E>,
    endNode: GraphNode<E>,
    visited: boolean[],
    path: any
  ) {
    if (visited[endNode.index]) return;

    visited[node.index] = true;
    path.push(node);

    for (let element of this.graphNodes[node.index].getAllValues()) {
      if (!visited[element.index]) {
        this.#dfsForNode(element, endNode, visited, path);
      }
    }
  }
}

export default Graph;
