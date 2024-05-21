/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2024-05-09 12:35
 * @LastAuthor : itchaox
 * @LastTime   : 2024-05-10 17:16
 * @desc       :
 */

// 核心思想：利用双指针，求两个相同字符的中间长度
function lengthOfLongestSubstring(s: string): number {
  const n = s.length;

  let max = 0;
  let l = 0;
  const map = new Map<string, number>();

  for (let r = 0; r < n; r++) {
    const string = s[r];
    if (map.has(string) && map.get(string)! >= l) {
      l = map.get(string)! + 1;
    }

    map.set(string, r);

    const current = r - l + 1;
    max = Math.max(max, current);
  }

  return max;
}

let s1 = 'abcabcbb';
let s2 = 'bbbbb';
let s3 = 'pwwkew';
let s4 = 'abcmnabcxyzbb';

console.log(lengthOfLongestSubstring(s1));
console.log(lengthOfLongestSubstring(s2));
console.log(lengthOfLongestSubstring(s3));
console.log(lengthOfLongestSubstring(s4));
