import LinkedList from "./linked_list";
import Quene from "./quene";

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

  bfs(startNode: number): number[] {
    if (!this.nodeValidation(startNode)) return [];

    let q: Quene<number> = new Quene();
    let path: number[] = [];
    let visited: boolean[] = [];

    for (let i = 1; i <= this.totalNodes; i++) {
      visited[i] = false;
    }
    let currentNode = startNode;

    while (true) {
      if (!visited[currentNode]) {
        visited[currentNode] = true;
        q.enque(currentNode);
        path.push(currentNode);

        while (!q.isEmpty()) {
          let node: number = q.deqnque()!!;

          for (let element of this.graphNodes[node].getAllValues()) {
            if (!visited[element]) {
              visited[element] = true;
              path.push(element);
              q.enque(element);
            }
          }
        }
        currentNode = this.checkFalseyValue(visited);
        if (currentNode === -1) {
          break;
        }
      }
    }

    for (let i = 1; i <= this.totalNodes; i++) {
      if (!visited[i]) {
        visited[i] = true;
        q.enque(i);
        path.push(i);

        while (!q.isEmpty()) {
          let node: number = q.deqnque()!!;

          for (let element of this.graphNodes[node].getAllValues()) {
            if (!visited[element]) {
              visited[element] = true;
              path.push(element);
              q.enque(element);
            }
          }
        }
      }
    }

    return path;
  }

  dfsRecursiveCall(node: number, visited: boolean[], path: number[]) {
    visited[node] = true;
    path.push(node);
    for (let element of this.graphNodes[node].getAllValues()) {
      if (!visited[element]) {
        this.dfsRecursiveCall(element, visited, path);
      }
    }
  }

  checkFalseyValue(visited: boolean[]): number {
    for (let i = 1; i <= visited.length; i++) {
      if (visited[i] === false) {
        return i;
      }
    }
    return -1;
  }

  dfs(startNode: number) {
    if (!this.nodeValidation(startNode)) return [];

    let path: number[] = [];
    let visited: boolean[] = [];

    for (let i = 1; i <= this.totalNodes; i++) {
      visited[i] = false;
    }
    let currentNode = startNode;
    while (true) {
      if (!visited[currentNode]) {
        this.dfsRecursiveCall(currentNode, visited, path);
        currentNode = this.checkFalseyValue(visited);
        if (currentNode === -1) {
          console.log("break");
          break;
        }
      }
    }

    return path;
  }
}

export default Graph;
