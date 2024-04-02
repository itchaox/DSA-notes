/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2024-04-02 13:10
 * @LastAuthor : itchaox
 * @LastTime   : 2024-04-02 15:59
 * @desc       : 冒泡排序的基本实现
 */

import { testSort } from './00_utils';

/**
 * @desc  : 冒泡排序实现
 */
function bubbleSort(arr: number[]): number[] {
  const n = arr.length;

  // 外层遍历，数组内一共有多少个数据需要遍历
  for (let i = 0; i < n; i++) {
    // 是否交换
    let swapped = false;

    // 内层遍历，数组中每个元素分别需要遍历多少次，当一个到达尾部后，下一个遍历次数需 - 1
    for (let j = 0; j < n - 1 - i; j++) {
      //  按升序排序
      if (arr[j] > arr[j + 1]) {
        // 交换位置
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    // 此轮一直未交换，则数据已排序，不需再执行后续遍历
    if (!swapped) break;
  }

  return arr;
}

// 此处可以直接使用 utils 提供的测试函数进行算法测试
testSort(bubbleSort);

// 算法测试
let arr = [10, 90, 20, 100, 50];
console.log('排序前：', arr);

let newArr = bubbleSort(arr);
console.log('排序后：', newArr);
