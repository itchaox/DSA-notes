/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2024-05-06 17:03
 * @LastAuthor : itchaox
 * @LastTime   : 2024-05-06 17:44
 * @desc       :
 */
// 斐波那契数列

// f0 = 0; f1 = 1; f2 = f0 + f1; f3 = f2 + f1; 以此类推

function fib(n: number): number {
  if (n <= 1) return n;

  return fib(n - 1) + fib(n - 2);
}

console.log(fib(30));

export {};
