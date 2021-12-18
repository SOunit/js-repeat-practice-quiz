const set = new Set();
console.log(set);

const jack = { name: 'Jack' };
set.add(jack);
console.log(set);

console.log(set.has(jack));
console.log(set.has({ name: 'jack' }));
