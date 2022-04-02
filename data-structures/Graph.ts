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
    node.index = this.totalNodes;
    this.totalNodes++;
    this.nodes.push(node);
  }

  printAllNodes() {
    for (let node of this.nodes) {
      console.log(node);
    }
  }

  bfs() {
    let q: Queue<GraphNode<T>> = new Queue();

    let visited: boolean[] = this.nodes.map(e => false);

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

    let visited: boolean[] = this.nodes.map(e => false);

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

function dfs(graph: Graph<any>) {
  let visited: boolean[] = graph.nodes.map(e => false);
  for (let node of graph.nodes) {
    if (!visited[node.index]) {
      _dfs(node, visited);
    }
  }
}

function _dfs(node: GraphNode<any>, visited: boolean[]) {
  if (visited[node.index]) return;

  visited[node.index] = true;
  console.log(node.value);

  for (let neighbour of node.nodesList) {
    _dfs(neighbour, visited);
  }
}

function countComponents(graph: Graph<any>) {
  let count = 0;
  let visited: boolean[] = graph.nodes.map(e => false);

  for (let node of graph.nodes) {
    if (!visited[node.index]) {
      _countComponents(node, visited);
      count++;
    }
  }
  console.log(count);
}

function _countComponents(node: GraphNode<any>, visited: boolean[]): number {
  if (visited[node.index]) return 0;

  visited[node.index] = true;

  let sum = 1;

  for (let neighbour of node.nodesList) {
    sum += _countComponents(neighbour, visited);
  }

  return sum;
}

function detectCycle(graph: Graph<any>) {
  let visited: boolean[] = graph.nodes.map(e => false);

  for (let node of graph.nodes) {
    if (!visited[node.index]) {
      console.log(_detectCycle(node, visited));
    }
  }
}

function _detectCycle(node: GraphNode<any>, visited: boolean[]): boolean {
  if (visited[node.index]) return true;

  visited[node.index] = true;

  for (let neighbour of node.nodesList) {
    if (_detectCycle(neighbour, visited)) {
      return true;
    }
  }

  return false;
}

let pune = new GraphNode<string>("pune");
let mumbai = new GraphNode<string>("mumbai");
let delhi = new GraphNode<string>("delhi");
let banglore = new GraphNode<string>("banglore");
let chennai = new GraphNode<string>("chennai");
let kashmir = new GraphNode<string>("kashmir");
let london = new GraphNode<string>("london");

pune.connect(mumbai);
pune.connect(chennai);
mumbai.connect(chennai);
chennai.connect(delhi);
banglore.connect(chennai);
kashmir.connect(london);

let graph = new Graph<string>();

graph.addNode(pune);
graph.addNode(mumbai);
graph.addNode(delhi);
graph.addNode(banglore);
graph.addNode(chennai);
graph.addNode(kashmir);
graph.addNode(london);

// graph.bfs();
// console.log();
// graph.dfs();
// console.log();
// graph.dfsWithRecursion();

detectCycle(graph);
export { Graph, GraphNode };
