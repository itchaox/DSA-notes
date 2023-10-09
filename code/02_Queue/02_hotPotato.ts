/*
 * @Version    : v1.00
 * @Author     : wangchao
 * @Date       : 2023-10-09 14:52
 * @LastAuthor : wangchao
 * @LastTime   : 2023-10-09 15:31
 * @desc       : 击鼓传花
 */

/**
 * //FIXME 核心思想
 * 1. 使用队列实现，利用先进先出的特性
 * 2. 小于限制数字时，先出队再入队
 * 3. 等于限制数字时，只出队不入队
 */

import ArrayQueue from "./01_ArrayQueue";

function hotPotato(list: string[], num: number): string | undefined {
  if (list.length === 0) return;

  const queue = new ArrayQueue<string>();

  // 1. 依次入队
  for (const item of list) {
    queue.enqueue(item);
  }

  while (queue.size() > 1) {
    // 2. 小于限制数字
    for (let i = 1; i < num; i++) {
      let data = queue.dequeue()!;
      queue.enqueue(data);
    }

    // 3. 等于限制数字
    queue.dequeue();
  }

  return queue.dequeue();
}

console.log(hotPotato(["wang", "li", "he", "min"], 3));
