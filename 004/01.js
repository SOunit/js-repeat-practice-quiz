const arr = ['a', 'b'];

const result = arr.map((item, i) => {
  console.log(item + i);
  return item + i;
});

console.log(result);

arr.forEach((item, i) => {
  console.log(item, i);
});
