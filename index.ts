import Graph from "./data-structures/graph";

let graph = new Graph();

graph.addEdge(2, 4);
graph.addEdge(1, 4);
graph.addEdge(1, 5);
graph.addEdge(4, 7);
graph.addEdge(7, 10);
graph.addEdge(10, 11);
graph.addEdge(11, 100);
console.log(graph.dfsWithNodes(1, 100));
graph.bfs
