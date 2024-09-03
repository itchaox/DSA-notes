/*
 * @Version    : v1.00
 * @Author     : wangchao
 * @Date       : 2023-10-08 15:46
 * @LastAuthor : wangchao
 * @LastTime   : 2023-10-08 16:50
 * @desc       :
 */

import ArrayStack from "./01_ArrayStack";

function decimalToBinary(decimal: number): string {
  const stack = new ArrayStack<number>();
  let binary = "";

  while (decimal > 0) {
    // 将余数入栈
    let result = decimal % 2;
    stack.push(result);

    decimal = Math.floor(decimal / 2);
  }

  while (!stack.isEmpty()) {
    // 依次出栈出
    binary += stack.pop();
  }

  return binary;
}

console.log(decimalToBinary(32));
console.log(decimalToBinary(39));
