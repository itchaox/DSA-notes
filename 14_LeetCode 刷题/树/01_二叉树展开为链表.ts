/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2024-05-22 12:26
 * @LastAuthor : itchaox
 * @LastTime   : 2024-05-22 22:08
 * @desc       :
 */

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function flatten(root: TreeNode | null): void {
  // 边界判断
  if (!root) return;

  // 使用栈结构
  const stack = [root];

  // 声明变量存储前一个元素
  let pre: TreeNode | null = null;

  // 遍历栈结构
  while (stack.length) {
    // 出栈
    const cur = stack.pop()!;

    // 处理前面元素
    if (pre) {
      pre.right = cur;
      pre.left = null;
    }

    // 将当前元素的左右节点压入栈中
    // 先将右节点入栈（先序遍历）
    if (cur.right) {
      stack.push(cur.right);
    }

    if (cur.left) {
      stack.push(cur.left);
    }

    pre = cur;
  }
}
