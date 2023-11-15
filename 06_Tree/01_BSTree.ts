/*
 * @Version    : v1.00
 * @Author     : wangchao
 * @Date       : 2023-11-07 11:15
 * @LastAuthor : wangchao
 * @LastTime   : 2023-11-15 13:39
 * @desc       : 二叉搜索树
 */

import { btPrint } from "hy-algokit";

class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;
  parent: TreeNode<T> | null = null;
  isRight: boolean = false;

  constructor(value: T) {
    this.value = value;
  }
}

class BSTree<T> {
  root: TreeNode<T> | null = null;

  /**
   * @desc  : 根据数据查询节点
   * @param  {T} value：数据
   * @return {any} 查询到的节点
   */
  private searchNode(value: T): TreeNode<T> | null {
    let current = this.root;
    let parent: TreeNode<T> | null = null;

    while (current) {
      if (current.value === value) return current;

      // 保存父节点
      parent = current;

      // 比较后修改节点
      if (current.value < value) {
        current = current.right;
      } else {
        current = current.left;
      }

      // 更新当前节点的父节点
      if (current) {
        current.parent = parent;
        // 子节点比父节点大，则是右节点
        current.isRight = current.value > current.parent.value;
      }
    }
    return null;
  }

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
    const current = this.searchNode(value);
    return !!current;
  }

  /**
   * @desc  : 获取后继节点
   * @param  {TreeNode} delNode：删除节点
   * @return {any} 后继节点
   */
  private getSuccessor(delNode: TreeNode<T>): TreeNode<T> {
    // 后继节点一定在右子树
    let current = delNode.right;
    let successor: TreeNode<T> | null = null;
    while (current) {
      successor = current;
      current = current.left;
      if (current) {
        current.parent = successor;
      }
    }

    // 获取后继节点
    if (successor !== delNode.right) {
      // 后继节点有右节点时
      successor!.parent!.left = successor?.right ?? null;

      successor!.right = delNode.right;
    }

    // 必须做的操作，把删除节点的左节点，给到后继节点
    successor!.left = delNode!.left;

    return successor!;
  }

  /**
   * @desc  : 删除节点
   * @param  {T} value：节点数据
   * @return {any}
   */
  remove(value: T): boolean {
    const current = this.searchNode(value);
    // 查找不到，则直接退出
    if (!current) return false;

    // 获取三个信息：当前节点、当前节点的父节点、当前节点是父节点的左节点还是右节点

    let replaceNode: TreeNode<T> | null = null;

    // FIXME 1. 删除叶子节点
    if (current.right === null && current.left === null) {
      replaceNode = null;
    }

    // FIXME 2. 只有一个节点，且是左节点
    else if (current.right === null) {
      replaceNode = current.left;
    }

    // FIXME 3. 只有一个节点，且是右节点
    else if (current.left === null) {
      replaceNode = current.right;
    }

    // FIXME 4. 有两个节点
    else {
      const successor = this.getSuccessor(current);
      replaceNode = successor;
    }

    // 当前节点是根节点
    if (current === this.root) {
      this.root = replaceNode;
    } else if (current.isRight) {
      current.parent!.right = replaceNode;
    } else {
      current.parent!.left = replaceNode;
    }

    return true;
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

console.log(bsTree.search(10));
console.log(bsTree.search(101));
console.log(bsTree.search(25));

bsTree.remove(11);
bsTree.remove(12);
bsTree.remove(5);

bsTree.print();
