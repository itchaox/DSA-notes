/*
 * @Version    : v1.00
 * @Author     : Wang Chao
 * @Date       : 2024-09-02 10:42
 * @LastAuthor : Wang Chao
 * @LastTime   : 2024-09-18 16:16
 * @desc       :
 */

// FIXME 请实现栈结构，用数组形式

// 需要包括以下方法
/**
 * 1. push
 * 2. pop
 * 3. peek
 * 4. isEmpty
 * 5. size
 */

// FIXME 实现栈
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

// FIXME 测试结果
const stack = new Stack<string>();

stack.push('a');
stack.push('b');
stack.push('c');

console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.size());
