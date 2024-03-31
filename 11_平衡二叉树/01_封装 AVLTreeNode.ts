/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2024-03-31 18:05
 * @LastAuthor : itchaox
 * @LastTime   : 2024-03-31 18:54
 * @desc       :
 */

class AVLTreeNode<T> {
  value: T;
  left: AVLTreeNode<T> | null = null;
  right: AVLTreeNode<T> | null = null;

  // 父节点
  parent: AVLTreeNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }

  // 判断当前节点是父节点的左节点
  get isLeft(): boolean {
    return !!(this.parent && this.parent.left === this);
  }

  // 判断当前节点是父节点的右节点
  get isRight(): boolean {
    return !!(this.parent && this.parent.right === this);
  }

  // 获取当前节点高度，取左右子节点高度的最大值
  private getHeight(): number {
    // 递归获取子节点高度
    let leftHeight = this.left ? this.left.getHeight() : 0;
    let rightHeight = this.right ? this.right.getHeight() : 0;

    return Math.max(leftHeight, rightHeight) + 1;
  }

  // 判断是平衡树
  get isBalanced(): boolean {
    let leftHeight = this.left ? this.left.getHeight() : 0;
    let rightHeight = this.right ? this.right.getHeight() : 0;
    const factor = leftHeight - rightHeight;

    // 平衡树的权值必须是 -1 或 0 或 1
    return [-1, 0, 1].includes(factor);
  }

  // 获取高度更高的子节点
  get higherChild(): AVLTreeNode<T> | null {
    let leftHeight = this.left ? this.left.getHeight() : 0;
    let rightHeight = this.right ? this.right.getHeight() : 0;

    if (leftHeight > rightHeight) {
      return this.left;
    } else {
      return this.right;
    }
  }
}

// FIXME 测试代码
const avlTreeNode = new AVLTreeNode(10);
avlTreeNode.right = new AVLTreeNode(15);
avlTreeNode.right.right = new AVLTreeNode(20);

console.log(avlTreeNode.isBalanced); // false
console.log(avlTreeNode.higherChild); // AVLTreeNode value:15
