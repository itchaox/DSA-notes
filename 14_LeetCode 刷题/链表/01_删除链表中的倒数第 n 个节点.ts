/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2024-05-30 15:26
 * @LastAuthor : itchaox
 * @LastTime   : 2024-05-30 20:05
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummy = new ListNode(0);
  dummy.next = head;

  // 双指针
  let p1 = dummy;
  let p2 = dummy;

  // 快指针比慢指针，多移动 n + 1
  for (let i = 0; i <= n; i++) {
    p2 = p2.next!;
  }

  // 同时移动快、慢指针
  // 结束条件为快指针，指向 null
  while (p2) {
    p2 = p2.next!;
    p1 = p1.next!;
  }

  // 当前 p1 则为 需要删除的元素的前一个
  // 因此断开，指向需要删删除的指针即可
  p1.next = p1.next!.next;

  // 返回 head 元素，即 dummy.next
  return dummy.next;
}
