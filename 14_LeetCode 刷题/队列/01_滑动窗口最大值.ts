/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2024-05-28 12:37
 * @LastAuthor : itchaox
 * @LastTime   : 2024-05-30 00:19
 * @desc       :
 */

// #队列 #双端队列

function maxSlidingWindow(nums: number[], k: number): number[] {
  // 数组长度
  const n = nums.length;

  // 初始化双端队列
  const deQueue: number[] = [];

  const res: number[] = [];

  // 遍历所有元素
  for (let i = 0; i < n; i++) {
    // 双端队列存在才判断
    // 插入元素在 deQueue 要是最大值，先剔除从后至前比 num[i] 小的元素

    // 让插入的元素是最大值 deQueue[deQueue.length - 1]
    while (deQueue.length && nums[i] > nums[deQueue[deQueue.length - 1]]) {
      // 小于 num[i]

      // 剔除 deQueue 中的数据
      deQueue.pop();
    }

    // 否则，将 i 插入 deQueue 尾部，deQueue 只放索引
    deQueue.push(i);

    // 一次判断双端队列的头部，需要判断前面的元素是否越界
    // i - k，即为最左边的边界

    while (deQueue.length && deQueue[0] <= i - k) {
      deQueue.shift();
    }

    // 必须要满足滑块的长度
    if (i >= k - 1) {
      // 获取头部元素，即滑块的最大值
      const max = nums[deQueue[0]];
      res.push(max);
    }
  }

  return res;
}
