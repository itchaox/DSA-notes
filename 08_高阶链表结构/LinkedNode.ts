/*
 * @Version    : v1.00
 * @Author     : wangchao
 * @Date       : 2024-03-26 14:33
 * @LastAuthor : wangchao
 * @LastTime   : 2024-03-26 16:56
 * @desc       :
 */

export class DoublyNode<T> {
  value: T;
  next: DoublyNode<T> | null = null;
  prev: DoublyNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}
