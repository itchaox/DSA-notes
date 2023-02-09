/*
 * @desc: Test
 * @Version: v1.00
 * @Author: wc
 * @Date: 2023-02-09 16:21:45
 * @LastEditors: wc
 * @LastEditTime: 2023-02-09 17:02:06
 */

import LinkedList from "./01_实现 LinkedList"

const linkedList = new LinkedList<string>()

linkedList.append("aaa")
linkedList.append("bbb")
linkedList.append("ccc")
linkedList.append("ddd")

linkedList.insert("www", 2)
linkedList.insert("w222ww", 0)

linkedList.traverse()
