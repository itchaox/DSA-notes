/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2024-03-30 17:24
 * @LastAuthor : itchaox
 * @LastTime   : 2024-03-30 17:37
 * @desc       : 双端队列
 */

class ArrayDeque<T> {
  private data: T[] = [];

  // 尾部入队
  enqueue(value: T): void {
    this.data.push(value);
  }

  // 头部入队
  addFront(value: T): void {
    this.data.unshift(value);
  }

  // 头部出队
  dequeue(): T | undefined {
    return this.data.shift();
  }

  // 尾部出队
  deleteBack(): T | undefined {
    return this.data.pop();
  }

  // 查看头部元素
  peek(): T | undefined {
    return this.data[0];
  }

  // 队列是否为空
  isEmpty(): boolean {
    return this.data.length === 0;
  }

  // 获取队列长度
  get size(): number {
    return this.data.length;
  }
}

const arrayDequeue = new ArrayDeque<number>();

arrayDequeue.enqueue(123);
arrayDequeue.enqueue(234);

arrayDequeue.addFront(889);

console.log(arrayDequeue);
