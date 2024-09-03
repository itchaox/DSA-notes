/*
 * @Version    : v1.00
 * @Author     : Wang Chao
 * @Date       : 2024-09-02 16:54
 * @LastAuthor : Wang Chao
 * @LastTime   : 2024-09-03 11:08
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
  const n = value.length;

  if (n <= 1) return false;

  for (let i = 0; i < n; i++) {
    const s = value[i];

    if (s === '(') {
      stack.push(')');
    } else if (s === '[') {
      stack.push(']');
    } else if (s === '{') {
      stack.push('}');
    } else {
      if (s !== stack.pop()) {
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
