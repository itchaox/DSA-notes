/*
 * @Version    : v1.00
 * @Author     : wangchao
 * @Date       : 2024-03-26 17:02
 * @LastAuthor : wangchao
 * @LastTime   : 2024-03-26 17:25
 * @desc       :
 */

import { DoublyNode } from "./LinkedNode";

class DoublyLinkedList<T> {
  head: DoublyNode<T> | null = null;
  tail: DoublyNode<T> | null = null;
  length: number;

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
    }
  }
}

const doublyLinkedList = new DoublyLinkedList<string>();

doublyLinkedList.append("aaa");
doublyLinkedList.append("bbb");
doublyLinkedList.append("ccc");
