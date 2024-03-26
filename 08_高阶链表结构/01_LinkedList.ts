/*
 * @Version    : v1.00
 * @Author     : wangchao
 * @Date       : 2023-10-10 09:56
 * @LastAuthor : wangchao
 * @LastTime   : 2024-03-06 09:49
 * @desc       : 实现链表
 */

class LinkedNode<T> {
  value: T;
  next: LinkedNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

class LinkedList<T> {
  private head: LinkedNode<T> | null = null;
  private size: number = 0;

  get length(): number {
    return this.size;
  }

  append(element: T) {
    const newNode = new LinkedNode(element);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }

      current.next = newNode;
    }

    this.size++;
  }

  traverse() {
    let list: T[] = [];
    let current = this.head;

    while (current) {
      list.push(current.value);
      current = current.next;
    }

    console.log("当前链表：", list.join(" -> "));
  }

  insert(value: T, position: number): boolean {
    // 1. 越界判断
    if (position < 0 || position > this.size) return false;

    let newNode = new LinkedNode<T>(value);
    // 头部插入
    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      // 其他位置插入
      let current = this.head;
      let previous: LinkedNode<T> | null = null;
      let index = 0;

      while (index++ < position) {
        previous = current;
        current = current!.next;
      }

      // 索引 = 插入位置，则插入元素
      previous!.next = newNode;
      newNode.next = current;
    }

    this.size++;

    return true;
  }

  removeAt(position: number): T | null {
    // 1. 越界判断
    if (position < 0 || position >= this.size) return null;

    let current = this.head;

    // 头部删除
    if (position === 0) {
      this.head = current!.next;
    } else {
      // 其他位置删除
      let previous: LinkedNode<T> | null = null;
      let index = 0;

      while (index++ < position) {
        previous = current;
        current = current!.next;
      }

      previous!.next = current?.next ?? null;
    }

    this.size--;

    return current?.value ?? null;
  }

  get(position: number): T | null {
    // 1. 越界判断
    if (position < 0 || position >= this.size) return null;

    // 2. 查找元素，并返回元素
    let index = 0;
    let current = this.head;
    while (index++ < position && current) {
      current = current.next;
    }

    return current?.value ?? null;
  }
}

const linkedList = new LinkedList();
linkedList.append("a");
linkedList.append("b");
linkedList.append("c");
linkedList.append("d");
linkedList.append("e");
linkedList.append("f");

linkedList.traverse();

linkedList.insert("wc", 0);
linkedList.insert("w2", 7);
linkedList.traverse();
console.log(linkedList.removeAt(7));

linkedList.traverse();
console.log(linkedList.get(3));

export default {};
