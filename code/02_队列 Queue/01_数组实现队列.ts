/*
 * @desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2023-02-07 13:19:59
 * @LastEditors: wc
 * @LastEditTime: 2023-02-07 13:56:38
 */

/**
 * 队列实现方式：
 *  1. 数组
 *  2. 链表
 */

// ! 本次采用数组实现队列结构

import IQueue from "./IQueue"

class ArrayQueue<T> implements IQueue<T> {
  private data: T[] = []

  enqueue(element: T): void {
    this.data.push(element)
  }

  dequeue(): any {
    return this.data.shift()
  }

  peek(): any {
    return this.data[0]
  }

  isEmpty(): boolean {
    return this.data.length === 0
  }

  size(): number {
    return this.data.length
  }
}

export default ArrayQueue
