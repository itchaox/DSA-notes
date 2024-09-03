/*
 * @Version    : v1.00
 * @Author     : wangchao
 * @Date       : 2023-10-09 15:49
 * @LastAuthor : wangchao
 * @LastTime   : 2023-10-09 16:44
 * @desc       : 求最后剩下的数字
 */

import ArrayQueue from "./01_ArrayQueue";

function lastRemain(n: number, m: number): number {
  const queue = new ArrayQueue<number>();

  for (let i = 0; i < n; i++) {
    queue.enqueue(i);
  }

  while (queue.size() > 1) {
    for (let j = 1; j < m; j++) {
      let data = queue.dequeue()!;
      queue.enqueue(data);
    }

    queue.dequeue();
  }

  return queue.dequeue()!;
}

console.log(lastRemain(5, 3));
console.log(lastRemain(10, 17));
