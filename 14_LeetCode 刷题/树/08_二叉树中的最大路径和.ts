/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2024-06-01 11:22
 * @LastAuthor : itchaox
 * @LastTime   : 2024-06-01 11:51
 * @desc       :
 */
import { TreeNode } from '../Type/type';

function maxPathSum(root: TreeNode | null): number {
  // 初始化为负无穷，保证后续能更新最大值
  let max = -Infinity;

  // 获取当前节点能提供的路径最大值
  function dsf(node: TreeNode | null): number {
    // 边界判断
    if (!node) return 0;

    const leftSum = Math.max(dsf(node.left), 0);
    const rightSum = Math.max(dsf(node.right), 0);

    const currentSum = node.val + leftSum + rightSum;

    // 最大路径和
    max = Math.max(currentSum, max);

    // 当前节点能提供的最大路径和
    const _currentPathSum = node.val + Math.max(leftSum, rightSum);
    return _currentPathSum;
  }

  dsf(root);

  return max;
}
