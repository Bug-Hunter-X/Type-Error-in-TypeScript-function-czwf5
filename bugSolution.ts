function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function addSafe(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseInt(a, 10) : a;
  const numB = typeof b === 'string' ? parseInt(b, 10) : b;
  return numA + numB; 
}

let result1 = add(5, 3); // result1 is 8
let result2 = subtract(10, 4); // result2 is 6

// this will now work correctly
console.log(addSafe(5, '3')); // result is 8
console.log(addSafe('5', 3)); // result is 8
console.log(addSafe('5','3')); // result is 8