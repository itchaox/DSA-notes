/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2024-05-06 20:11
 * @LastAuthor : itchaox
 * @LastTime   : 2024-05-06 20:14
 * @desc       :
 */

// 用变量去替代数组存储的方式
function fib(n: number): number {
  // 1. 定义状态
  // 2. 定义初始值
  let p0 = 0;
  let p1 = 1;

  for (let i = 2; i <= n; i++) {
    // 3. 状态转移方程
    const current = p0 + p1;

    p0 = p1;
    p1 = current;
  }

  // 4. 计算最终结果
  return p1;
}

console.log(fib(10));
console.log(fib(100));
