/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2024-04-03 14:03
 * @LastAuthor : itchaox
 * @LastTime   : 2024-04-03 19:22
 * @desc       :
 */

import { testSort } from './00_utils';

/**
 * @desc  : 插入排序
 */
function insertionSort(arr: number[]): number[] {
  // 扫描数组，需知数组长度
  const n = arr.length;

  // 外层遍历，未排序数组的个数
  // 为何 i 从 1 开始；因为以 i = 0 为初始排序元素，从左至右按升序排列
  for (let i = 1; i < n; i++) {
    // 获取未排序元素作为新数据
    let newData = arr[i];

    // 与新数据的前一个数据比较
    let j = i - 1;

    // 只要前一个数据比新数据大，则需要继续遍历
    // j 为 0，则已找到最前面的位置
    while (arr[j] > newData && j >= 0) {
      arr[j + 1] = arr[j];

      // 每遍历一次，则往前移动
      j--;
    }

    // arr[j] > newData，则更新下一个索引的数据
    // 如果新数据已经在正确的位置则不需更新，小优化点
    // 记录一下：这个小优化点是我自己想到的，自己还是有进步，加油！
    if (j + 1 !== i) {
      arr[j + 1] = newData;
    }
  }

  return arr;
}

// 算法测试
let arr = [10, 90, 20, 100, 50];
console.log('排序前：', arr); // [ 10, 90, 20, 100, 50 ]

let newArr = insertionSort(arr);
console.log('排序后：', newArr); // [ 10, 20, 50, 90, 100 ]
// testSort(insertionSort);
