/*
 * @Version    : v1.00
 * @Author     : wangchao
 * @Date       : 2023-11-03 14:50
 * @LastAuthor : wangchao
 * @LastTime   : 2023-11-06 09:48
 * @desc       : 判断是否质数
 */

//FIXME 质数：只能被1和自身整除

function isPrime(num: number): boolean {
  // 如果不是质数，则被除数小于等于num的平方根即可
  const sqrt = Math.sqrt(num);

  for (let i = 2; i <= sqrt; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(6));
console.log(isPrime(5));
console.log(isPrime(19));
