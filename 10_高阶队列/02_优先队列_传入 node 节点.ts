/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2024-03-30 23:17
 * @LastAuthor : itchaox
 * @LastTime   : 2024-03-31 11:50
 * @desc       :
 */

import Heap from '../09_堆 Heap/01_基本实现';

class PriorityNode<T> {
  value: T;
  priority: number;

  constructor(value: T, priority: number) {
    this.value = value;
    this.priority = priority;
  }

  valueOf() {
    return this.priority;
  }
}

class PriorityQueue<T> {
  private heap: Heap<PriorityNode<T>> = new Heap();

  enqueue(value: T, priority: number) {
    const newNode = new PriorityNode<T>(value, priority);
    this.heap.insert(newNode);
  }

  dequeue(): T | undefined {
    return this.heap.extract()?.value;
  }

  peek(): T | undefined {
    return this.heap.peek()?.value;
  }

  isEmpty() {
    return this.heap.isEmpty();
  }

  get size() {
    return this.heap.size;
  }
}

const priorityQueue = new PriorityQueue<string>();

priorityQueue.enqueue('itchao', 124);
priorityQueue.enqueue('why', 34);
priorityQueue.enqueue('james', 38);

console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
