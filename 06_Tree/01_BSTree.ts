/*
 * @Version    : v1.00
 * @Author     : wangchao
 * @Date       : 2023-11-07 11:15
 * @LastAuthor : wangchao
 * @LastTime   : 2023-11-13 13:17
 * @desc       : 二叉搜索树
 */

import { btPrint } from "hy-algokit";

class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

class BSTree<T> {
  root: TreeNode<T> | null = null;

  // 打印树结构
  print() {
    btPrint(this.root);
  }

  private insertNode(node: TreeNode<T>, newNode: TreeNode<T>) {
    if (newNode.value < node.value) {
      // 新节点比当前节点小，则放左侧比较
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      // 新节点比当前节点大，则放左侧比较
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  /**
   * @desc  : 插入数据
   * @param  {T} value：数据
   */
  insert(value: T) {
    const node = new TreeNode(value);
    if (!this.root) {
      // 无根节点，则将插入节点作为根节点
      this.root = node;
    } else {
      // 有根节点，将插入节点与树中节点比较
      this.insertNode(this.root, node);
    }
  }

  /**
   * @desc  : 先序遍历
   */
  preOrderTraverse() {
    this.preOrderTraverseNode(this.root);
  }

  private preOrderTraverseNode(node: TreeNode<T> | null) {
    if (node) {
      console.log("🚀  node.value:", node.value);
      // 先访问左子树，再访问右子树
      this.preOrderTraverseNode(node.left);
      this.preOrderTraverseNode(node.right);
    }
  }

  /**
   * @desc  : 中序遍历
   */
  inOrderTraverse() {
    this.inOrderTraverseNode(this.root);
  }

  private inOrderTraverseNode(node: TreeNode<T> | null) {
    if (node) {
      this.inOrderTraverseNode(node.left);
      console.log("🚀  node.value:", node.value);
      this.inOrderTraverseNode(node.right);
    }
  }

  /**
   * @desc  : 后序遍历
   */
  postOrderTraverse() {
    this.postOrderTraverseNode(this.root);
  }

  private postOrderTraverseNode(node: TreeNode<T> | null) {
    if (node) {
      this.postOrderTraverseNode(node.left);
      this.postOrderTraverseNode(node.right);
      console.log("🚀  node.value:", node.value);
    }
  }

  /**
   * @desc  : 层序遍历
   */
  levelOrderTraverse() {
    if (!this.root) return;

    const queue: TreeNode<T>[] = [];
    queue.push(this.root);

    while (queue.length) {
      const current = queue.shift()!;
      console.log("🚀  current.value:", current.value);

      if (current.left) {
        queue.push(current.left);
      }

      if (current.right) {
        queue.push(current.right);
      }
    }
  }

  // 获取最大值
  get maxValue(): T | null {
    let current = this.root;

    while (current?.right) {
      current = current.right;
    }

    return current?.value ?? null;
  }

  // 获取最小值
  get minValue(): T | null {
    let current = this.root;

    while (current?.left) {
      current = current.left;
    }

    return current?.value ?? null;
  }

  /**
   * @desc  : 查找指定数据
   * @param  {T} value：数据
   * @return {any} 是否查到
   */
  search(value: T): boolean {
    let current = this.root;
    while (current) {
      if (current.value === value) return true;

      if (current.value < value) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
    return false;
  }
}

const bsTree = new BSTree();

bsTree.insert(11);
bsTree.insert(7);
bsTree.insert(15);
bsTree.insert(5);
bsTree.insert(3);
bsTree.insert(9);
bsTree.insert(8);
bsTree.insert(10);
bsTree.insert(13);
bsTree.insert(12);
bsTree.insert(14);
bsTree.insert(20);
bsTree.insert(18);
bsTree.insert(25);
bsTree.insert(6);

console.log("\n树结构打印如下：");
bsTree.print();

console.log("\n前序遍历结果如下：");
bsTree.preOrderTraverse();

console.log("\n中序遍历结果如下：");
bsTree.inOrderTraverse();

console.log("\n后序遍历结果如下：");
bsTree.postOrderTraverse();

console.log("\n层序遍历结果如下：");
bsTree.levelOrderTraverse();

console.log("树的最大值：", bsTree.maxValue);
console.log("树的最小值：", bsTree.minValue);

console.log(bsTree.search(10));
console.log(bsTree.search(101));
console.log(bsTree.search(25));
