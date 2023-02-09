/*
 * @desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2023-02-07 09:26:09
 * @LastEditors: wc
 * @LastEditTime: 2023-02-07 11:16:05
 */
import ArrayStack from "./01_利用数组实现栈结构 Stack"

function matchBracket(data: string): boolean {
  const stack = new ArrayStack()
  for (let i = 0; i < data.length; i++) {
    let s = data[i]
    /**
     * 思路：
     *  1. 匹配左括号，入栈右括号
     *  2. 匹配右括号，和出栈内容比较
     */

    // if else 写法：
    if (s === "(") {
      stack.push(")")
    } else if (s === "{") {
      stack.push("}")
    } else if (s === "[") {
      stack.push("]")
    } else if (s !== stack.pop()) {
      return false
    }

    // switch 写法：
    switch (s) {
      case "(":
        stack.push(")")
        break
      case "[":
        stack.push("]")
        break
      case "{":
        stack.push("}")
        break
      default:
        if (s !== stack.pop()) return false
        break
    }
  }

  return stack.isEmpty()
}

console.log('matchBracket("([{}])")', matchBracket("{{}}")) // true
console.log('matchBracket("[{}]]")', matchBracket("[{}]]")) // false
