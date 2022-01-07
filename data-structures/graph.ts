import LinkedList from "./linked_list";
import Queue from "./quene";

class Graph {
  graphNodes: Array<LinkedList<number>> = new Array();

  totalNodes: number = 0;

  addEdge(firstNode: number, secondNode: number) {
    if (!this.graphNodes[firstNode]) {
      this.graphNodes[firstNode] = new LinkedList();
      this.totalNodes++;
    }

    if (!this.graphNodes[secondNode]) {
      this.graphNodes[secondNode] = new LinkedList();
      this.totalNodes++;
    }

    this.graphNodes[firstNode].add(secondNode);
    this.graphNodes[secondNode].add(firstNode);
  }

  nodeValidation(node: number) {
    if (node > this.totalNodes) {
      console.log("current node is not there");
      return false;
    }
    return true;
  }

  bfsWithNodes(startNode: number, endNode: number) {
    if (!this.graphNodes[startNode] || !this.graphNodes[endNode])
      return "node is not there";

    let q: Queue<number> = new Queue();
    let visited: boolean[] = [];

    for (let i = 1; i <= this.totalNodes; i++) {
      visited[i] = false;
    }
    let path: number[] = [];

    visited[startNode] = true;
    q.enque(startNode);
    path.push(startNode);

    //bfs
    while (!q.isEmpty()) {
      let node: number = q.deqnque()!!;
      if (visited[endNode]) break;
      for (let element of this.graphNodes[node].getAllValues()) {
        if (!visited[element]) {
          visited[element] = true;
          q.enque(element);
          path.push(element);
        }
      }
    }
    if (!visited[endNode]) {
      return "path is not available";
    }
    console.log(path);
    return "path is available";
  }

  bfs(startNode: number) {
    if (!this.nodeValidation(startNode)) return [];

    let q: Queue<number> = new Queue();
    let visited: boolean[] = [];

    for (let i = 1; i <= this.totalNodes; i++) {
      visited[i] = false;
    }

    for (let i = 1; i < this.graphNodes.length; i++) {
      if (!this.graphNodes[i]) continue;

      if (!visited[i]) {
        visited[i] = true;
        q.enque(i);

        //bfs
        while (!q.isEmpty()) {
          let node: number = q.deqnque()!!;
          console.log(node);
          if (!this.graphNodes[node]) continue;
          for (let element of this.graphNodes[node].getAllValues()) {
            if (!visited[element]) {
              visited[element] = true;
              q.enque(element);
            }
          }
        }
      }
    }
  }

  #dfsRecursiveCall(node: number, visited: boolean[]) {
    if (!this.graphNodes[node]) return;

    visited[node] = true;
    console.log(node);

    for (let element of this.graphNodes[node].getAllValues()) {
      if (!visited[element]) {
        this.#dfsRecursiveCall(element, visited);
      }
    }
  }

  dfsWithNodes(startNode: number, endNode: number) {
    if (!this.graphNodes[startNode] || !this.graphNodes[endNode])
      return "node is not there";

    let visited: boolean[] = [];

    for (let i = 1; i <= this.totalNodes; i++) {
      visited[i] = false;
    }
    let path: number[] = [];

    this.#dfsForNode(startNode, endNode, visited, path);

    if (!visited[endNode]) return "path is not available";

    console.log(path);
    return "path is available";
  }

  #dfsForNode(
    node: number,
    endNode: number,
    visited: boolean[],
    path: number[]
  ) {
    if (visited[endNode]) return;

    visited[node] = true;
    path.push(node);

    for (let element of this.graphNodes[node].getAllValues()) {
      if (!visited[element]) {
        this.#dfsForNode(element, endNode, visited, path);
      }
    }
  }
  dfs(startNode: number) {
    if (!this.nodeValidation(startNode)) return;

    let visited: boolean[] = [];

    for (let i = 1; i <= this.totalNodes; i++) {
      visited[i] = false;
    }

    for (let i = 1; i < this.graphNodes.length; i++) {
      if (!this.graphNodes[i]) continue;

      if (!visited[i]) {
        //dfs
        this.#dfsRecursiveCall(i, visited);
      }
    }
  }
}

export default Graph;
