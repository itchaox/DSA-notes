/*
 * @desc: 约瑟夫环
 * @Version: v1.00
 * @Author: wc
 * @Date: 2023-02-07 16:47:39
 * @LastEditors: wc
 * @LastEditTime: 2023-02-09 14:29:48
 */

import ArrayQueue from "./01_数组实现队列"

function luckyGod(n: number, m: number) {
  const queue = new ArrayQueue<number>()

  for (let i = 0; i < n; i++) {
    queue.enqueue(i)
  }

  while (queue.size() > 1) {
    for (let j = 1; j < m; j++) {
      let res = queue.dequeue()
      queue.enqueue(res)
    }
    queue.dequeue()
  }

  return queue.dequeue()
}

console.log(luckyGod(5, 3))
