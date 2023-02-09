/*
 * @desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2023-02-06 16:56:26
 * @LastEditors: wc
 * @LastEditTime: 2023-02-06 17:08:46
 */

/**
 * 循环使用选择
 * 1. while：知道结束条件，不知道循环次数
 * 2. for：知道循环次数
 */

import ArrayStack from "./01_利用数组实现栈结构 Stack"

function decimalToBinary(decimal: number): string {
  let stack = new ArrayStack()
  let binary = ""

  // 大于0, 则一直入栈
  while (decimal > 0) {
    let res = decimal % 2
    stack.push(res)
    decimal = Math.floor(decimal / 2)
  }

  // 不为空, 则一直出栈
  while (!stack.isEmpty()) {
    binary += stack.pop()
  }

  return binary
}

console.log("decimalToBinary(35)", decimalToBinary(35))
