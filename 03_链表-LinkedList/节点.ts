/*
 * @Version    : v1.00
 * @Author     : wangchao
 * @Date       : 2024-03-26 09:25
 * @LastAuthor : wangchao
 * @LastTime   : 2024-03-26 09:26
 * @desc       :
 */

class ListNode {
  val;
  next;

  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
