/*
 * @Version    : v1.00
 * @Author     : Wang Chao
 * @Date       : 2024-09-02 11:48
 * @LastAuthor : Wang Chao
 * @LastTime   : 2024-09-03 11:04
 * @desc       :
 */

// 输入
// 35;
// 17;
// 29;

// 输出
// 1001011

function Ten2Two(value: any): string {
  if (value < 0) return '';
  if (value === 0) return '0';

  const stack: number[] = [];
  let result = '';

  while (value > 0) {
    const v = value % 2;
    stack.push(v);

    value = Math.floor(value / 2);
  }

  while (stack.length > 0) {
    result += stack.pop();
  }

  return result;
}

// FIXME 分析时间和空间复杂度

// FIXME 测试结果
console.log(Ten2Two(35));
console.log(Ten2Two(17));
console.log(Ten2Two(29));
