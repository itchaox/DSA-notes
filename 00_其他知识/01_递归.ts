function recursion(number: any) {
  if (number === 1) return number;

  number--;
  return recursion(number);
}

console.log(recursion(10));
