/*
 * @Version    : v1.00
 * @Author     : wangchao
 * @Date       : 2023-11-01 10:25
 * @LastAuthor : wangchao
 * @LastTime   : 2023-11-01 17:09
 * @desc       : 哈希表实现
 */

class HashTable<T> {
  // 存放桶的数组
  // private storage: [string, T][][] = [];
  storage: [string, T][][] = [];
  // 桶的长度
  private length: number = 7;
  // 已存放元素的总数
  private count: number = 0;

  /**
   * @desc  : 修改哈希表长度
   * @param  {number} newLength：新长度
   */
  private resize(newLength: number) {
    this.length = newLength;

    const _oldStorage = this.storage;

    // 哈希表置空
    this.storage = [];
    this.count = 0;

    // 根据新哈希表长度，进行再哈希化，让旧数据能放在新哈希表的正确位置
    // （哈希表长度会影响哈希表查找，所以有再哈希化）

    _oldStorage.forEach((bucket) => {
      if (!bucket) return;

      for (let i = 0; i < bucket.length; i++) {
        const tuple = bucket[i];
        const tupleKey = tuple[0];
        const tupleValue = tuple[1];
        this.put(tupleKey, tupleValue);
      }
    });
  }

  /**
   * @desc  : 哈希函数
   * @param  {string} key：
   * @return {any} 下标值
   */
  hashFn(key: string) {
    let hashCode = 0;
    const max = this.length;
    let length = key.length;

    for (let i = 0; i < length; i++) {
      hashCode = 31 * hashCode + key.charCodeAt(i);
    }

    let index = hashCode % max;
    return index;
  }

  /**
   * @desc  : 修改或新增数据
   */
  put(key: string, value: T) {
    // 根据key，获取哈希数组的下标
    let index = this.hashFn(key);

    // 根据下标，获取桶
    let bucket = this.storage[index];

    // 桶不存在则构造桶
    if (!bucket) {
      bucket = [];
      this.storage[index] = bucket;
    }

    // 标识是否更新操作
    let isUpdate = false;

    const bucketLength = bucket.length;
    for (let i = 0; i < bucketLength; i++) {
      const tuple = bucket[i];
      const tupleKey = tuple[0];
      let tupleValue = tuple[1];

      // 找到key, 则更新
      if (tupleKey === key) {
        tupleValue = value;
        isUpdate = true;
      }
    }

    // 不是更新操作，则新增
    if (!isUpdate) {
      bucket.push([key, value]);
      this.count++;

      const loadFactor = this.count / this.length;
      if (loadFactor > 0.75) {
        // 考虑查找性能，在加载因子 > 0.75 时，需扩容
        this.resize(this.length * 2);
      }
    }
  }

  /**
   * @desc  : 根据key获取数据
   */
  get(key: string): T | undefined {
    const index = this.hashFn(key);

    const bucket = this.storage[index];

    if (!bucket) return undefined;

    const bucketLength = bucket.length;

    for (let i = 0; i < bucketLength; i++) {
      const tuple = bucket[i];
      const tupleKey = tuple[0];
      const tupleValue = tuple[1];

      if (tupleKey === key) {
        return tupleValue;
      }
    }

    return undefined;
  }

  /**
   * @desc  : 根据key删除数据
   */
  delete(key: string): T | undefined {
    const index = this.hashFn(key);

    let bucket = this.storage[index];
    if (!bucket || bucket.length === 0) return undefined;

    // 根据key，删除对应数据
    const bucketLength = bucket.length;

    for (let i = 0; i < bucketLength; i++) {
      const tuple = bucket[i];
      const tupleKey = tuple[0];
      const tupleValue = tuple[1];
      if (tupleKey === key) {
        bucket.splice(i, 1);
        this.count--;

        const loadFactor = this.count / this.length;
        if (loadFactor < 0.25 && this.length > 7) {
          // 考虑节约空间，当加载因子 < 0.25 时，则需缩容
          this.resize(Math.floor(this.length / 2));
        }

        return tupleValue;
      }
    }

    return undefined;
  }
}

const hashTable = new HashTable();

hashTable.put("aba", 1);
hashTable.put("abb", 1);
hashTable.put("abc", 1);
hashTable.put("abd", 1);
hashTable.put("abe", 1);
hashTable.put("abf", 1);

hashTable.delete("aba");
hashTable.delete("abb");
hashTable.delete("abc");

console.log(hashTable);
