/*
 * @desc: 实现队列结构
 * @Version: v1.00
 * @Author: wc
 * @Date: 2023-02-07 13:31:04
 * @LastEditors: wc
 * @LastEditTime: 2023-02-07 13:48:56
 */

interface IQueue<T> {
  // 入队列
  enqueue(element: T): void
  // 出队列
  dequeue(): T | undefined
  // 查看队首元素
  peek(): T
  // 判断是否为空
  isEmpty(): boolean
  // 查看元素个数
  size(): number
}

export default IQueue
