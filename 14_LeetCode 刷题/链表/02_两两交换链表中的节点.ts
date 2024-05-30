/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2024-05-30 23:33
 * @LastAuthor : itchaox
 * @LastTime   : 2024-05-30 23:43
 * @desc       :
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function swapPairs(head: ListNode | null): ListNode | null {
  // 链表通用思路
  // 创建一个虚拟节点
  const dummy = new ListNode(0);

  // 初始化 dumy.next 为 head 节点
  dummy.next = head;

  // 声明一个变量，默认指向虚拟节点
  let p = dummy;

  // 根据此变量的节点去处理下一个节点和下下个节点
  // 因为要一直交换，但不知道结束条件，所以使用 while 循环
  while (p.next && p.next.next) {
    // 获取 2 个节点
    const n1 = p.next;
    const n2 = p.next.next;

    // 交换节点
    p.next = n2;
    n1.next = n2.next;
    n2.next = n1;

    // 用交换后处于右侧的节点，更新当前节点 P
    p = n1;
  }

  return dummy.next;
}

export {};
