/*
 * @desc: 链表
 * @Version: v1.00
 * @Author: wc
 * @Date: 2023-02-09 15:15:24
 * @LastEditors: wc
 * @LastEditTime: 2023-02-09 17:06:02
 */

class Node<T> {
  value: T
  next: Node<T> | null = null

  constructor(value: T) {
    this.value = value
  }
}

class LinkedList<T> {
  private head: Node<T> | null = null
  private size: number = 0

  // 获取链表长度
  get length() {
    return this.size
  }

  // 1. 尾部添加元素
  append(value: T) {
    // 创建新节点
    const newNode = new Node(value)

    if (!this.head) {
      // 链表为空，则直接指向新节点
      this.head = newNode
    } else {
      let curNode = this.head // 当前节点
      // 寻找最后节点
      while (curNode.next) {
        curNode = curNode.next
      }
      curNode.next = newNode // 更新最后一节点
    }

    this.size++
  }

  // 2. 遍历
  traverse() {
    let curNode = this.head
    let arr: any[] = []

    while (curNode) {
      arr.push(curNode.value)
      curNode = curNode.next
    }
    console.log(arr.join(" -> "))
  }

  // 3. 插入
  insert(value: T, position: number) {
    // 越界判断
    if (position < 0 || position > this.size) return false

    let curNumber = 0
    let curNode = this.head
    let newNode = new Node(value)

    while (curNumber + 1 === position) {
      curNode = curNode!.next
      curNumber += 1
    }
    newNode.next = curNode!.next
    curNode!.next = newNode
  }
}

export default LinkedList
