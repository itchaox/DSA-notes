/*
 * @Version    : v1.00
 * @Author     : wangchao
 * @Date       : 2023-10-26 11:24
 * @LastAuthor : wangchao
 * @LastTime   : 2023-10-26 15:33
 * @desc       : 顺序查找
 */

function orderSearch(arr: number[], num: number): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }

  return -1;
}

console.log(orderSearch([1, 2, 3, 4, 5], 2));
