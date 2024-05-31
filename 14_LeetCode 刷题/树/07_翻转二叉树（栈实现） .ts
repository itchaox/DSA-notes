/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2024-05-31 12:37
 * @LastAuthor : itchaox
 * @LastTime   : 2024-05-31 13:53
 * @desc       :
 */

import { TreeNode } from '../Type/type';

function invertTree(root: TreeNode | null): TreeNode | null {
  // 边界判断
  if (!root) return null;

  // 使用栈处理
  const stack = [root];

  while (stack.length) {
    // 弹出栈顶元素
    const current = stack.pop()!;

    // 交换节点
    const left = current.left;
    current.left = current.right;
    current.right = left;

    // 有数据，则入栈
    if (current.left) stack.push(current.left);

    if (current.right) stack.push(current.right);
  }

  return root;
}
