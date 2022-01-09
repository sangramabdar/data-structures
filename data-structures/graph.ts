import LinkedList from "./linked_list";
import Queue from "./quene";

class GraphNode<T> {
  index: number;
  value?: T;
}

class Graph<E> {
  graph: Array<LinkedList<GraphNode<E>>> = new Array();
  nodes: Array<GraphNode<E>> = [];
  totalNodes: number = 0;

  addNode(node: GraphNode<E>) {
    this.graph[node.index] = new LinkedList();
    this.nodes[node.index] = node;
    this.totalNodes++;
  }

  addEdge(firstNode: GraphNode<E>, secondNode: GraphNode<E>) {
    if (!this.graph[firstNode.index]) {
      this.addNode(firstNode);
    }

    if (!this.graph[secondNode.index]) {
      this.addNode(secondNode);
    }

    this.graph[firstNode.index].add(secondNode);
    this.graph[secondNode.index].add(firstNode);
  }

  // bfsWithNodes(startNode: GraphNode<E>, endNode: GraphNode<E>) {
  //   if (!this.graph[startNode.index] || !this.graph[endNode.index])
  //     return "node is not there";

  //   let q: Queue<GraphNode<E>> = new Queue();
  //   let visited: boolean[] = [];

  //   for (let i = 0; i < this.graph.length; i++) {
  //     visited[i] = false;
  //   }
  //   let path: any = [];

  //   visited[startNode.index] = true;
  //   q.enqueue(startNode);
  //   path.push(startNode);

  //   //bfs
  //   while (!q.isEmpty()) {
  //     let node = q.dequeue()!!;
  //     if (visited[endNode.index]) break;
  //     for (let element of this.graph[node.index].getAllValues()) {
  //       if (!visited[element.index]) {
  //         visited[element.index] = true;
  //         q.enqueue(element);
  //         path.push(element);
  //       }
  //     }
  //   }

  //   if (!visited[endNode.index]) {
  //     return "path is not available";
  //   }
  //   console.log(path);
  //   return "path is available";
  // }

  getIndexes() {
    let mappedKeys: {} = {};

    for (let j = 0; j < this.nodes.length; j++) {
      if (this.nodes[j]) mappedKeys[j] = j;
    }
    return mappedKeys;
  }

  bfs() {
    let q: Queue<GraphNode<E>> = new Queue();
    let visited: boolean[] = [];

    for (let i = 0; i < this.graph.length; i++) {
      visited[i] = false;
    }

    let mappedKeys: {} = this.getIndexes();

    for (let key in mappedKeys) {
      let index = mappedKeys[key];

      if (!visited[index]) {
        visited[index] = true;
        q.enqueue(this.nodes[index]);

        //bfs
        while (!q.isEmpty()) {
          let node = q.dequeue()!!;
          console.log(node.value);

          for (let element of this.graph[node.index].getAllValues()) {
            if (!visited[element.index]) {
              visited[element.index] = true;
              q.enqueue(element);
            }
          }
        }
      }
    }
  }

  dfs() {
    let visited: boolean[] = [];

    for (let i = 0; i < this.graph.length; i++) {
      visited[i] = false;
    }

    let mappedKeys: {} = this.getIndexes();

    for (let key in mappedKeys) {
      let index = mappedKeys[key];

      if (!visited[index]) {
        //dfs
        this.#dfsRecursiveCall(this.nodes[index], visited);
      }
    }
  }

  #dfsRecursiveCall(node: GraphNode<E>, visited: boolean[]) {
    visited[node.index] = true;
    console.log(node.value);

    for (let element of this.graph[node.index].getAllValues()) {
      if (!visited[element.index]) {
        this.#dfsRecursiveCall(element, visited);
      }
    }
  }

  // dfsWithNodes(startNode: GraphNode<E>, endNode: GraphNode<E>) {
  //   if (!this.graph[startNode.index] || !this.graph[endNode.index])
  //     return "node is not there";

  //   let visited: boolean[] = [];

  //   for (let i = 0; i < this.graph.length; i++) {
  //     visited[i] = false;
  //   }
  //   let path: any = [];

  //   this.#dfsForNode(startNode, endNode, visited, path);

  //   if (!visited[endNode.index]) return "path is not available";

  //   console.log(path);
  //   return "path is available";
  // }

  // #dfsForNode(
  //   node: GraphNode<E>,
  //   endNode: GraphNode<E>,
  //   visited: boolean[],
  //   path: any
  // ) {
  //   if (visited[endNode.index]) return;

  //   visited[node.index] = true;
  //   path.push(node);

  //   for (let element of this.graph[node.index].getAllValues()) {
  //     if (!visited[element.index]) {
  //       this.#dfsForNode(element, endNode, visited, path);
  //     }
  //   }
  // }
}

export default Graph;
