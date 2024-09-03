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
    return this.data.pop();
  }

  peek(): T | undefined {
    return this.data[this.data.length - 1];
  }

  isEmpty(): boolean {
    return this.data.length === 0;
  }

  size(): number {
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
console.log(queue.size());
