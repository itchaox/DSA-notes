/*
 * @Version    : v1.00
 * @Author     : Wang Chao
 * @Date       : 2024-09-02 11:48
 * @LastAuthor : Wang Chao
 * @LastTime   : 2024-09-07 09:34
 * @desc       :
 */

// 输入
// 35;
// 17;

// 输出
// 100011
// 10001

function Ten2Two(num: number): string {
  let result = '';
  const stack: number[] = [];

  while (num > 0) {
    const v = num % 2;
    stack.push(v);
    num = Math.floor(num / 2);
  }

  // stack
  while (stack.length > 0) {
    result += stack.pop();
  }

  return result;
}

// FIXME 测试结果
console.log(Ten2Two(35));
console.log(Ten2Two(17));

// FIXME 分析时间和空间复杂度
