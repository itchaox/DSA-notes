/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2024-05-09 12:35
 * @LastAuthor : itchaox
 * @LastTime   : 2024-05-10 11:07
 * @desc       :
 */

// 核心思想：利用双指针，求两个相同字符的中间长度
function lengthOfLongestSubstring(s: string): number {
  const n = s.length;

  let m = 0;
  let l = 0;

  const map = new Map<string, number>();

  for (let r = 0; r < n; r++) {
    const string = s[r];
    if (map.has(string) && map.get(string)! >= l) {
      l = map.get(string)! + 1;
    }

    map.set(string, r);

    // 每次循环时 r 会增加
    const c = r - l + 1;

    m = Math.max(m, c);
  }

  return m;
}

let s1 = 'abcabcbb';
let s2 = 'bbbbb';
let s3 = 'pwwkew';
let s4 = 'abcmnabcxyzbb';

console.log(lengthOfLongestSubstring(s1));
console.log(lengthOfLongestSubstring(s2));
console.log(lengthOfLongestSubstring(s3));
console.log(lengthOfLongestSubstring(s4));
