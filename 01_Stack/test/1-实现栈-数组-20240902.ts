/*
 * @Version    : v1.00
 * @Author     : Wang Chao
 * @Date       : 2024-09-02 10:42
 * @LastAuthor : Wang Chao
 * @LastTime   : 2024-09-02 13:20
 * @desc       :
 */

class Stack<T> {
  private data: T[] = [];

  push(value: T): void {
    this.data.push(value);
  }

  pop(): T | undefined {
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

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

export default Stack;
