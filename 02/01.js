let arry = ['aa', 'bb', 'cc', 'dd', 'ee', 'ff', 'gg'];
console.log('splice', arry.splice(3, 3));
console.log('original', arry);

arry = ['aa', 'bb', 'cc', 'dd', 'ee', 'ff', 'gg'];
console.log('slice', arry.slice(3, -1));
console.log('original', arry);

console.log('slice', arry.slice(0, 2));
console.log('slice', arry.slice(0, 1));
console.log('slice', arry.slice(0, -1));
