/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2024-05-31 12:40
 * @LastAuthor : itchaox
 * @LastTime   : 2024-05-31 12:40
 * @desc       :
 */
export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
