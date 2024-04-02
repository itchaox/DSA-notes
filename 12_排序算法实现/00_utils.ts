/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2024-04-02 13:11
 * @LastAuthor : itchaox
 * @LastTime   : 2024-04-02 14:20
 * @desc       : 工具集合
 */

// FIXME 默认升序排序

/**
 * @desc  : 判断排序是升序
 * @param  {number} arr：数组
 * @return {any} 是否升序
 */
function isSort(arr: number[]): boolean {
  for (let i = 0; i < arr.length; i++) {
    // 只有有一个不是升序，则返回 false
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }

  return true;
}

/**
 * @desc  : 测试排序的功能
 * @param  {any} sortFn：排序函数
 */
export function testSort(sortFn: Function) {
  // 构造随机测试的假数据
  let arr = new Array(10);
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random() * 500);
  }

  console.log('排序前：', arr);

  let newArr = sortFn(arr);
  console.log('排序后：', newArr);

  console.log('排序是否成功？', isSort(newArr));
}
