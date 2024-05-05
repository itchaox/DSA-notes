/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2024-04-05 16:27
 * @LastAuthor : itchaox
 * @LastTime   : 2024-05-05 23:34
 * @desc       : 归并排序
 */

import { testSort } from './00_utils';

function mergeSort(arr: number[]): number[] {
  // 获取数组长度
  const n = arr.length;

  // 1. 分解
  // 数组长度为 1，则退出递归
  if (n <= 1) return arr;

  // 获取数组中间索引
  const mid = Math.floor(n / 2);

  // 左数组
  const leftArr = arr.slice(0, mid);

  // 右数组
  const rightArr = arr.slice(mid);

  // 当递归结束的时候，数组长度为 1，此时拿到这个数据然后再执行后续的合并操作
  // 在这里会从数组为1的时候一直向上递归，返回排序好的数组，然后直到还有2组数组，把这2组数组再合并，即为最终结果

  // 递归的操作需要注意，每个上面的操作都需要等下层的操作结束之后拿到结果，再执行后续的操作
  const newLeftArr = mergeSort(leftArr);
  const newRightArr = mergeSort(rightArr);

  // 2. 合并

  // 2.1 双指针实现，两数组比较
  const newArr: number[] = [];
  let i = 0;
  let j = 0;

  // 当一个数组遍历完，则退出循环
  // 必须一个数组中有元素菜继续遍历
  while (i < newLeftArr.length && j < newRightArr.length) {
    // 将较小值的数组放入新数组，并移动对应指针
    if (newLeftArr[i] <= newRightArr[j]) {
      newArr.push(newLeftArr[i]);
      i++;
    } else {
      newArr.push(newRightArr[j]);
      j++;
    }
  }

  // 当一个数组循环完之后，直接把另一个数组剩余的元素添加至新数组即可
  if (i < newLeftArr.length) {
    newArr.push(...newLeftArr.slice(i));
  }

  if (j < newRightArr.length) {
    newArr.push(...newRightArr.slice(j));
  }

  return newArr;
}

// 算法测试
let arr = [10, 90, 20, 100, 50];
console.log('排序前：', arr); // [ 10, 90, 20, 100, 50 ]

let newArr = mergeSort(arr);
console.log('排序后：', newArr); // [ 10, 20, 50, 90, 100 ]

// testSort(mergeSort);
