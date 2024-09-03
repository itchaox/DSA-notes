/*
 * @Version    : v1.00
 * @Author     : Wang Chao
 * @Date       : 2024-09-03 14:39
 * @LastAuthor : Wang Chao
 * @LastTime   : 2024-09-03 15:05
 * @desc       :
 */

// FIXME 请实现击鼓传花功能

// FIXME 题目描述

/**
 * 输入为 ['a', 'b', 'c', 'd', 'e'] 3
 * 遇到 3 则删除该元素，返回最后剩下的数据
 */

// FIXME [] 返回 ''

// FIXME 实现
function hotPhtato(data: string[], num: number): string {
  const n = data.length;
  const queue: string[] = [];

  if (n === 0) return '';

  for (const s of data) {
    queue.push(s);
  }

  while (queue.length > 1) {
    for (let i = 1; i < num; i++) {
      const s = queue.shift()!;
      queue.push(s);
    }

    queue.shift();
  }

  return queue[0];
}

// FIXME 验证
const data = ['a', 'b', 'c', 'd', 'e'];
const num = 3;

console.log(hotPhtato(data, num));

// FIXME 时间和空间复杂度分析
// 时间 O(n * m)
// 空间 O(n)
