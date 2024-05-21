/**
 * 核心思想：
 * 1. 对称
 * 2. 双指针
 */

function longestPalindrome(s: string): string {
  const n = s.length;

  // 边界判断
  if (n <= 1) return s;

  let start = 0;
  let end = 0;
  // 每个元素都需要处理对称情况
  for (let i = 0; i < n; i++) {
    // eg：bcacb
    const l1 = centerExpand(s, i, i);

    // eg：bcaacb
    const l2 = centerExpand(s, i, i + 1);

    // 获取两个中的最大值
    const l = Math.max(l1, l2);

    // 求出最大的字符长度
    if (l > end - start) {
      const left = i - Math.floor((l - 1) / 2);
      const right = i + Math.floor(l / 2);

      start = left;
      end = right;
    }
  }

  return s.substring(start, end + 1);
}

// 求中间对称元素的个数
function centerExpand(s: string, left: number, right: number): number {
  const n = s.length;

  // 找到中间的字符串
  // 运用 while 循环，始终比较左右两个元素

  // 边界判断：left >= 0；right < n
  while (left >= 0 && right < n && s[left] === s[right]) {
    // 进入循环则表示对称的，则继续向外扩散
    left--;
    right++;
  }

  // right - left + 1，这个是正常的根据索引求元素个数方式
  // 但是我们这里会再向左右移动1个元素，即 +2 元素
  // 所以最终结果为，right - left + 1 - 2  = right - left - 1

  return right - left - 1;
}

console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));
