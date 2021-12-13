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

  bfs(startNode: number): number[] {
    if (startNode > this.totalNodes) {
      console.log("current node is not there");
      return [];
    }
    let q: Quene<number> = new Quene();
    let path: number[] = [];
    let visited: boolean[] = [];

    for (let i = 1; i <= this.totalNodes; i++) {
      visited[i] = false;
    }

    for (let i = 1; i <= this.totalNodes; i++) {
      if (!visited[i]) {
        visited[i] = true;
        q.enque(i);
        path.push(i);

        while (!q.isEmpty()) {
          let value: number = q.deqnque()!!;

          for (let element of this.graphNodes[value].getAllValues()) {
            if (!visited[element]) {
              visited[element] = true;
              path.push(element);
              q.enque(element);
            }
          }
        }
      }
    }
    console.log(path);
    return path;
  }
}

export default Graph;
