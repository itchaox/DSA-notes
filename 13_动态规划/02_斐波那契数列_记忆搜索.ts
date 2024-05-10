/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2024-05-06 17:18
 * @LastAuthor : itchaox
 * @LastTime   : 2024-05-09 12:37
 * @desc       :
 */

function fib(n: number, memo: number[] = []): number {
  if (n <= 1) return n;

  // 如果存在则使用已存在的数据
  if (memo[n]) {
    return memo[n];
  }

  // 未存在，则获取数据
  const res = fib(n - 1, memo) + fib(n - 2, memo);

  // 修改当前位置的数据
  memo[n] = res;

  return memo[n];
}

console.log(fib(50));
export {};
