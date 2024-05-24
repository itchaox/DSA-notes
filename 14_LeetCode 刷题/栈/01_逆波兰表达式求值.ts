/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2024-05-24 17:45
 * @LastAuthor : itchaox
 * @LastTime   : 2024-05-24 17:56
 * @desc       :
 */
function evalRPN(tokens: string[]): number {
  const stack = [];

  for (const token of tokens) {
    switch (token) {
      case '+': {
        const num2 = stack.pop()!;
        const num1 = stack.pop()!;
        stack.push(num1 + num2);
        break;
      }
      case '-': {
        const num2 = stack.pop()!;
        const num1 = stack.pop()!;
        stack.push(num1 - num2);
        break;
      }
      case '*': {
        const num2 = stack.pop()!;
        const num1 = stack.pop()!;
        stack.push(num1 * num2);
        break;
      }
      case '/': {
        const num2 = stack.pop()!;
        const num1 = stack.pop()!;
        stack.push(Math.trunc(num1 / num2));
        break;
      }
      default:
        stack.push(Number(token));
    }
  }

  return stack.pop();
}
