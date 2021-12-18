let arry = [
  { id: 1, name: 'morita' },
  { id: 4, name: 'uro' },
  { id: 2, name: 'kenji' },
  { id: 3, name: 'ken' },
];

arry.sort((a, b) => {
  return a.id - b.id;
});

console.log(arry);

console.log([5, 3, 2, 9, 12, 15].sort((a, b) => a - b));
