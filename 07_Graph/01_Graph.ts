/*
 * @Version    : v1.00
 * @Author     : wangchao
 * @Date       : 2023-11-15 16:37
 * @LastAuthor : wangchao
 * @LastTime   : 2023-11-17 13:22
 * @desc       : 图结构
 */

class Graph<T> {
  // 顶点
  private verteces: T[] = [];
  // 边：邻接表
  private adjList: Map<T, T[]> = new Map();

  /**
   * @desc  : 新增顶点
   * @param  {T} vertex：顶点
   * @return {any}
   */
  addVertex(vertex: T) {
    //  插入顶点
    this.verteces.push(vertex);

    //  给新顶点增加领接表
    this.adjList.set(vertex, []);
  }

  /**
   * @desc  : 添加边
   * @param  {T} v1：第一条边
   * @param  {T} v2：第二条边
   */
  addEdge(v1: T, v2: T) {
    // 无向图
    this.adjList.get(v1)?.push(v2);
    this.adjList.get(v2)?.push(v1);
  }

  /**
   * @desc  : 遍历边
   */
  traverse() {
    console.log("图解构: ");
    this.verteces.forEach((vertex) => {
      const edges = this.adjList.get(vertex);
      console.log(`${vertex} -> ${edges?.join(" ")}`);
    });
  }

  /**
   * @desc  : 广度优先搜索
   */
  bfs() {
    // 无顶点，则退出
    if (this.verteces.length === 0) return;

    // 创建队列，存放访问的每个节点
    const queue: T[] = [];
    queue.push(this.verteces[0]);

    // 创建 Set 结构，记录某个节点是否被访问过
    const visited = new Set<T>();
    visited.add(this.verteces[0]);

    while (queue.length) {
      const vertex = queue.shift()!;
      console.log("🚀  vertex:", vertex);

      const neighbors = this.adjList.get(vertex);
      if (!neighbors) continue;
      for (const nei of neighbors) {
        if (!visited.has(nei)) {
          visited.add(nei);
          queue.push(nei);
        }
      }
    }
  }

  /**
   * @desc  : 深度优先搜索
   */
  dfs() {
    if (this.verteces.length === 0) return;

    const stack: T[] = [];
    stack.push(this.verteces[0]);

    const visited = new Set<T>();
    visited.add(this.verteces[0]);

    while (stack.length) {
      const vertex = stack.pop()!;
      console.log("🚀  vertex:", vertex);

      const neighbors = this.adjList.get(vertex);
      if (!neighbors) continue;
      for (let i = neighbors.length - 1; i >= 0; i--) {
        const nei = neighbors[i];
        if (!visited.has(nei)) {
          visited.add(nei);
          stack.push(nei);
        }
      }
    }
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addVertex("G");
graph.addVertex("H");
graph.addVertex("I");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");

graph.traverse();
graph.bfs();
graph.dfs();
