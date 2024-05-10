/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2024-05-07 09:39
 * @LastAuthor : itchaox
 * @LastTime   : 2024-05-07 10:18
 * @desc       :
 */

function maxSubArray(nums: number[]): number {
  const n = nums.length;

  // 1. 定义状态 / 初始状态
  let preValue = nums[0];

  let max = preValue;

  // 状态转移方程
  for (let i = 0; i < n; i++) {
    preValue = Math.max(nums[i], preValue + nums[i]);

    max = Math.max(preValue, max);
  }

  return max;
}

// 1 3 -1 6 16 4
console.log(maxSubArray([1, 2, -4, 6, 10, -12]));
