/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2024-04-02 23:10
 * @LastAuthor : itchaox
 * @LastTime   : 2024-04-02 23:43
 * @desc       :
 */

import { testSort } from './00_utils';

/**
 * @desc  : 选择排序实现
 */
function selectionSort(arr: number[]): number[] {
  // 需扫描，则要使用到数组长度
  const n = arr.length;

  // 数组中有多少个需要扫描的元素
  // 为何 n - 1，因为前面的元素都扫描了，最后一个元素不需再扫描
  for (let i = 0; i < n - 1; i++) {
    // 获取最小值的索引，始终以已排序的末尾索引，作为 minIndex
    let minIndex = i;

    // 每个元素需要扫描的次数
    // 为何从 1 开始；因为 minIndex 从 0 开始的，索引 0 和 0 比较，即为自己和自己比较，无意义
    // 为何 j = 1 + i；因为每扫描一次之后，已排序的末尾索引是跟随 i 变化的
    for (let j = 1 + i; j < n; j++) {
      // 找到更小的数据，则更新 minIndex
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // 当前位置已经是未排序数列中最小的数值，则不需交换，是个小优化点
    if (i !== minIndex) {
      [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
  }

  return arr;
}

testSort(selectionSort);

// 算法测试
let arr = [10, 90, 20, 100, 50];
console.log('排序前：', arr); // [ 10, 90, 20, 100, 50 ]

let newArr = selectionSort(arr);
console.log('排序后：', newArr); // [ 10, 20, 50, 90, 100 ]
