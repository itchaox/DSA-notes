/*
 * @Version    : v1.00
 * @Author     : wangchao
 * @Date       : 2023-10-09 10:50
 * @LastAuthor : wangchao
 * @LastTime   : 2023-10-09 15:03
 * @desc       : 使用数组实现队列
 */

class ArrayQueue<T> {
  private data: T[] = [];

  enqueue(element: T): void {
    this.data.push(element);
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

  size(): number {
    return this.data.length;
  }
}

export default ArrayQueue;

// const queue = new ArrayQueue<number>();

// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// queue.enqueue(5);

// console.log(queue);
// console.log(queue.dequeue());
// console.log(queue.peek());
// console.log(queue.isEmpty());
// console.log(queue.size());
