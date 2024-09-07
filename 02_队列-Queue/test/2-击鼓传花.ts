/*
 * @Version    : v1.00
 * @Author     : Wang Chao
 * @Date       : 2024-09-03 14:39
 * @LastAuthor : Wang Chao
 * @LastTime   : 2024-09-07 19:08
 * @desc       :
 */

// FIXME 请实现击鼓传花功能

// FIXME 题目描述

/**
 *  输入: data = ['a', 'b', 'c', 'd', 'e'], num = 3
 *  输出: 'd'
 *
 *  输入: data = ['1', '2', '3', '4'], num = 2
 *  输出: '1'
 * 从 1 开始数遇到 3 则删除该元素，返回最后剩下的数据
 */

// FIXME [] 返回 ''

// FIXME 实现
function hotPhtato(arr: string[], num: number): string {
  const n = arr.length;

  if (n === 0) return '';

  let queue: string[] = [];

  for (const v of arr) {
    queue.push(v);
  }

  while (queue.length > 1) {
    for (let i = 1; i < num; i++) {
      const v = queue.shift()!;
      queue.push(v);
    }

    queue.shift();
  }

  return queue.shift()!;
}

// FIXME 验证
console.log(hotPhtato(['a', 'b', 'c', 'd', 'e'], 3));
console.log(hotPhtato(['1', '2', '3', '4'], 2));

// FIXME 时间和空间复杂度分析
