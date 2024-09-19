/*
 * @Version    : v1.00
 * @Author     : Wang Chao
 * @Date       : 2024-09-02 11:48
 * @LastAuthor : Wang Chao
 * @LastTime   : 2024-09-19 13:38
 * @desc       :
 */

// 输入
// 35;
// 17;

// 输出
// 100011
// 10001

function Ten2Two(value: number): string {
  let result = '';
  const stack: number[] = [];

  while (value > 0) {
    const v = value % 2;
    stack.push(v);
    value = Math.floor(value / 2);
  }

  for (let i = stack.length - 1; i >= 0; i--) {
    result += String(stack[i]);
  }

  return result;
}

// FIXME 测试结果
console.log(Ten2Two(35));
console.log(Ten2Two(17));

// FIXME 分析时间和空间复杂度

// Time: O(n)
// Space: O(n)
