const array = [2, 3, 6, 6, 7, 5];
const large = Math.max(...array);

const max = array.filter(ele => ele < large);

console.log(Math.max(...max))
