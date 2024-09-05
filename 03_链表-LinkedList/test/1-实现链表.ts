/*
 * @Version    : v1.00
 * @Author     : Wang Chao
 * @Date       : 2024-09-04 23:07
 * @LastAuthor : Wang Chao
 * @LastTime   : 2024-09-05 11:03
 * @desc       :
 */

// FIXME 实现

class LinkedNode<T> {
  value: T;
  next: LinkedNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

class LinkedList<T> {
  head: LinkedNode<T> | null = null;
  size: number = 0;

  // 获取长度
  get length(): number {
    return this.size;
  }

  // 插入
  append(value: T, position: number): boolean {
    // 边界判断
    if (position < 0 || position > this.size) return false;

    const node = new LinkedNode(value);

    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      let index = 0;

      // 找到最后一个节点
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
    return true;
  }

  // 遍历
  traverse() {
    let data: T[] = [];
    let current = this.head;

    while (current) {
      data.push(current.value);
      current = current.next;
    }

    console.log(data.join('->'));
  }
}

const linkedList = new LinkedList();

linkedList.append(1, 0);
linkedList.append(2, 0);
linkedList.append(3, 0);

linkedList.traverse();
