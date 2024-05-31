/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2024-05-31 12:37
 * @LastAuthor : itchaox
 * @LastTime   : 2024-05-31 12:48
 * @desc       :
 */

import { TreeNode } from '../Type/type';

function invertTree(root: TreeNode | null): TreeNode | null {
  // 边界判断
  if (!root) return null;

  // 交换节点

  // 先暂存节点
  const left = root.left;

  // 基本写法（针对一个层级）
  // root.left = root.right;
  // root.right = left;

  // 递归处理所有层级
  root.left = invertTree(root.right);
  root.right = invertTree(left);
  return null;
}
