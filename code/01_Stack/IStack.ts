/*
 * @Version    : v1.00
 * @Author     : wangchao
 * @Date       : 2023-10-08 14:57
 * @LastAuthor : wangchao
 * @LastTime   : 2023-10-08 14:58
 * @desc       : 
 */

interface IStack<T> {
  push(element: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
  size(): number;
  isEmpty(): boolean;
}

export default IStack;