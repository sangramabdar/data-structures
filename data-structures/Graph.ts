import Queue from "./Queue";
import Stack from "./Stack";

class GraphNode<T> {
  value: T;
  nodesList: GraphNode<T>[] = [];
  index: number = 0;
  constructor(value: T) {
    this.value = value;
  }

  connect(node: GraphNode<T>) {
    this.nodesList.push(node);
    node.nodesList.push(this);
  }
}

class Graph<T> {
  nodes: Array<GraphNode<T>> = [];
  totalNodes: number = 0;

  addNode(node: GraphNode<T>) {
    this.totalNodes++;
    node.index = this.totalNodes;
    this.nodes.push(node);
  }

  printAllNodes() {
    for (let node of this.nodes) {
      console.log(node);
    }
  }

  bfs() {
    let q: Queue<GraphNode<T>> = new Queue();

    let visited: boolean[] = [];
    for (let node of this.nodes) {
      visited[node.index] = false;
    }

    for (let node of this.nodes) {
      if (!visited[node.index]) {
        q.enqueue(node);
        while (!q.isEmpty) {
          let node = q.dequeue();
          if (visited[node!!.index]) continue;
          visited[node!!.index] = true;
          console.log(node!!.value);
          for (let neighbour of node!!.nodesList) {
            q.enqueue(neighbour);
          }
        }
      }
    }
  }

  dfs() {
    let s: Stack<GraphNode<T>> = new Stack();

    let visited: boolean[] = [];
    for (let node of this.nodes) {
      visited[node.index] = false;
    }

    for (let node of this.nodes) {
      if (!visited[node.index]) {
        s.push(node);

        while (!s.isEmpty) {
          let node = s.pop()!!;

          if (visited[node.index]) continue;
          visited[node.index] = true;
          console.log(node.value);
          for (let neighbour of node.nodesList) {
            s.push(neighbour);
          }
        }
      }
    }
  }

  dfsWithRecursion() {
    let visited: boolean[] = [];
    for (let node of this.nodes) {
      visited[node.index] = false;
    }

    for (let node of this.nodes) {
      if (!visited[node.index]) {
        this._dfsWithRecursion(node, visited);
      }
    }
  }

  _dfsWithRecursion(node: GraphNode<T>, visited: boolean[]) {
    if (visited[node.index]) return;
    visited[node.index] = true;
    console.log(node.value);
    for (let neighbour of node.nodesList) {
      this._dfsWithRecursion(neighbour, visited);
    }
  }
}

let pune = new GraphNode<string>("pune");
let mumbai = new GraphNode<string>("mumbai");
let delhi = new GraphNode<string>("delhi");
let banglore = new GraphNode<string>("banglore");
let chennai = new GraphNode<string>("chennai");
let kashmir = new GraphNode<string>("kashmir");

pune.connect(mumbai);
pune.connect(chennai);
mumbai.connect(chennai);
chennai.connect(delhi);
banglore.connect(chennai);

let graph = new Graph<string>();

graph.addNode(pune);
graph.addNode(mumbai);
graph.addNode(delhi);
graph.addNode(banglore);
graph.addNode(chennai);
graph.addNode(kashmir);

graph.bfs();
console.log();
graph.dfs();
console.log();
graph.dfsWithRecursion();

export { Graph, GraphNode };
