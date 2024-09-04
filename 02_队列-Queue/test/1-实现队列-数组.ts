/*
 * @Version    : v1.00
 * @Author     : Wang Chao
 * @Date       : 2024-09-02 23:07
 * @LastAuthor : Wang Chao
 * @LastTime   : 2024-09-04 13:18
 * @desc       :
 */
// 请实现单向队列结构，使用数组形式

// 需要实现以下方法
/**
 * 1. enqueue
 * 2. dequeue
 * 3. peek
 * 4. isEmpty
 * 5. size
 */

// FIXME 实现

class Queue<T> {
  private data: T[] = [];

  enqueue(value: T): void {
    this.data.push(value);
  }

  dequeue(): T | undefined {
    return this.data.shift();
  }

  peek(): T | undefined {
    return this.data[0];
  }

  isEmpty(): boolean {
    return this.data.length === 0;
  }

  get size(): number {
    return this.data.length;
  }
}

// FIXME 验证
const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.isEmpty());
console.log(queue.size);
