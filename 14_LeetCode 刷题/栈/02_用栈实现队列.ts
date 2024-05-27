/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2024-05-27 23:41
 * @LastAuthor : itchaox
 * @LastTime   : 2024-05-28 00:02
 * @desc       :
 */

// 核心思想：两个栈，一个负责进，一个负责出

class MyQueue {
  // 出
  private s1 = [];

  // 进
  private s2 = [];

  push(x: number): void {
    this.s2.push(x);
  }

  pop(): number {
    // 先出 s1
    if (this.s1.length > 0) {
      return this.s1.pop()!;
    } else if (this.s2.length > 0) {
      // s2 中的元素出栈到入栈 s1 中
      while (this.s2.length > 0) {
        this.s1.push(this.s2.pop()!);
      }
      return this.s1.pop()!;
    }
    return -1;
  }

  peek(): number {
    if (this.s1.length > 0) {
      return this.s1[this.s1.length - 1];
    } else if (this.s2.length > 0) {
      return this.s2[0];
    }

    return -1;
  }

  empty(): boolean {
    return this.s1.length === 0 && this.s2.length === 0;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
