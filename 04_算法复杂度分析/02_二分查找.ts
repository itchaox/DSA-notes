/*
 * @Version    : v1.00
 * @Author     : wangchao
 * @Date       : 2023-10-26 11:34
 * @LastAuthor : wangchao
 * @LastTime   : 2023-10-26 15:18
 * @desc       :
 */

function binarySearch(arr: number[], num: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === num) {
      return mid;
    } else if (arr[mid] < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 22));
2;
