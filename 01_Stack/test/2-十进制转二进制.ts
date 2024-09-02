// 35;
// 17;
// 29;
import Stack from './1-实现栈-数组-20240902';

function Ten2Two(value: any) {
  let result = '';
  const stack = new Stack();

  while (value > 0) {
    const s = value % 2;
    stack.push(s);

    value = Math.floor(value / 2);
  }

  for (let i = stack.size() - 1; i >= 0; i--) {
    result += stack.pop();
  }

  return result;
}

console.log(Ten2Two(35));
console.log(Ten2Two(17));
console.log(Ten2Two(29));
