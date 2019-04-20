function bfs(rootNode, vertices, edges){

}


function findAdjacent(node, vertices, edges) {
  let adjacentNode = edges.filter(edgeLinked => edgeLinked.includes(node))
  .map(edgeLinked => edgeLinked.filter(vertex => vertex !== node))
  .map(vertex => vertex[0])
  return vertices.filter(vertex => adjacentNode.includes(vertex.name)
  && vertex.distance == null)

}
