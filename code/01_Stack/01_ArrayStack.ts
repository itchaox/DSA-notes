/*
 * @Version    : v1.00
 * @Author     : wangchao
 * @Date       : 2023-10-08 14:19
 * @LastAuthor : wangchao
 * @LastTime   : 2023-10-08 15:35
 * @desc       : 基于数组实现栈结构
 */

import IStack from "./IStack"

class ArrayStack<T = any> implements IStack<T> {

  private data: T[] = []
  
  push(element: T):void {
    this.data.push(element)
  }

  pop() : T | undefined {
   return this.data.pop()
  }


  peek(): T | undefined {
    return this.data[this.data.length - 1]
  }

  isEmpty(): boolean {
   return this.data.length === 0
  }

  size(): number {
    return this.data.length
  }

}

const stack = new ArrayStack<number>()

stack.push(1)
stack.push(2)
stack.push(3)


console.log('stack',stack.isEmpty())

export default ArrayStack
