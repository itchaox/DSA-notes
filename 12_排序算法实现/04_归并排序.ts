/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2024-04-05 16:27
 * @LastAuthor : itchaox
 * @LastTime   : 2024-04-05 16:51
 * @desc       :
 */

import { testSort } from './00_utils';

function mergeSort(arr: number[]): number[] {
  // 获取数组长度
  const n = arr.length;

  // 1. 分解
  // 数组长度为 1，则退出递归
  if (arr.length <= 1) return arr;

  // 获取数组中间索引
  const minIndex = Math.floor(n / 2);

  // 左数组
  const leftArr = arr.slice(0, minIndex);

  // 右数组
  const rightArr = arr.slice(minIndex);

  const newLeftArr = mergeSort(leftArr);
  const newRightArr = mergeSort(rightArr);

  // 2. 合并

  // 2.1 双指针实现，两数组比较
  const newArr: number[] = [];
  let i = 0;
  let j = 0;

  // 当一个数组遍历完，则退出循环
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
  } else {
    newArr.push(...newRightArr.slice(j));
  }

  return newArr;
}

testSort(mergeSort);
