/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2024-05-08 10:31
 * @LastAuthor : itchaox
 * @LastTime   : 2024-05-08 16:01
 * @desc       :
 */
// 核心思想，以第一个字符串作为基准，然后向后去和其他字符串比较，然后不匹配则递减当前字符串然后继续比较

function longestCommonPrefix(strs: string[]): string {
  // 边界判断
  if (strs.length === 0) return '';

  // 基准元素
  let p = strs[0];

  // 要遍历数组中的所有元素，所以用 for 循环
  // 因为上面已经用 str[0] 为基准元素，所有 i 从 1 开始
  for (let i = 1; i < strs.length; i++) {
    const data = strs[i];

    // 只要 p 不在 data 中的前缀则继续循环
    while (data.indexOf(p) !== 0) {
      // 不匹配，则剔除 p 中最后一个字符
      p = p.slice(0, p.length - 1);

      // 当 p 中的字符串都剔除完了，则证明所有元素没有公共前缀
      if (p.length === 0) {
        return '';
      }
    }
  }

  return p;
}

// let strs = ['c', 'acc', 'ccc'];
let strs = ['ac', 'acc', 'accc'];

console.log(longestCommonPrefix(strs));
