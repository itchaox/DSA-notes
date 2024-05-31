/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2024-05-22 12:26
 * @LastAuthor : itchaox
 * @LastTime   : 2024-05-31 12:40
 * @desc       :
 */
import { TreeNode } from '../Type/type';

function flatten(root: TreeNode | null): void {
  // 边界判断
  if (!root) return;

  // 使用栈结构处理
  const stack = [root];

  let pre: TreeNode | null = null;

  // 处理 stack 所有元素
  while (stack.length) {
    // 获取栈顶元素
    const current = stack.pop()!;

    // 处理 pre 结构
    if (pre) {
      pre.right = current;
      pre.left = null;
    }

    // 先序遍历：左子节点 -> 右子节点 -> 当前节点
    // 所以右节点先入栈
    if (current.right) {
      stack.push(current.right);
    }

    if (current.left) {
      stack.push(current.left);
    }

    // 遍历过程中，更新 pre 数据
    // FIXME 此处 stack 已经在它作为子节点的时候，入栈过

    pre = current;
  }
}
