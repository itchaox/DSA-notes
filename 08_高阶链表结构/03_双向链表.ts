/*
 * @Version    : v1.00
 * @Author     : wangchao
 * @Date       : 2024-03-26 17:02
 * @LastAuthor : itchaox
 * @LastTime   : 2024-03-29 00:10
 * @desc       :
 */

import { DoublyNode } from './LinkedNode';

class DoublyLinkedList<T> {
  head: DoublyNode<T> | null = null;
  tail: DoublyNode<T> | null = null;
  length: number = 0;

  constructor() {}

  get Size(): number {
    return this.length;
  }

  append(value: T): void {
    const newNode = new DoublyNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
  }

  // 头部插入节点
  prepend(value: T): void {
    // 创建一个新节点
    const newNode = new DoublyNode(value);

    // 链表无数据，即 head 为空
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // 处理以前的 head
      newNode.next = this.head;
      this.head.prev = newNode;

      // 更新 head
      this.head = newNode;
    }

    // 链表数据增加
    this.length++;
  }

  // 正向遍历
  traverse() {
    let current = this.head;

    let _arr: (T | null)[] = [];

    while (current) {
      _arr.push(current.value);
      current = current.next;
    }

    console.log(_arr.join(' -> '));
  }

  // 反向遍历
  postTraverse() {
    let current = this.tail;
    let _arr: T[] = [];

    while (current) {
      _arr.push(current.value);

      current = current.prev;
    }
    console.log(_arr.join(' -> '));
  }

  // 根据索引获取当前节点
  getNodeByPosition(position: number): DoublyNode<T> | null {
    let index = 0;
    let current = this.head;

    while (index++ < position && current) {
      current = current.next;
    }

    return current;
  }

  // 根据索引插入元素
  insert(value: T, position: number): boolean {
    // 越界判断
    if (position < 0 || position > this.length) return false;

    // 头部插入
    if (position === 0) {
      this.prepend(value);
    } else if (position === this.length) {
      // 尾部插入
      this.append(value);
    } else {
      // 根据 position 插入
      const newNode = new DoublyNode(value);

      let current = this.getNodeByPosition(position);

      current!.prev!.next = newNode;
      newNode.prev = current!.prev;
      newNode.next = current;
      current!.prev = newNode;

      this.length++;
    }

    return true;
  }

  // 根据索引删除元素
  removeAt(position: number): T | null {
    // 越界判断
    if (position < 0 || position >= this.length) return null;

    // 无数据判断
    if (this.length === 0) return null;

    let index = 0;
    let current = this.head;

    while (index++ < position && current) {
      current = current.next;
    }

    if (current!.prev && current!.next) {
      current!.prev!.next = current!.next;
      current!.next!.prev = current!.prev;
    }

    // return current;
  }
}

const doublyLinkedList = new DoublyLinkedList<string>();

doublyLinkedList.append('aaa');
doublyLinkedList.append('bbb');
doublyLinkedList.append('ccc');
doublyLinkedList.insert('测试', 2);

doublyLinkedList.insert('第一', 0);

doublyLinkedList.removeAt(0);
doublyLinkedList.postTraverse();
doublyLinkedList.traverse();
