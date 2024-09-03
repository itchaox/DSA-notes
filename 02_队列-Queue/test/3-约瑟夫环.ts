/*
 * @Version    : v1.00
 * @Author     : Wang Chao
 * @Date       : 2024-09-03 15:37
 * @LastAuthor : Wang Chao
 * @LastTime   : 2024-09-03 16:35
 * @desc       :
 */

// 请实现约瑟夫环

// FIXME 题目描述
// 输入 n = 5, m = 3
// 则依次从 0 开始，数到 3 的数字则删除

// FIXME 实现
function LastNumber(n: number, m: number): number {
  const queue: number[] = [];

  for (let i = 0; i < n; i++) {
    queue.push(i);
  }

  while (queue.length > 1) {
    for (let i = 1; i < m; i++) {
      const v = queue.shift()!;
      queue.push(v);
    }

    queue.shift();
  }

  return queue.shift()!;
}

// FIXME 验证
console.log(LastNumber(5, 3));
console.log(LastNumber(10, 17));

// FIXME 时间和空间复杂度分析
// 时间：O(n*m)
// 空间：O(n)
