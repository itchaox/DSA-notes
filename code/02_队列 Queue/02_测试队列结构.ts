/*
 * @desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2023-02-07 15:04:25
 * @LastEditors: wc
 * @LastEditTime: 2023-02-07 15:04:52
 */

import ArrayQueue from "./01_数组实现队列"

const queue = new ArrayQueue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)

console.log("queue", queue)

console.log("queue.dequeue()", queue.dequeue())

console.log("queue.peek()", queue.peek())

console.log("queue.isEmpty()", queue.isEmpty())

console.log("queue.size()", queue.size())
