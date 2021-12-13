import Graph from "./data-structures/graph";

let graph = new Graph();

graph.addEdge(1, 2);

graph.addEdge(1, 3);

graph.addEdge(1, 4);

graph.addEdge(2, 4);

graph.addEdge(4, 5);

graph.addEdge(5, 3);

graph.addEdge(3, 2);

graph.addEdge(6, 7);

// graph.addEdge(, 7);

console.log(graph.dfs(2));

console.log(graph.bfs(2));
