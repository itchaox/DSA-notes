/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2024-05-06 17:31
 * @LastAuthor : itchaox
 * @LastTime   : 2024-05-06 17:44
 * @desc       :
 */

// 核心思想 fn = fn-1 + fn-2
// 动态规划的地方是不使用递归操作，能很大程度上节约性能
// 自底向上求解，先求解 f0,f1 再就此求解 f2，依此类推

function fib(n: number): number {
  const memo: number[] = [];

  for (let i = 0; i <= n; i++) {
    // 定义初始化值
    if (i <= 1) {
      memo[i] = i;
    } else {
      memo[i] = memo[i - 1] + memo[i - 2];
    }
  }

  return memo[n];
}

console.log(fib(10)); // 55
console.log(fib(40));

export {};
