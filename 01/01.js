const a = { a: 'a' };
const b = { b: 'b' };

// answer 1
let c = Object.assign({}, a, b);
console.log(c);

// answer 2
c = { ...a, ...b };
console.log(c);
