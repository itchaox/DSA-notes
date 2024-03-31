/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2024-03-30 23:17
 * @LastAuthor : itchaox
 * @LastTime   : 2024-03-31 11:39
 * @desc       :
 */

import Heap from '../09_堆 Heap/01_基本实现';

class PriorityQueue<T> {
  private heap: Heap<T> = new Heap();

  enqueue(value: T): void {
    this.heap.insert(value);
  }

  dequeue(): T | undefined {
    return this.heap.extract();
  }

  peek(): T | undefined {
    return this.heap.peek();
  }

  isEmpty() {
    return this.heap.isEmpty();
  }

  get size() {
    return this.heap.size;
  }
}

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  valueOf() {
    return this.age;
  }
}

const priorityQueue = new PriorityQueue<Person>();

const p1 = new Person('itchao', 18);
const p2 = new Person('why', 20);
const p3 = new Person('jame', 30);

priorityQueue.enqueue(p1);
priorityQueue.enqueue(p2);
priorityQueue.enqueue(p3);

console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
