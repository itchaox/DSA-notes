/*
 * @Version    : v1.00
 * @Author     : wangchao
 * @Date       : 2023-10-10 09:56
 * @LastAuthor : wangchao
 * @LastTime   : 2023-10-10 16:06
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

  insert(value: T, position: number) {
    const newNode = new LinkedNode(value);
    let index = 0;
    let current = this.head;

    while (current) {
      if (index === position - 1) {
        newNode.next = current.next;
        current.next = newNode;
      }
      current = current.next;
      index++;
    }
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

linkedList.insert("wc", 1);
linkedList.traverse();
