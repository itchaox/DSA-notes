/*
 * @desc: 击鼓传花游戏
 * @Version: v1.00
 * @Author: wc
 * @Date: 2023-02-07 15:06:01
 * @LastEditors: wc
 * @LastEditTime: 2023-02-07 15:54:18
 */

import ArrayQueue from "./01_数组实现队列"

function game(nameList: string[], specialNumber: number) {
  // 创建队列
  const queue = new ArrayQueue<string>()

  // 将数据存入队列
  for (let name of nameList) {
    queue.enqueue(name)
  }

  // 队列元素个数为1，则停止循环
  while (queue.size() > 1) {
    for (let i = 1; i < specialNumber; i++) {
      // 到达特殊值前，先出队列，再入队列
      const name = queue.dequeue()
      queue.enqueue(name)
    }
    // 到达特殊值，只出队列
    queue.dequeue()
  }

  return queue.peek()
}

let nameList = ["itchao", "coderwhy", "kobe", "james", "curry", "green"]
const res = game(nameList, 3)
console.log("res", res)
