import Graph from "./data-structures/graph";

let graph = new Graph<string>();

graph.addEdge({ index: 12, value: "puneewe" }, { index: 11, value: "mumbai" });
graph.addEdge({ index: 101, value: "Delhi" }, { index: 110, value: "chennai" });
graph.addEdge({ index: 11, value: "mumbai" }, { index: 110, value: "chennai" });
graph.addEdge({ index: 0, value: "pune" }, { index: 110, value: "chennai" });
// console.log(
//   graph.dfsWithNodes(
//     {
//       index: 0,
//       value: "pune",
//     },
//     {
//       index: 110,
//       value: "delhi",
//     }
//   )
// );

// console.log(
//   graph.bfsWithNodes(
//     {
//       index: 0,
//       value: "pune",
//     },
//     {
//       index: 110,
//       value: "chennai",
//     }
//   )
// );

graph.dfs();
