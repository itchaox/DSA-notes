export default class Heap<T> {
  // 存储堆元素
  private data: T[] = [];

  // 堆元素数量
  private length: number = 0;

  constructor(list: T[] = []) {
    this.buildHeap(list);
  }

  // 两数交换
  private swap(i: number, j: number) {
    const temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }

  // 获取堆数量
  get size(): number {
    return this.length;
  }

  // 返回最大值/最小值
  peek(): T | undefined {
    return this.data[0];
  }

  // 判断是否为空
  isEmpty(): boolean {
    return this.length === 0;
  }

  // 插入元素
  insert(value: T) {
    // 直接把新元素放入数组尾部
    this.data.push(value);
    this.length++;

    this.heapify_up();
  }

  // 上滤操作
  heapify_up() {
    // 获取插入元素索引
    let currentIndex = this.length - 1;

    // 只要 currentIndex > 0 就一直循环
    while (currentIndex > 0) {
      // 获取父节点索引
      let parentIndex = Math.floor((currentIndex - 1) / 2);

      // 子节点小于父子点，不需交换数据
      if (this.data[currentIndex] <= this.data[parentIndex]) {
        break;
      }

      // 交换父子节点数据
      this.swap(currentIndex, parentIndex);

      // 更新当前节点索引
      currentIndex = parentIndex;
    }
  }

  // 提取
  extract(): T | undefined {
    // 1. 边界情况处理
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.length--;
      return this.data.pop();
    }

    // 2. 提取并需要返回的最大值
    const topValue = this.data[0];
    this.data[0] = this.data.pop()!;
    this.length--;

    // 3. 维护最大堆的特性：下滤操作
    this.heapify_down(0);

    return topValue;
  }

  // 下滤操作
  heapify_down(start: number) {
    let index = start;

    while (2 * index + 1 < this.length) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let largerIndex = leftChildIndex;

      if (rightChildIndex < this.length && this.data[rightChildIndex] > this.data[leftChildIndex]) {
        largerIndex = rightChildIndex;
      }

      // 子节点大于当前节点，则交换位置
      if (this.data[largerIndex] > this.data[index]) {
        this.swap(largerIndex, index);
        index = largerIndex;
      } else {
        break;
      }
    }
  }

  // 原地建堆
  buildHeap(list: T[]) {
    this.data = list;
    this.length = list.length;

    // 获取最后一个非叶子节点的索引
    const start = Math.floor((this.length - 1) / 2);

    for (let i = start; i >= 0; i--) {
      this.heapify_down(i);
    }
  }
}

// const heap = new Heap<number>([9, 11, 20, 56, 23, 45]);
const heap = new Heap<number>();

heap.insert(1);
heap.insert(4);
heap.insert(15);

console.log(heap.extract());
console.log(heap.extract());

console.log(heap);
