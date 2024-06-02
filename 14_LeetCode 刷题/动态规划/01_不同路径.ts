/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2024-06-01 13:25
 * @LastAuthor : itchaox
 * @LastTime   : 2024-06-02 16:39
 * @desc       :
 */

/**
 * 动态规划思路：
 * 1. 定义状态
 * 2. 初始化
 * 3. 状态转移
 * 4. 处理结果
 */

/**
 * 核心思想：
 * 1. 矩阵：二维数组
 * 2. 当前数据需要用到前一个数据的结果，就用动态规划解题
 * 3. 读懂题意，按动态规划步骤拆分解题
 */

function uniquePaths(m: number, n: number): number {
  // 1. 定义状态
  // const dp = [[], [], []]

  // 定义状态时，直接把二位数组的结构处理好，方便后续进行 初始化等操作
  const dp = Array.from({ length: m }, () => Array(n).fill(0));

  // 2. 初始化
  // 最上和最左的可行路径都为 1
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }

  for (let i = 0; i < n; i++) {
    dp[0][i] = 1;
  }

  // 3. 状态转移
  // 当前节点路径数 = 左边路径数 + 上边路径数
  // i = 1，是因为上面已经对所有索引为 0 的数据都进行初始化
  // 双重 for 循环是为了，获取二维数组中的所有数据（除开已初始化的数据）
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  // 两个索引都需要 -1 的原因是，索引从 0 开始，而 m 和 n 从 1 开始
  return dp[m - 1][n - 1];
}
