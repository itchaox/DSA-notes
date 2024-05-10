/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2024-05-06 23:23
 * @LastAuthor : itchaox
 * @LastTime   : 2024-05-06 23:24
 * @desc       :
 */

function jump(n: number): number {
  let a = 1;
  let b = 1;

  for (let i = 2; i <= n; i++) {
    const c = a + b;

    a = b;
    b = c;
  }

  return b;
}

console.log(jump(3));
console.log(jump(5));
console.log(jump(10));
