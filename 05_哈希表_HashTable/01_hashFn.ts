/*
 * @Version    : v1.00
 * @Author     : wangchao
 * @Date       : 2023-10-31 16:50
 * @LastAuthor : wangchao
 * @LastTime   : 2023-10-31 16:57
 * @desc       : 哈希函数
 */

function hashFn(key: string, max: number): number {
  let hashCode = 0;
  const length = key.length;

  for (let i = 0; i < length; i++) {
    hashCode = 31 * hashCode + key.charCodeAt(i);
  }

  const index = hashCode % max;
  console.log("🚀  hashCode:", hashCode);

  return index;
}

console.log(hashFn("abc0", 7));
console.log(hashFn("abc1", 7));
console.log(hashFn("abc2", 7));
console.log(hashFn("abc3", 7));
console.log(hashFn("abc4", 7));
