/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2024-06-02 18:46
 * @LastAuthor : itchaox
 * @LastTime   : 2024-06-12 12:50
 * @desc       :
 */

/**
 * 核心思想：
 * 1. 思路分析：最长递增子序列 = 当前节点之前的最长递增子序列 + 1（即当前节点）
 * 2. 有了以上分析后，能得出方程
 *  2.1 首先需要求出当前节点之前的最长递增子序列
 *  2.2 当前节点结果需要用到前一个结果
 * 3. 这种情况考虑使用动态规划的思路
 */

function lengthOfLIS(nums: number[]): number {
  const n = nums.length;

  // 1. 定义状态
  // 2. 初始动态规划数组
  const dp = new Array(n).fill(1);

  // 状态压缩，用一个变量处理
  let max = dp[0];

  // 3. 状态转移
  for (let i = 1; i < n; i++) {
    // 第一层循环，每个元素都要遍历到
    for (let j = 0; j < i; j++) {
      // 第二层循环，索引在当前元素之前的都需要判断一下
      if (nums[j] < nums[i]) {
        // 找到比当前元素小的元素

        // 状态转移方程
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }

    max = Math.max(max, dp[i]);
  }

  return max;
}
