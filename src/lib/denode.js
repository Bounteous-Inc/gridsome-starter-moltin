export default function denode(collection) {
  return collection.edges.map((n) => n.node);
}
