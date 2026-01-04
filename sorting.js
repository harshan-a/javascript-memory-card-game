const arr = [1, 2, 59, 38, 29, 99];
arr.sort((a, b) => {
  console.log(a, b);
  return a - b;
});
console.log(arr);