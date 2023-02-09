/*
 * @desc: 利用数组实现栈结构 Stack
 * @Version: v1.00
 * @Author: wc
 * @Date: 2023-02-06 15:01:27
 * @LastEditors: wc
 * @LastEditTime: 2023-02-06 16:58:29
 */

/**
 * 实现栈结构方式：数组
 * 方法：
 *  1. push：入栈
 *  2. pop：出栈
 *  3. peek：查看栈顶元素
 *  4. isEmpet：判断栈是否为空
 *  5. size：查看栈元素大小
 */

class ArrayStack {
  private data: any[] = []

  push(element: any): void {
    this.data.push(element)
  }

  pop(): any {
    return this.data.pop()
  }

  peek(): any {
    return this.data[this.data.length - 1]
  }

  isEmpty(): boolean {
    return this.data.length === 0
  }

  size(): number {
    return this.data.length
  }
}

export default ArrayStack
