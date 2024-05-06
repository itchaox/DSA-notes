/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2024-05-06 00:05
 * @LastAuthor : itchaox
 * @LastTime   : 2024-05-06 15:17
 * @desc       :
 */

// import { swap, testSort } from './00_utils';

// 两数交换
function swap(arr: number[], i: number, j: number) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// 核心思想：找到一个基准元素，然后基准元素左侧都比它小，右侧都比它大
function quickSort(arr: number[]): number[] {
  // 直接调用划分区域

  // 以最左边和最右边作为临界点
  partition(0, arr.length - 1);

  // 划分区域
  function partition(left: number, right: number) {
    // 递归的结束条件，越界判断
    if (left >= right) return;

    // 找到基准点，以最右边为基准点

    const pivot = arr[right];

    // 用双指针
    let i = left;
    let j = right - 1;

    // 左侧的数据都要比基准点小，右侧的数据都要比基准点大
    // 因此需要找到不符合该要求的数据，即左侧第一个比基准点大的数据，右侧第一个比基准点小的数据

    // 只知道循环结束的条件，不知道循环次数，直接用 while 不要用 for 循环

    while (i <= j) {
      // 只要符合 i <= j 则需要继续处理剩余的元素，看剩余的元素是否需要交换

      // 这里面是一次交换
      while (arr[i] < pivot) {
        i++;
      }

      while (arr[j] > pivot) {
        j--;
      }

      // 必须要 i <= j 这个交换才有意义
      if (i <= j) {
        swap(arr, i, j);
        i++;
        j--;
      }
    }

    // 一整个区域交换完毕后，则需要把基准点元素放到中间，使其符合基准点左侧的元素都比基准点小，基准点右侧都比基准点大的特性
    swap(arr, i, right);

    // 递归的处理剩余的区域

    // 左侧划分区域
    partition(left, j);

    // 右侧划分区域
    partition(i + 1, right);
  }

  return arr;
}

// 算法测试
let arr = [10, 90, 20, 100, 50];
console.log('排序前：', arr); // [ 10, 90, 20, 100, 50 ]

let newArr = quickSort(arr);
console.log('排序后：', newArr); // [ 10, 20, 50, 90, 100 ]

// testSort(quickSort);
