/*
 * @Version    : v1.00
 * @Author     : wangchao
 * @Date       : 2023-10-08 17:11
 * @LastAuthor : wangchao
 * @LastTime   : 2023-10-09 09:45
 * @desc       : 判断是否是有效括号
 */

/**
 * //FIXME 核心思想
 * 1. 使用栈结构，利用其特性
 * 2. 碰到左括号则将对应右括号入栈
 * 3. 碰到右括号则出栈，如果出栈的栈顶元素和该右括号想等，则当前括号是有效括号
 */
import ArrayStack from "./01_ArrayStack";

/**
 * @desc  : 判断是否是有效括号
 * @param  {string} str：括号字符串
 * @return { boolean } true 有效 false 无效
 */
function isValid(str: string): boolean {
  const stack = new ArrayStack<string>();

  for (let i = 0; i < str.length; i++) {
    let data = str[i];

    switch (data) {
      case "(":
        stack.push(")");
        break;
      case "{":
        stack.push("}");
        break;
      case "[":
        stack.push("]");
        break;
      default:
        if (data !== stack.pop()) return false;
    }
  }

  return stack.isEmpty();
}

console.log(isValid("("));
console.log(isValid("()"));
console.log(isValid("["));
