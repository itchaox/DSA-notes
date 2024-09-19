/*
 * @Version    : v1.00
 * @Author     : Wang Chao
 * @Date       : 2024-09-02 16:54
 * @LastAuthor : Wang Chao
 * @LastTime   : 2024-09-19 13:58
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

  for (let i = 0; i < n; i++) {
    const v = value[i];
    if (v === '(') {
      stack.push(')');
    } else if (v === '[') {
      stack.push(']');
    } else if (v === '{') {
      stack.push('}');
    } else {
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

// FIXME 分析时间和空间复杂度

// Time：O(n)
// Space：O(n)
