/*
 * @Version    : v1.00
 * @Author     : Wang Chao
 * @Date       : 2024-09-02 16:54
 * @LastAuthor : Wang Chao
 * @LastTime   : 2024-09-07 18:37
 * @desc       :
 */

// 输入
// ()[]{} true
// ({[]}) true

// 错误情况
// [{]} false

// 输出
// true / false

// FIXME 实现
function isVaild(value: string): boolean {
  const stack: string[] = [];

  for (const v of value) {
    switch (v) {
      case '(':
        stack.push(')');
        break;
      case '[':
        stack.push(']');
        break;
      case '{':
        stack.push('}');
        break;
      default:
        if (v !== stack.pop()) {
          return false;
        }
    }
  }
  return true;
}

// FIXME 验证
console.log(isVaild('()[]{}'));
console.log(isVaild('({[]})'));

console.log(isVaild('[{]}'));
